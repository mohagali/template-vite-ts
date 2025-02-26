import { Scene } from "phaser";

export default class DynamicCard extends Phaser.GameObjects.Container {
    image: Phaser.GameObjects.Image;
    text: Phaser.GameObjects.Text;
    maskShapeGraphics: Phaser.GameObjects.Graphics;
    likeText: Phaser.GameObjects.Text;

    constructor(scene: Scene, x: number, y: number, imageUrl: string, text: string) {
        super(scene, x, y);
        scene.add.existing(this);

        const size = 100;

        // 🔹 Create a mask shape (graphics object)
        this.maskShapeGraphics = scene.add.graphics().setVisible(false);
        this.maskShapeGraphics.fillStyle(0xffffff, 1);
        this.maskShapeGraphics.fillCircle(0, 0, size / 2);
        this.mask = this.maskShapeGraphics.createGeometryMask();
      
        // 🔹 Create a circular border (gold frame)
        const border = scene.add.graphics();
        border.lineStyle(5, 0xffd700, 1);
        border.strokeCircle(0, 0, size / 2 + 2);

        // 🔹 Placeholder image (before loading dynamically)
        this.image = scene.add.image(0, 0, "loadingTexture")
            .setMask(this.mask);

        // 🔹 Text (OUTSIDE the container)
        this.text = scene.add.text(x, y + size / 2 + 15, text, {
            fontFamily: "Arial Black",
            fontSize: "24px",
            color: "#ffffff",
            stroke: "#000000",
            strokeThickness: 8,
            align: "center",
            maxLines: 1,
            wordWrap: { width: 100, useAdvancedWrap: true },
        })
            .setOrigin(0.5).setAlpha(0);

                    // 🔹 Likes Counter (Shows personal & total likes)
        this.likeText = scene.add.text(x, y + size / 2 + 15 + 24, `❤️ ${44}`, {
            fontFamily: "Arial Black",
            fontSize: "24px",
            color: "#ffffff",
            stroke: "#000000",
            strokeThickness: 8,
            align: "center",
            maxLines: 1,
            wordWrap: { width: 100, useAdvancedWrap: true },
        })
        .setOrigin(0.5).setAlpha(0);;
     

        // 🔹 Add only the image & border inside the container
        this.add([border, this.image]);

        // ❌ Hide the entire shape (will be shown after image loads)
        this.setAlpha(0);

        // 🔹 Load and update image dynamically
        this.loadImage(scene, imageUrl);

        // 🔹 Animate container (image moves up, text fades separately)
        // scene.tweens.add({
        //     targets: this,
        //     y: y - 50, // Move up
        //     alpha: 0,  // Fade out
        //     duration: 5000,
        //     repeat: -1,
        //     ease: "Power2",
        // });

        // 🔹 Animate text separately
        // scene.tweens.add({
        //     targets: this.text,
        //     y: y - 50, // Move up
        //     alpha: 0,  // Fade out
        //     duration: 5000,
        //     repeat: -1,
        //     ease: "Power2",
        // });

        // 🔹 Add to scene's update loop
        scene.events.on("update", this.updateMask, this);
    }

    startAnimation(scene: Scene) {
        // 🔹 Animate container (image moves up, text fades separately)
        scene.tweens.add({
            targets: this,
            y: - 50, // Move up
            alpha: 0,  // Fade out
            duration: 5000,
            repeat: -1,
            ease: "Power2",
        });

        // 🔹 Animate text separately
        scene.tweens.add({
            targets: [this.text],
            y:  - 50 + 50 + 15, // Move up
            alpha: 0,  // Fade out
            duration: 5000,
            repeat: -1,
            ease: "Power2",
        });

        scene.tweens.add({
            targets: [this.likeText],
            y: - 50 + 50 / 2 + 15 + 24, // Move up
            alpha: 0,  // Fade out
            duration: 5000,
            repeat: -1,
            ease: "Power2",
        });
    }

    updateMask() {
        // 🔹 Move the mask with the container
        this.maskShapeGraphics.clear();
        this.maskShapeGraphics.fillCircle(this.x, this.y, 50);
    }

    loadImage(scene: Scene, imageUrl: string) {
        let img = new Image();
        img.crossOrigin = "anonymous"; // Avoid CORS issues
        img.src = imageUrl;

        img.onload = () => {
            scene.textures.addImage("dynamicImage", img);
            this.image.setTexture("dynamicImage");

            // 🔹 Correct scaling (keep aspect ratio)
            const scale = 100 / Math.max(img.width, img.height);
            this.image.setScale(scale);
            
            // ✅ Now that the image is ready, show the entire shape
             this.setAlpha(1);
            this.text.setAlpha(1);
            this.likeText.setAlpha(1);

            // ✅ Start animation only now
             this.startAnimation(scene);
        };

        img.onerror = () => {
            console.error("Failed to load image:", imageUrl);
        };
    }
}
