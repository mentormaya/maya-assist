const { app, BrowserWindow } = require("electron");

const about_app = async () => {
  console.log("About App");
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.removeMenu()

  if (app.isPackaged) {
    appServe(win).then(() => {
      win.loadURL("app://about/app");
    });
  } else {
    win.loadURL("http://localhost:3000/about/app");
    win.webContents.on("did-fail-load", (e, code, desc) => {
      win.webContents.reloadIgnoringCache();
    });
  }
}

module.exports = about_app