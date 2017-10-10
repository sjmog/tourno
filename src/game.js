const {Turns} = require('./turns')
const {Print} = require('./print')

const Game = function(controller, turns = new Turns, print = new Print) {
  this.player = "Sam"

  this.start = () => {
    print.welcome()
    let self = this

    controller.on('turn', (event, position) => {
      if(self._isOver()) { 
        print.over(self._summary())
      }

      self._takeTurn(position);
    })
  }

  this._takeTurn = (position) => {
    turns.take(this.player, position)
  }

  this._isOver = () => {
    return turns.length() > 9
  }

  this._summary = () => {
    return turns.summary();
  }
}

module.exports.Game = function(controller, turns, print) { return new Game(controller, turns, print) }