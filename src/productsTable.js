import React from 'react';
import ProductRow from './productRow';

class ProductsTable extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const products = this.props.products;
    console.log(products)
    const productRows = Object.entries(products).map(([id, product]) => <ProductRow key={id} productData = {product}/>);
    return <table>
      <thead>
        <tr>
          <th>
            Name 
          </th> 
          <th> 
            Price 
          </th> 
          <th> 
            Delete 
          </th> 
        </tr> 
      </thead>
      <tbody>
        {productRows}
      </tbody>
    </table>
  }
}

export default ProductsTable;