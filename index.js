const {app,BrowserWindow}= require("electron");

function createWin(){
    const win = new BrowserWindow({
        width:480,
        height:500,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        resizeable:false,
    });
    win.loadFile("main.html");
}

app.on('ready',createWin);