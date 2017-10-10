const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')
const url = require('url')

const {Game} = require('./src/game')

let window

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

  const game = new Game(ipcMain)
  game.start()
})