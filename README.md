A Personal Assistant Utility App to help speed up the daily tasks with additional note taking and personal time managment features.

## Setting up

Follow these steps to set this project from scratch.

### Create a NextJs App

First, initate the nextjs app by bootstraping with `create-next-app@latest`.  Set the preferences you want durint setup. _The only setting you need to take care is about using App Router. Currently, I personally choose "No" to keep using the old-but-gold Pages Router, and it's the way I've used_. Enter this command in to the terminal and hit `Enter`.

```node
npx create-next-app@latest maya-assist
```

### Install Electron and other dependencies

`cd` into your project folder (in this example, `maya-assist`) and install the following dependencies, with both following commands:

Go inside the project

```bash
cd maya-assist
```

Now install all the dependencies. Starting with Dev Dependencies:

```bash
npm install --save-dev electron electron-builder concurrently
```

Now install all the depedencies:

```bash
npm install electron-serve
```

### Setting up the package.json

Start opening the `package.json` file with your preferred text editor or IDE. You need to modify the `build` and `dev` scripts, and add the `main` property. The concurrently we installed before will be used to run both Next.JS and Electron in parallel during the development, and you need to point the `main` script to the entrypoint of your Electron application. Also, we need to add "author" and "description" attributes, both needed when building the application executables.

```json
{
  ...
  "main": "main/main.js",
  "author": "RBFraphael",
  "description": "Electron + NextJS example project",
  "scripts": {
    "dev": "concurrently -n \"NEXT,ELECTRON\" -c \"yellow,blue\" --kill-others \"next dev\" \"electron .\"",
    "build": "next build && electron-builder",
    ...
  }
  ...
}
```

As you can see, when developing with `npm run dev` will start both Next.JS and Electron (you can find more details about Concurrently [here](https://www.npmjs.com/package/concurrently)), and, when building your application with `npm run build` it will build the Next.JS files, then the Electron application (find more information about Electron Builder [here](https://www.electron.build/)).

### Configuring Next.JS

Since we're using `Next.JS` as the starting point, we should have a `next.config.js` file in the root of our project. In this file, we need to set the output mode to `export`, and disable the image optimization. So, inside this file, add the following params to the exported `nextConfig` object.

```js
const nextConfig = {
  ...
  output: "export",
  images: {
    unoptimized: true
  }
  ...
}
```

### Electron bootstrap

Now, we will code the Electron part of our application. Start creating a folder called `main`, and two files inside that folder: `main.js` (as we set on the `main` key of our `package.json`) and `preload.js` (for exposing Electron to front-end), and insert the following content in the `main.js` file.

```js
const { app, BrowserWindow } = require("electron");
const serve = require("electron-serve");
const path = require("path");

const appServe = app.isPackaged ? serve({
  directory: path.join(__dirname, "../out")
}) : null;

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js")
    }
  });

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
});

app.on("window-all-closed", () => {
    if(process.platform !== "darwin"){
        app.quit();
    }
});
```

As we can analyse, this code will use electron-serve to properly serve static files from the `out/` folder, but only when our app is packaged (builded, in production, compiled, whatever you want). While not packaged, we will run our app through the `http://localhost:3000` URL, which is the default URL for Next.JS projects. Also, we already prepared the script to load our `preload.js` file. Another point of this scripts is the "did-fail-load" event while development. We added it because sometimes Electron may start faster than Next.JS (remember they are called together with concurrently), so, in those moments, it will trigger an error that "URL cannot be loaded" or someting like that, and will give us only a blank screen. With this event implemented on our script, when this occurs, it will automatically reload the app content, until success when showing Next.JS content.

### Setting up the preload script

Now, we just need to expose the Electron for the React/Next.JS part of our application. It's very useful for using IPC messages, for example.

Inside the `main/preload.js` file we created before, insert the following content:

```js
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
    on: (channel, callback) => {
        ipcRenderer.on(channel, callback);
    },
    send: (channel, args) => {
        ipcRenderer.send(channel, args);
    }
});
```

This way, we can call `window.electronAPI.on` on Next.JS components to handle IPC data that comes from the "back-end" of our application, and `window.electronAPI.send` to send data to the "back-end" of our application.

### Testing

Finally, we can just run `npm run dev` on our terminal. If all things are well configured, we should see a beautiful Electron window with the starter content of Next.JS. Also, the built-in DevTools shoud appear. And, in the running terminal, we can see the debug from both Next and Electron, tagged with different colors too. Now is time to develop our application. Remember that we have hot reload for front-end (the renderer/Next part of our app), but, when making changes into the "back-end" (the main/Electron part of our application) we need to stop the whole application (a simple Ctrl+C on the terminal do the job) then run it again.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


### Building the executables

Now it's time to build our application executables. We're using `electron-builder` to handle that for us. Start creating a file called `electron-builder.yaml` on the root of our project. Then, inside this file, put the configuration for building the application, according to the [official electron-builder](https://www.electron.build/) documentation. You can find an example below:

```yaml
appId: "io.github.mentormaya.maya-assist"
productName: "MaYa Assist"
copyright: "Copyright (c) 2024 Ajay Singh"
win:
  target: ["dir", "portable", "zip"]
  icon: "resources/icon.ico"
linux:
  target: ["dir", "appimage", "zip"]
  icon: "resources/icon-256.png"
mac:
  target: ["dir", "dmg", "zip"]
  icon: "resources/icon.icns"
```

After properly specifying the needed options on `electron-builder.yaml` file, you just need to run `npm run build` on your terminal. The Next.JS static files will be generated and exported to the `out/` directory, then the Electron application will be compiled, and saved to the `dist/` directory.