const {Turns} = require('./turns')
const {Players} = require('./players')
const {Events} = require('./events')

const Game = function(listener, turns = new Turns, players = new Players) {
  //
  // run the game loop
  //
  this.start = () => {
    listener.on(Events.START, (event) => {
      event.returnValue = { currentPlayer: players.randomise() }
    })

    listener.on(Events.TURN, (event, data) => {
      this._takeTurn(data)

      event.sender.send(Events.SWITCH_PLAYER, players.current)

      if(this._isOver()) {
        event.sender.send(Events.GAME_OVER, this._summary())
      }
    })
  }

  //
  // take the turn:
  //   - store it
  //   - switch players
  //
  this._takeTurn = (data) => {
    turns.store(players.current, data)
    players.switch()
  }

  //
  // return true if the win condition is met
  // 
  this._isOver = () => {
    return turns.length() > 9
  }

  //
  // summarise all turns in the game
  //
  this._summary = () => {
    return turns.summary()
  }
}

module.exports.Game = function(controller, turns, print) { return new Game(controller, turns, print) }