import React from 'react';
class ProductForm extends React.Component {
  render() {
    return <form>
      <h4> Enter a new product </h4>
      <label>Name: </label> <br/>
      <input type="text" placeholder="Enter product name here"></input> <br/>
      <label>Category: </label> <br/>
      <input type="text" placeholder="Enter product category"></input> <br/>
      <label>Price: </label> <br/>
      <input type="text" placeholder="Enter product price"></input> <br/>
      <input type="button" value="Save"></input>
    </form>;
  }
}

export default ProductForm;