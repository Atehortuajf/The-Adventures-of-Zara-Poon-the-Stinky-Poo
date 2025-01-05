export default class MainScene extends Phaser.Scene {
    constructor() {
      super({ key: 'MainScene' });
    }
  
    preload() {
      // Load any assets here, e.g.:
      // this.load.image('player', 'assets/player.png');
    }
  
    create() {
      // Example text to confirm scene loaded
      this.add.text(20, 20, 'Hello, Boston!', { fill: '#ffffff' });
  
      // Create your player sprite, buddies, etc.
      // e.g.
      // this.player = this.physics.add.sprite(400, 300, 'player');
    }
  
    update() {
      // Game loop logic goes here
    }
  }
  