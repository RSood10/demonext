import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-around bg-slate-950">
      <div className="p-4 font-medium">Logo</div>
      <div className="flex flex-row  font-medium">
        <Link href="/" className="p-4">
          Home
        </Link>
        <Link href="/blog" className="p-4">
          Blog
        </Link>
        <Link href="/about" className="p-4">
          About
        </Link>
        <Link href="/contact" className="p-4">
          Contact
        </Link>
      </div>
    </div>
  );
}
