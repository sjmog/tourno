const {Turn} = require('./turn')

const Turns = function() {
  this.history = []

  //
  // store a turn to the history
  //
  this.store = (owner, position) => {
    this.history.push(new Turn(owner, position))
  }

  //
  // summarise the history as an 
  // array of human-readable strings
  //
  this.summary = () => {
    return this.history.map((turn) => {
      return turn.toString()
    })
  }

  //
  // [TEMPORARY: game#_isOver]
  // get the length of the history
  //
  this.length = () => {
    return this.history.length
  }
}

module.exports.Turns = function() { return new Turns }