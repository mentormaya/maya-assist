const { app, BrowserWindow, session, Menu } = require("electron");
const serve = require("electron-serve");
const path = require("path");

const app_config = require("../constants/app.json")

const menu_template = require('./menu')

const appServe = app.isPackaged ? serve({
  directory: path.join(__dirname, "../out")
}) : null;

const createWindow = () => {
  const win = new BrowserWindow({
    width: app.isPackaged ? app_config.DEV_WIDTH : app_config.PROD_WIDTH,
    height: app_config.HEIGHT,
    icon: path.join(__dirname, app_config.ICON),
    webPreferences: {
      preload: path.join(__dirname, "preload.js")
    }
  });

  if (menu_template) {
    const menu = Menu.buildFromTemplate(menu_template)

    Menu.setApplicationMenu(menu)
  }

  if (app.isPackaged) {
    appServe(win).then(() => {
      win.loadURL("app://-");
    });
  } else {
    win.loadURL("http://localhost:3000");
    win.webContents.openDevTools();
    win.webContents.on("did-fail-load", (e, code, desc) => {
      win.webContents.reloadIgnoringCache();
    });
  }
}

app.on("ready", () => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

  session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
    const csp = `
    default-src 'self' localhost:3000 'unsafe-inline' github.githubassets.com; 
    script-src 'self' localhost:3000 'unsafe-inline' 'unsafe-eval' github.githubassets.com;
    object-src 'none';
    base-uri 'none'`;
    // require-trusted-types-for 'script';`
    callback({
      responseHeaders: {
        ...details.responseHeaders,
        'Content-Security-Policy': [csp]
      }
    })
  })
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});