const Print = function(output = console) {
  const WELCOME_MESSAGE = "Starting game..."
  const OVER_MESSAGE = "Game over! Turns:"

  this.welcome = () => {
    this._log(WELCOME_MESSAGE)
  }

  this.over = (summary) => {
    this._log(OVER_MESSAGE)
    this._log(summary)
  }

  this._log = (data) => {
    output.log(data)
  }
}

module.exports.Print = function() { return new Print }