const Players = function() {
  const DEFAULT = ["Sam", "CN"]

  //
  // make this.current a random player
  //
  this.randomise = () => {
    return this.current = DEFAULT[Math.floor(Math.random() * DEFAULT.length)]
  }

  //
  // make this.current the not-current player
  //
  this.switch = () => {
    this.current = this.current == DEFAULT[0] ? DEFAULT[1] : DEFAULT[0]
  }
}

module.exports.Players = function() { return new Players }