const {ipcRenderer} = require('electron')
const {Events} = require('./src/events')
const $ = require('jQuery')

const setupIpcListeners = () => {
  ipcRenderer.on(Events.SWITCH_PLAYER, (event, player) => {
    updatePlayerName(player)
  })

  ipcRenderer.on(Events.GAME_OVER, (event, summary) => {
    updateInformation(summary)
  })
}

const setupViewListeners = () => {
  $('input[name=cell]').change((data) => {
    takeTurn(
      {
        x: $(data.target).attr('data-positionX'),
        y: $(data.target).attr('data-positionY'),
      }
    )
  })
}

const takeTurn = (position) => {
  ipcRenderer.send(Events.TURN, position)
}

const updatePlayerName = (name) => {
  $('#current-player').text(name)
}

const updateInformation = (information) => {
  $('#information').text(information)
}

$(document).ready(() => {
  setupIpcListeners()
  setupViewListeners()

  updatePlayerName(ipcRenderer.sendSync(Events.START).currentPlayer)
});