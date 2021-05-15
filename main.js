const { app, BrowserWindow } = require("electron");

app.on("ready", function () {
  var mainWindow = new BrowserWindow({
    show: false,
    width: 400,
    height: 240,
    frame: false,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  //  mainWindow.maximize();
  mainWindow.loadFile("index.html");
  mainWindow.show();
});
