export function ProductsShow(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateProduct(props.product.id, params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Product information</h1>
      <p>Id: {props.product.id}</p>
      <p>Name: {props.product.name}</p>
      <p>Supplier Id: {props.product.supplier.name}</p>
      <p>Price: {props.product.price}</p>
      <p>Quantity: {props.product.quantity}</p>
      <p>Description: {props.product.description}</p>
      
      <form onSubmit={handleSubmit}>
      <div>
        Name: <input name="name" type="text" defaultValue={props.product.name} />
      </div>
      <div>
        Supplier_id: <input name="supplier_id" type="text"  defaultValue={props.product.supplier.id} />
      </div>
      <div>
        Price: <input name="price" type="integer" defaultValue={props.product.price} />
      </div>
      <div>
        Quantity: <input name="quantity" type="integer" defaultValue={props.product.quantity} />
      </div>
      <div>
        Description: <input name="description" type="text" defaultValue={props.product.description}/>
      </div>
        <button type= "submit"> Update Product</button>
      </form>
    </div>
  );
}