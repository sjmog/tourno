const Turn = function(owner, position) {
  this.owner = owner
  this.positionX = position.x
  this.positionY = position.y

  this.toString = () => {
    return `${ this.owner } – x: ${ this.positionX }, y: ${ this.positionY }`
  }
}

module.exports.Turn = function(owner, position) { return new Turn(owner, position) }