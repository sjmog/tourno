const {Turn} = require('./turn')

const Turns = function() {
  this.history = []

  this.take = () => {
    const turn = new Turn()
    this.history.push(turn.take())
  }

  this.summary = () => {
    return this.history.map((turn) => {
      return turn.toString()
    })
  }

  this.length = () => {
    return this.history.length
  }
}

module.exports.Turns = function() { return new Turns }