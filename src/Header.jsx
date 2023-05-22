import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav>
        <a href="/">Home</a> | <Link to="/about">About</Link> | <Link to="/signup">Signup</Link> | <Link to="/login">Login</Link> | <LogoutLink />
      </nav>
    </header>
  )
}