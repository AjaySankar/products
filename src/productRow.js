import React from 'react';
class ProductsRow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const productData = this.props.productData
    return <tr>
      <td> {productData.name} </td>
      <td> {productData.price} </td>
      <td> <input type="button" value="Delete"></input></td>
    </tr>
  }
}

export default ProductsRow;