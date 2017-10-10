const {Turn} = require('./turn')

const Turns = function() {
  this.history = []

  this.take = (owner, position) => {
    this.history.push(new Turn(owner, position))
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