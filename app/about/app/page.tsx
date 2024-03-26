const APP_NAME = process.env.npm_package_productName || "MaYa Assist";
const APP_VERSION = process.env.npm_package_version;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <h1>{APP_NAME} <span>v{APP_VERSION}</span></h1>
    </main>
  );
}