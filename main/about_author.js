const { app, BrowserWindow } = require("electron");
const path = require("path");

const app_config = require("../constants/app.json")

const about_author = async () => {
  console.log("About Author");
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, app_config.ICON),
  })

  win.removeMenu()

  if (app.isPackaged) {
    appServe(win).then(() => {
      win.loadURL("app://about/author");
    });
  } else {
    win.loadURL("http://localhost:3000/about/author");
    win.webContents.on("did-fail-load", (e, code, desc) => {
      win.webContents.reloadIgnoringCache();
    });
  }
}

module.exports = about_author