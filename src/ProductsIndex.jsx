export function ProductsIndex(props) {
  console.log(props);
  return (
    <div>
      <h1>All products</h1>
      {props.products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: {product.price}</p>
          <p>Description: {product.description}</p>
          <p>Quantity: {product.quantity}</p>
          <p>Supplier: {product.supplier.name}</p>
          Images: {product.images && product.images.map((image, productImages) => (
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

