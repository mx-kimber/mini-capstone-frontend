import axios from "axios"

export function ProductsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateProduct(props.product.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyProduct(props.product);
  };
    
  const handleAddToCart = (event) => {
    console.log('adding to cart')
    event.preventDefault()
    // user fills out quantity (we will handle product_id)
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/carted_products.json", params).then(response => {
      console.log(response.data)
    })
    // after, look at the shopping cart
  }

  return (
    <div>
      {/* <h1>Product information</h1> */}
      <p>Id: {props.product.id}</p>
      <p>Name: {props.product.name}</p>
      <p>Supplier: [id:{props.product.supplier.id}]{props.product.supplier.name}</p>
      <p>Price: {props.product.price}</p>
      <p>Quantity: {props.product.quantity}</p>
      <p>Description: {props.product.description}</p>
      
      {props.product.images && props.product.images.map((image, productImage) => (
        <img key={productImage} src={image.url} alt={`Product Image ${productImage + 1}`} />
      ))
      }

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
      <hr />
      <button onClick={handleClick}>Destroy Product</button>

      <form onSubmit={handleAddToCart}>
        <p>quantity: <input name="quantity" type="text" defaultValue={0} /></p>
        <p> <input name="product_id" type="hidden" defaultValue={props.product.id} /></p>
        <button type="input">Add product to cart</button>
      </form>
    </div>
  );
}