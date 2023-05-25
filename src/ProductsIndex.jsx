import { useState } from "react"

export function ProductsIndex(props) {
  const [searchTerm, setSearchTerm] = useState("")
  // console.log(props);

  return (
    <div id="products-index">
       {searchTerm}
      <p>Search: <input type="text" value={searchTerm} onChange={(event) => {setSearchTerm(event.target.value)}} list="titles"/></p>
      <datalist id="titles">
        {props.products.map(product => (
          <option key={product.id}>{product.name}
          </option>
        ))}
      </datalist>


      {props.products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase())).map(product => (
  
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: {product.price}</p>
          <p>Description: {product.description}</p>
          {/* <p>Quantity: {product.quantity}</p> */}
          <p>Supplier: {product.supplier.name}</p>
          {product.images && product.images.map((image, productImages) => (
            <div key={productImages}>
              <img src={image.url} alt={`Product Image ${productImages + 1}`} />
            </div>
          ))}
          
          <button onClick={() => props.onShowProduct(product)}>More info</button>
        </div>
      ))}
    </div>
  );
}

