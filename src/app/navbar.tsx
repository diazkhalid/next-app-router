import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex bg-gray-800 py-3 px-5">
      <h1 className="text-white">Logo</h1>
      <ul className="flex mx-3">
        <Link href="/">
          <li className="text-blue-300 mr-3 cursor-pointer">Home</li>
        </Link>
        <Link href="/about">
          <li className="text-blue-300 mr-3 cursor-pointer">About</li>
        </Link>
        <Link href="/about/profile">
          <li className="text-blue-300 mr-3 cursor-pointer">Profile</li>
        </Link>
      </ul>
    </nav>
  );
}
