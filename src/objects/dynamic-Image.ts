import { Scene } from "phaser";

export default class DynamicImage extends Phaser.GameObjects.Container {
    image: Phaser.GameObjects.Image;
    maskGraphics: Phaser.GameObjects.Graphics;

    constructor(scene: Scene, x: number, y: number, imageUrl: string, userId: string) {
        super(scene, x, y);
        scene.add.existing(this);
        const size = 100;
        const radius = 20; // Adjust for corner roundness


        this.setVisible(false);



        // 🔹 Placeholder image (inside container, not scene)
        this.image = scene.add.image(0, 0, userId); // Keep at (0,0) so it moves with container
        this.image.setDisplaySize(size, size); // Ensure it fits in the mask
        // 🔹 Load and update image dynamically
        this.loadImage(scene, imageUrl, userId);

        // 🔹 Create a rounded rectangle mask
        this.maskGraphics = scene.make.graphics({ x: x, y: y });
        this.maskGraphics.setVisible(false)
        this.maskGraphics.fillStyle(0xffffff, 1);
        this.maskGraphics.fillRoundedRect(-size / 2, -size / 2, size, size, radius);

        // 🔹 Apply the mask to the image
        const mask = this.maskGraphics.createGeometryMask();
        this.image.setMask(mask);

        this.add([this.image]);
        // scene.events.on("update", this.updateMask, this);


    }
    // updateMask() {
    //     // 🔹 Move the mask with the container
    //     const size = 100;
    //     const radius = 20; // Adjust for corner roundness
    //     this.maskGraphics.clear();
    //     this.maskGraphics.fillRoundedRect(-size / 2, -size / 2, size, size, radius);
    // }
    fly() {

        this.scene.tweens.add({
            targets: this,
            y: 0, // Move up
            alpha: 0,  // Fade out
            duration: 5000,
            // repeat: -1,
            ease: "Power2",
            onComplete: () => {
                console.log("destroy")
                this.destroy();

            },
            onUpdate : ()=>{
                this.maskGraphics.setPosition(this.x, this.y);
            }
        });

    }

    loadImage(scene: Scene, imageUrl: string, userId: string) {

        if (scene.textures.exists(userId)) {
            this.image.setTexture(userId);
            this.setVisible(true);
            this.fly();
            return;
        }

        let img = new Image();
        img.crossOrigin = "anonymous";
        img.src = imageUrl;

        img.onload = () => {
            scene.textures.addImage(userId, img);
            this.image.setTexture(userId);

            // 🔹 Scale while keeping the aspect ratio
            const scale = 100 / Math.max(img.width, img.height);
            this.image.setScale(scale);
            this.setVisible(true);
             this.fly()
        };

        img.onerror = () => {
            console.error("Failed to load image:", imageUrl);
        };
    }
}
