import React from 'react';
class ProductsRow extends React.Component {
  constructor(props) {
    super(props);
    this.destroy = this.destroy.bind(this)
  }
  destroy() {
    this.props.onDestroy(this.props.productData.id);
  }
  render() {
    const {name, price} = this.props.productData
    return <tr>
      <td> {name} </td>
      <td> {price} </td>
      <td> <input type="button" value="Delete" onClick={this.destroy}></input> </td>
    </tr>
  }
}

export default ProductsRow;