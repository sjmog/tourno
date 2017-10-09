const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let window

const Turn = function() {
  this.take = () => {
    this.positionX = Math.floor(Math.random() * 5);
    this.positionY = Math.floor(Math.random() * 5);

    return this;
  }

  this.print = () => {
    return `x: ${ this.positionX }, y: ${ this.positionY }`
  }
}

const Turns = function() {
  this.history = []

  this.take = () => {
    const turn = new Turn()
    this.history.push(turn.take())
  }

  this.printHistory = () => {
    return this.history.map((turn) => {
      return turn.print()
    })
  }

  this.length = () => {
    return this.history.length
  }
}

const Game = function(turns) {
  this.turns = turns

  this.start = () => {
    console.log('starting game')

    while(true) {
      this.takeTurn();

      if(game.isOver()) { 
        console.log('game over. Turns:'); 
        console.log(this.turns.printHistory())
        break 
      };
    }

  }

  this.takeTurn = () => {
    this.turns.take()
  }

  this.isOver = () => {
    return this.turns.length() > 9
  }
}

const newTurnHistory = new Turns();
const game = new Game(newTurnHistory);

app.once('ready', () => {
  window = new BrowserWindow({
    frame: false,
    width: 200,
    height: 200
  })

  window.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  game.start()
})