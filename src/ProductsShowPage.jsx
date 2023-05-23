import { useState, useEffect } from "react";
import axios from "axios"
import { useParams } from "react-router-dom"

export function ProductsShowPage() {
  const [product, setProduct] = useState({})
  const params = useParams();
  const getShowProduct = () => {
    console.log(params.id);
    console.log('getting individual product');

    axios.get(`http://localhost:3000/products/${params.id}.json`).then(response => {
      console.log(response.data)
      setProduct(response.data)
    })
  }  

  useEffect(getShowProduct, [params.id])
  return (
    <div>
      <p>Id: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Supplier: {product.supplier.name}</p>
      <p>Price: {product.price}</p>
      <p>Quantity: {product.quantity}</p>
      <p>Description: {product.description}</p>
      <img src={product.images[0].url} />
    </div>
  )
}