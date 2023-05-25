import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  let authenticationLinks;
  if (localStorage.jwt === undefined) {
    authenticationLinks = <>
    <a href="/login">Login</a>| <a href="/signup">Signup</a>
    </>
  } else {
    authenticationLinks = <LogoutLink />
  }
  
  return (
    <header>
      <nav>
        <a href="/">Home</a> | 
        <Link to="/about">About</Link> | 
        <Link to="/products/new">New Product</Link> |  
        {authenticationLinks}
        {/* <Link to="/signup">Signup</Link> | 
        <Link to="/login">Login</Link> |  */}
        {/* <LogoutLink /> */}
      </nav>
    </header>
  )
}