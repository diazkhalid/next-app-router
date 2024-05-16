import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <nav className="flex justify-between bg-gray-800 py-3 px-5">
      <div className="flex">
        <h1 className="text-white">Logo</h1>
        <ul className="flex mx-3">
          <Link href="/">
            <li
              className={`${
                pathname === "/" ? "text-blue-300" : "text-white"
              } mr-3 cursor-pointer`}
            >
              Home
            </li>
          </Link>
          <Link href="/about">
            <li
              className={`${
                pathname === "/about" ? "text-blue-300" : "text-white"
              } mr-3 cursor-pointer`}
            >
              About
            </li>
          </Link>
          <Link href="/about/profile">
            <li
              className={`${
                pathname === "/about/profile" ? "text-blue-300" : "text-white"
              } mr-3 cursor-pointer`}
            >
              Profile
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex">
        <button
          className="bg-white rounded-md px-3 text-sm h-7 cursor-pointer"
          onClick={() => router.push("/login")}
        >
          Login
        </button>
      </div>
    </nav>
  );
}
