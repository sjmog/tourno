const Events = function() {
  this.START         = 'start'
  this.TURN          = 'turn'
  this.SWITCH_PLAYER = 'switch-player'
  this.GAME_OVER     = 'game-over'
}

module.exports.Events = function() { return new Events }()