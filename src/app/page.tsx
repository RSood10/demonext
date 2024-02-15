import Link from "next/link";
import "./(dashboard)/dashboard/globals.css";

export default function page() {
  return (
    <div>
      <Link href="/dashboard" className="text-blue-700 text-3xl">
        Dashboard 👉
      </Link>
    </div>
  );
}
