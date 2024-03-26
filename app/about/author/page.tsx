import { packageJson } from "@/lib/package";

export default function Home() {
  return (
    <main className="min-h-screen text-center items-center justify-between p-2">
      <h1>Author {packageJson.author}</h1>
      <h1>({packageJson.productName}<span>v{packageJson.version}</span>)</h1>
    </main>
  );
}