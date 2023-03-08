//! Since Electron doesn't support IMPORT function we are using require
const { app, BrowserWindow } = require('electron')

//* This Handles all the window creations and stuff.
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    //* Here we are loading our supposedly HTML file
    win.loadFile("index.html")
}

//* Maintaining a lifecycle of the software
app.whenReady().then(() => {
    createWindow()
})

app.on("window-all-closed", () => {
    app.quit()
})