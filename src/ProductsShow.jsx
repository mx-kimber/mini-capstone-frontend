export function ProductsShow(props) {
  return (
    <div>
      <h1>Product information</h1>
      <p>Name: {props.product.name}</p>
      <p>Supplier: {props.product.supplier.name}</p>
      <p>Price: {props.product.price}</p>
      <p>Quantity: {props.product.quantity}</p>
      <p>Description: {props.product.description}</p>
    </div>
  );
}