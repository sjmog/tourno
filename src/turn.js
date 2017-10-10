const Turn = function() {
  this.take = () => {
    this.positionX = Math.floor(Math.random() * 5);
    this.positionY = Math.floor(Math.random() * 5);

    return this;
  }

  this.toString = () => {
    return `x: ${ this.positionX }, y: ${ this.positionY }`
  }
}

module.exports.Turn = function() { return new Turn }