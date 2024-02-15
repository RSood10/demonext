import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-around bg-slate-950">
      <div className="p-4 font-medium">Logo</div>
      <div className="flex flex-row  font-medium">
        <Link href="/dashboard" className="p-4">
          Home
        </Link>
        <Link href="/dashboard/blog" className="p-4">
          Blog
        </Link>
        <Link href="/dashboard/about" className="p-4">
          About
        </Link>
        <Link href="/dashboard/contact" className="p-4">
          Contact
        </Link>

        <Link href="/login" className="p-4 bg-gray-500  ">
          Login
        </Link>
      </div>
    </div>
  );
}
