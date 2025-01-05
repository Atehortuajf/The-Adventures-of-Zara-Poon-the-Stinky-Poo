import MainScene from './scenes/MainScene.js';

// Phaser game config
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'gameContainer', // matches the div in index.html
  scene: [MainScene],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    }
  }
};

// Create a new Phaser Game instance
window.addEventListener('load', () => {
  const game = new Phaser.Game(config);
});
