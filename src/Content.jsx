import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

export function Content() {
  const [products, setProducts] = useState([]);

  const handleIndexProducts = () => {
    console.log("handleIndexProducts");
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
     });
   };

    const handleCreateProduct = (params, successCallback) => {
      console.log("handleCreateProduct", params);
      axios.post("http://localhost:3000/products.json", params).then((response) => {
        setProducts([...products, response.data]);
        successCallback();
      });
    };

   useEffect(handleIndexProducts, []);
   
    return (
      <div>
      <Signup />
      <Login />
      <LogoutLink />
        <ProductsNew onCreateProduct={handleCreateProduct} />
        <ProductsIndex products={products} />
      </div>
    );
  }