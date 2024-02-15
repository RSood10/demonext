import "./globals.css";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex gap-10">
        <Image
          src="/frontimg.png"
          alt="image"
          width={500}
          height={500}
          className="hover:rotate-12"
        />
        <p className="text-5xl my-auto font-mono font-semibold text-yellow-600">
          Welcome! <br />
          Lets Dive into Next Js
        </p>
      </div>
    </div>
  );
}
