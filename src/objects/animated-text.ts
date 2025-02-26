import { Scene } from "phaser";

export default class AnimatedText extends Phaser.GameObjects.Container {
    image: Phaser.GameObjects.Image;
    text: Phaser.GameObjects.Text;
    maskShapeGraphics: Phaser.GameObjects.Graphics;
    likeText: Phaser.GameObjects.Text;

    constructor(scene: Scene, x: number, y: number, 
        userName: string, likeCount: number) {
        super(scene, x, y);
        scene.add.existing(this);

        const size = 100;

        // 🔹 Text (OUTSIDE the container)
        this.text = scene.add.text(0, 0 + size / 2 + 15, userName, {
            fontFamily: "Arial Black",
            fontSize: "24px",
            color: "#ffffff",
            stroke: "#000000",
            strokeThickness: 8,
            align: "center",
            maxLines: 1,
            wordWrap: { width: 100, useAdvancedWrap: true },
        })
            .setOrigin(0.5)

        // 🔹 Likes Counter (Shows personal & total likes)
        this.likeText = scene.add.text(0, 0 + size / 2 + size / 2, `❤️ ${likeCount}`, {
            fontFamily: "Arial Black",
            fontSize: "24px",
            color: "#ffffff",
            stroke: "#000000",
            strokeThickness: 8,
            align: "center",
            maxLines: 1,
            wordWrap: { width: 100, useAdvancedWrap: true },
        })
            .setOrigin(0.5)

        // 🔹 Add only the image & border inside the container
        this.add([this.text, this.likeText]);
         this.startAnimation(scene);

    }

    startAnimation(scene: Scene) {

        // 🔹 Animate text separately
        scene.tweens.add({
            targets: this,
            y: 0, // Move up
            alpha: 0,  // Fade out
            duration: 5000,
            onComplete: () => {

                console.log("destroy")
                this.destroy();

            },
            ease: "Power2",
        });


    }



}
