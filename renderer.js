// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const {ipcRenderer} = require('electron')
const $ = require('jQuery')

const takeTurn = (position) => {
  ipcRenderer.send('turn', position)
}

const setupListeners = () => {
  $('input[name=cell]').change((data) => {
    takeTurn(
      {
        x: $(data.target).attr('data-positionX'),
        y: $(data.target).attr('data-positionY'),
      }
    )
  })
}

$(document).ready(() => {
  setupListeners()
});