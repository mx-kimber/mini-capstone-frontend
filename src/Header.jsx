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
        <Link to="/carted_products">Shopping Cart</Link> | 
        <Link to="/orders">My Orders</Link> |

        {authenticationLinks}

      </nav>
    </header>
  )
}