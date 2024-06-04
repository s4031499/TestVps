import Link from "next/link";
import { ModeToggle } from "./toggle-theme";


export default function Header(){
    return (
      <div className="flex justify-between items-center w-full max-w-4xl px-4 py-8 mx-auto md:px-8">
        <div>
          <Link href="/">
            <h1 className="text-2xl font-bold">Next.js</h1>
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>

            <ModeToggle />
          </ul>
        </nav>
      </div>
    );
}