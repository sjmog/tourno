const Turn = function(player, data) {
  this.player = player
  this.data   = data

  //
  // represent the turn in human-readable format
  //
  this.toString = () => {
    return `${ this.player } – x: ${ this.data.x }, y: ${ this.data.y }`
  }
}

module.exports.Turn = function(player, data) { return new Turn(player, data) }