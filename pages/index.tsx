import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="text-primary-dark">
      <h1>Hello world</h1>
    </div>
  );
}
