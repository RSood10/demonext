"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Navbar() {
  const links = [
    {
      name: "Home",
      href: "/dashboard",
    },
    {
      name: "Blog",
      href: "/dashboard/blog",
    },
    {
      name: "About",
      href: "/dashboard/about",
    },
    {
      name: "Contact",
      href: "/dashboard/contact",
    },
  ];
  //for login checks
  const status = false;

  const active = usePathname();
  console.log(active);
  return (
    <div className="flex flex-row justify-around bg-slate-950">
      <div className="my-auto font-mono font-medium text-2xl">Logo</div>
      <div className="flex flex-row  font-medium">
        {links.map((link) => {
          return (
            <Link
              href={link.href}
              key={link.name}
              className={clsx("p-4", {
                "bg-white text-black ": active == link.href,
              })}
            >
              {link.name}
            </Link>
          );
        })}

        <Link
          href="/login"
          className={clsx(" p-4 bg-blue-500", {
            " bg-green-500 p-4 ": status,
          })}
        >
          {status ? "Logout" : "Login"}
        </Link>
      </div>
    </div>
  );
}
