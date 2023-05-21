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
          
        </div>
     ))}
    </div>
  );
}