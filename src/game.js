const {Turns} = require('./turns')
const {Print} = require('./print')

const Game = function(turns = new Turns, print = new Print) {
  this.start = () => {
    print.welcome()

    while(true) {
      this._takeTurn()

      if(this._isOver()) { 
        print.over(this._summary())

        break 
      };
    }

  }

  this._takeTurn = () => {
    turns.take()
  }

  this._isOver = () => {
    return turns.length() > 9
  }

  this._summary = () => {
    return turns.summary();
  }
}

module.exports.Game = function(turns, print) { return new Game(turns, print) }