var Menu = {
  preload : function() {
      game.load.image('menu', './assets/menu.png');
  },
  create: function () {
     this.add.sprite(0, 0, 'menu');
  },
  startGame: function() {
    this.state.start('Game')
  },
};
