import { Scene } from 'phaser';
import { io, Socket } from 'socket.io-client';
import DynamicImage from '../objects/dynamic-Image';
import AnimatedText from '../objects/animated-text';
import { fakeSocket } from '../FakeSocket';

const socket = io('ws://localhost:3000');

// export class Game extends Scene {
//     camera: Phaser.Cameras.Scene2D.Camera;
//     background: Phaser.GameObjects.Image;
//     msg_text: Phaser.GameObjects.Text;

//     constructor() {
//         super('Game');
//     }

//     create() {

//         console.log('create Game Scene');
//         socket.on('message', (data) => {
//             console.log('Received from server:', data);
//         });

//         console.log('create Game Scene');
//         socket.on('message', (data) => {
//             console.log('Received from server:', data);
//         });

//         socket.on('like', (data: TlikeData) => {
//             //  console.log('Received from server:', data);
//             console.log({
//                 // "profilePictureUrl": data.profilePictureUrl,
//                 "nickname": data.nickname,
//                 "userId": data.userId,
//                 "likeCount": data.likeCount
//             })
//             const randomX = Phaser.Math.Between(50, 1024/2-50);
//             new DynamicImage(this, randomX, 400, 
//                 data.profilePictureUrl, 
//                 data.userId)
//             new AnimatedText(this, randomX, 300,
//                 data.nickname,
//                 data.likeCount
//             );

//         });

//     }
// }



// type TgiftData = typeof giftData;
// type TlikeData = typeof likeData;
// type TchatData = typeof chatData;


// const chatData = {
//     comment: "How are you?",
//     userId: "6813181309701719620",
//     secUid: "<redacted>",
//     uniqueId: "zerodytester",
//     nickname: "Zerody Tester",
//     profilePictureUrl: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0...webp",
//     followRole: 0, // 0 = none; 1 = follower; 2 = friends
//     userBadges: [
//         {
//             // Moderator badge
//             type: "pm_mt_moderator_im",
//             name: "Moderator"
//         },
//         {
//             // Top Gifter badge
//             type: "image",
//             displayType: 1,
//             url: "https://p19-webcast.tiktokcdn.com/webcast-va/rankl...image"
//         },
//         {
//             // Subscriber Badge
//             type: "image",
//             displayType: 1,
//             url: "https://p19-webcast.tiktokcdn.com/webcast-va/....~...image"
//         }
//     ],
//     userDetails: {
//         createTime: "0",
//         bioDescription: "",
//         profilePictureUrls: [
//             "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0...webp",
//             "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0...webp",
//             "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0...jpeg"
//         ]
//     },
//     followInfo: {
//         followingCount: 10000,
//         followerCount: 606,
//         followStatus: 0,
//         pushStatus: 0
//     },
//     isModerator: false,
//     isNewGifter: false,
//     isSubscriber: false,
//     topGifterRank: null,
//     msgId: "7137750790064065286",
//     createTime: "1661887134718"
// };

// const giftData = {
//     // Gift Details
//     giftId: 5953,
//     repeatCount: 1,
//     repeatEnd: true,
//     groupId: "1661887131074",
//     monitorExtra: {
//         anchor_id: 7087613897129494000,
//         from_idc: "maliva",
//         from_user_id: 7044640112358049000,
//         gift_id: 5953,
//         gift_type: 1,
//         log_id: "20220830191849010192055159174B7670",
//         msg_id: 7137749190944230000,
//         repeat_count: 1,
//         repeat_end: 1,
//         room_id: 7137728632142843000,
//         send_gift_profit_core_start_ms: 0,
//         send_gift_send_message_success_ms: 1661887134397,
//         to_user_id: 7087613897129494000
//     },
//     // Sender Details
//     userId: "6813181309701719620",
//     secUid: "<redacted>",
//     uniqueId: "zerodytester",
//     nickname: "Zerody Tester",
//     profilePictureUrl: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0...webp",
//     followRole: 0, // 0 = none; 1 = follower; 2 = friends
//     userBadges: [],
//     userDetails: {
//         createTime: "0",
//         bioDescription: "",
//         profilePictureUrls: [
//             "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0...webp",
//             "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0...webp",
//             "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0...jpeg"
//         ]
//     },
//     followInfo: {
//         followingCount: 360,
//         followerCount: 740,
//         followStatus: 0,
//         pushStatus: 0
//     },
//     isModerator: false,
//     isNewGifter: false,
//     isSubscriber: false,
//     topGifterRank: null,
//     msgId: "7137749190944230150",
//     createTime: "1661887134397",
//     displayType: "webcast_aweme_gift_send_message",
//     label: "{0:user} sent {1:gift} {2:string}",
//     gift: {
//         gift_id: 5953,
//         repeat_count: 1,
//         repeat_end: 1,
//         gift_type: 1
//     },
//     describe: "Sent Nevalyashka doll",
//     giftType: 1,
//     diamondCount: 25,
//     giftName: "Nevalyashka doll",
//     giftPictureUrl: "https://p19-webcast.tiktokcdn.com/img/maliva/webca...png",
//     timestamp: 1661887134397,
//     extendedGiftInfo: {
//         // This will be filled when you enable the `enableExtendedGiftInfo` option
//     },

