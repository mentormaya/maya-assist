A Personal Assistant Utility App to help speed up the daily tasks with additional note taking and personal time managment features.

## Setting up

Follow [these steps](/docs/setup.md) to set this project from scratch.

## Getting Started

First, either clone or download the repository:

```bash
# with ssh cloning you can do with https if not private
git clone git@github.com:mentormaya/maya-assist.git
```

`cd` in to the directory or project just downloaded and open in code editor of your choice:

```bash
# Dive in to the project Folder
cd maya-assist
code .
```

After downloading first thing you need to do is install all the dependencies of the project:

```bash
# using npm
npm install

# using yarn
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

if everything is done correctly, above command will pop up an electron app with the interface generated by the NextJs.

Optionally you can open [http://localhost:3000](http://localhost:3000) with your browser to see the UI result.

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
