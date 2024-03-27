import { packageJson } from "@/lib/package";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-md px-8 py-4 mx-auto mt-16 rounded-lg shadow-lg dark:bg-slate-700">
      <div className="flex justify-center -mt-16 md:justify-end">
        <Image className="object-cover w-20 h-20 rounded-full"
          alt="Testimonial avatar"
          width={400}
          height={600}
          src="/images/author.jpg" />
      </div>
      <h1 className="mt-2 text-2xl font-semibold md:mt-0 md:text-3xl">{packageJson.author}</h1>
      <h2 className="text-slate-400">(Author of {packageJson.productName}<span>v{packageJson.version}</span>)</h2>

      <p className="mt-2 text-gray-600 dark:text-gray-200">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur est, molestiae repellat quibusdam quidem rem voluptatibus natus perferendis? Quia reprehenderit ipsum explicabo debitis assumenda? Animi veniam eum esse praesentium dolorum. Lorem ipsum dolor sit amet consectetur adipisicing
      </p>

      <div className="flex justify-end mt-4">
        <a href="#" className="text-xl hover:underline decoration-wavy  font-medium text-blue-500 dark:text-blue-300">Follow me</a>
      </div>
    </div>
  );
}