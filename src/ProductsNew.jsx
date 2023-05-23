export function ProductsNew(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params =new FormData(event.target);
    console.log('handling submit');
    props.onCreateProduct(params) 
    window.location.href = "/";
  };

  return (
    <div>
      <h1>New Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Supplier Id: <input name="supplier_id" type="integer" />
        </div>
        <div>
          Price: <input name="price" type="integer" />
        </div>
        <div>
          Quantity: <input name="quantity" type="text" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <button type="submit">Create product</button>
      </form>
    </div>
  );
}