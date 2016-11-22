const electron = require('electron')
const {app, BrowserWindow} = electron
const path = require('path')
const url = require('url')
let window

function createWindow() {
    window = new BrowserWindow({ width: 350, height: 300, resizable: false })
    window.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))
    window.setMenu(null)
    //window.webContents.openDevTools()

    // Emitted when the window is closed.
    window.on('closed', function () {
        window = null
    })
}

app.on('ready', createWindow)