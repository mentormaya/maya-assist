const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("MaYaAPI", {
  // on: (channel, callback) => {
  //   ipcRenderer.on(channel, callback);
  // },
  // send: (channel, args) => {
  //   ipcRenderer.send(channel, args);
  // },
  chatgpt: async (prompt) => await ipcRenderer.invoke('chatgpt', prompt)
});