//     // Receiver Details (can also be a guest broadcaster)
//     receiverUserId: "7087613897129493510"
// }


// const likeData = {
//     likeCount: 6, // likes given by the user (taps on screen)
//     totalLikeCount: 21349, // likes that this stream has received in total (from all users)
//     userId: "6813181309701719620",
//     secUid: "<redacted>",
//     uniqueId: "zerodytester",
//     nickname: "Zerody Tester",
//     profilePictureUrl: "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-...webp",
//     followRole: 0, // 0 = none; 1 = follower; 2 = friends,
//     userBadges: [
//         {
//             type: "pm_mt_moderator_im",
//             name: "Moderator"
//         },
//         {
//             type: "image",
//             displayType: 1,
//             url: "https://p19-webcast.tiktokcdn.com/webcast-va/rankl...image"
//         },
//         {
//             type: "image",
//             displayType: 1,
//             url: "https://p19-webcast.tiktokcdn.com/webcast-va/....~...image"
//         }
//     ],
//     userDetails: {
//         createTime: "0",
//         bioDescription: "",
//         profilePictureUrls: [
//             "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-...webp",
//             "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-...webp",
//             "https://p19-sign.tiktokcdn-us.com/tos-useast5-avt-...webp",
//             "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-...jpeg"
//         ]
//     },
//     followInfo: {
//         followingCount: 617,
//         followerCount: 112,
//         followStatus: 1,
//         pushStatus: 0
//     },
//     isModerator: false,
//     isNewGifter: false,
//     isSubscriber: false,
//     topGifterRank: null,
//     msgId: "7137750883651619630",
//     createTime: "1661887134554",
//     displayType: "pm_mt_msg_viewer",
//     label: "{0:user} liked the LIVE"
// };



class CountdownScene extends Scene {
    config: any;
    timerText: Phaser.GameObjects.Text;
    timeLeft: any;
    timerEvent: Phaser.Time.TimerEvent;
    constructor(config: any) {
        super({ key: config.key });
        this.config = config;
    }

    create() {
        this.add.text(400, 100, this.config.title, { fontSize: '32px', color: '#ffffff' }).setOrigin(0.5);
        this.add.text(400, 200, this.config.subtitle, { fontSize: '24px', color: '#aaaaaa' }).setOrigin(0.5);

        this.timerText = this.add.text(400, 300, `Time: ${this.config.duration}`, { fontSize: '48px', color: '#ff0000' }).setOrigin(0.5);
        this.timeLeft = this.config.duration;

        this.timerEvent = this.time.addEvent({
            delay: 1000,
            callback: this.updateTimer,
            callbackScope: this,
            loop: true
        });
    }

    updateTimer() {
        this.timeLeft--;
        this.timerText.setText(`Time: ${this.timeLeft}`);
        if (this.timeLeft <= 0) {
            this.timerEvent.remove();
            this.scene.start(this.config.nextScene);
        }
    }

    update() {

    }
}

export class PreparationScene extends CountdownScene {
    constructor(nextScene: any, title: any) {
        super({
            key: `Preparation_${nextScene}`,
            title,
            subtitle: 'Get ready...',
            duration: 5,
            nextScene
        });
    }
}


export class MessageVotingScene extends CountdownScene {
    votes: any;
    messages: Phaser.GameObjects.Text;
    socket: any;
    constructor() {
        super({
            key: 'MessageVotingScene',
            title: 'Message Voting',
            subtitle: 'Send a message to vote!',
            duration: 10,
            nextScene: 'Preparation_LikeVotingScene'
        });
    }

    create() {
        super.create();
        this.votes = {}; // Store votes
        this.messages = this.add.text(400, 400, '', { fontSize: '20px', color: '#ffffff' }).setOrigin(0.5);
        this.registry.set('gameState', 'messageVoting'); // ✅ Set game state
        this.registry.set('messageVotes', {}); // Reset votes

    }

