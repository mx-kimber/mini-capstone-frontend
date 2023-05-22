import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav>
        <a href="/products">Home</a> | <Link to="/about">About</Link> <LogoutLink />
      </nav>
    </header>
  )
}