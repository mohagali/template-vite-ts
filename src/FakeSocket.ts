import Phaser from 'phaser';

class FakeSocket extends Phaser.Events.EventEmitter {
    constructor() {
        super();
        this.startSimulation();
    }

    startSimulation() {
        // Simulate messages every 2 seconds
        setInterval(() => {
            const userId = `user_${Math.floor(Math.random() * 10)}`;
            const message = Math.floor(Math.random() * 10).toString(); // Random vote from 0-9
            // console.log(`Simulating message from ${userId}: ${message}`);
            this.emit('message', { userId, message });
        }, 2000);

        // Simulate likes every 3 seconds
        setInterval(() => {
            const userId = `user_${Math.floor(Math.random() * 10)}`;
            const likeCount = Math.floor(Math.random() * 5) + 1; // Random likes 1-5
            // console.log(`Simulating like from ${userId}: ${likeCount}`);
            this.emit('like', { userId, likeCount });
        }, 3000);
    }
}

export const fakeSocket = new FakeSocket();