    updateMessages() {
        this.messages.setText(Object.entries(this.votes).map(([user, vote]) => `${user}: ${vote}`).join('\n'));
    }
}


export class LikeVotingScene extends CountdownScene {
    votes: any;
    voteDisplay: Phaser.GameObjects.Text;
    socket: any;
    constructor() {
        super({
            key: 'LikeVotingScene',
            title: 'Like Voting',
            subtitle: 'Tap like to vote!',
            duration: 10,
            nextScene: 'ResultsScene'
        });
    }

    create() {
        super.create();
        this.registry.set('gameState', 'likeVoting'); // ✅ Set game state
        this.registry.set('likeVotes', {}); // Reset votes
        this.votes = {}; // Track votes
        this.voteDisplay = this.add.text(400, 400, '',
            { fontSize: '20px', color: '#ffffff' })
            .setOrigin(0.5);


    }

    updateVotes() {
        this.voteDisplay.setText(Object.entries(this.votes).map(([user, count]) => `${user}: ${count} likes`).join('\n'));
    }
}

export class ResultsScene extends CountdownScene {
    constructor() {
        super({
            key: 'ResultsScene',
            title: 'Results',
            subtitle: 'Final votes are in!',
            duration: 10,
            nextScene: 'Game'
        });
    }

    create() {
        super.create();
        
        const messageVotes = this.registry.get('messageVotes') || {};
        const likeVotes = this.registry.get('likeVotes') || {};

        let resultsText = 'Final Results:\n\n';
        Object.keys(messageVotes).forEach(userId => {
            const messageVote = messageVotes[userId] || 'No vote';
            const likeCount = likeVotes[userId] || 0; // ✅ Show correct like count

            resultsText += `👤 User: ${userId}\n📩 Message Vote: ${messageVote}\n❤️ Likes: ${likeCount} likes\n\n`;
        });

        this.add.text(400, 250, resultsText, { fontSize: '18px', color: '#ffffff' }).setOrigin(0.5);

        // ✅ Reset votes for the next round
        this.registry.set('messageVotes', {});
        this.registry.set('likeVotes', {});
        this.registry.set('gameState', 'idle');
    }
}




export class Game extends Scene {
    socket: Socket;
    constructor() {
        super('Game');
    }

    create() {

        console.log('Game Scene Created');

        this.socket = io('ws://localhost:3000');
        this.registry.set('socket', this.socket); // Store socket globally
        this.registry.set('gameState', 'idle'); // Default game state

        this.registry.set('messageVotes', {}); // Store votes globally
        this.registry.set('likeVotes', {});

        this.socket.on('chat', (data: any) => {
            this.handleMessageVote(data);
        });

        this.socket.on('like', (data: any) => {
            this.handleLikeVote(data);
        });

        this.scene.start('Preparation_MessageVotingScene');
    }

    handleMessageVote(data: any) {
        const gameState = this.registry.get('gameState');

        if (gameState === 'messageVoting') { // ✅ Only process during message voting


            const vote = data.comment.trim();

        // ✅ Check if the message is a number (0-9)
        if (!/^[0-9]$/.test(vote)) {
            console.log('❌ Invalid vote (not a number):', vote);
            return;
        }


            const votes = this.registry.get('messageVotes');
            votes[data.uniqueId] = data.comment;
            this.registry.set('messageVotes', votes);
            // console.log('🟢 Message Vote:', data);
            console.log('messageVotes: ', data.nickname, data.comment);
        }
    }

    handleLikeVote(data: any) {
        const gameState = this.registry.get('gameState');
    
        if (gameState === 'likeVoting') { // ✅ Only process during like voting
            const messageVotes = this.registry.get('messageVotes'); // Get previous message votes
            const likeVotes = this.registry.get('likeVotes');
    
            if (messageVotes[data.uniqueId]) { // ✅ Check if the user voted in message voting
                if (!likeVotes[data.uniqueId]) {
                    likeVotes[data.uniqueId] = 0;
                }
    
                likeVotes[data.uniqueId] += data.likeCount; // ✅ Count likes for message vote
                this.registry.set('likeVotes', likeVotes);
    
                console.log('❤️ Like Vote:', data.uniqueId, `+${data.likeCount} (Total: ${likeVotes[data.uniqueId]})`);
            } else {
                console.log('⚠️ Ignored like, user did not vote in message voting:', data.uniqueId);
            }
        }
    }

}