import React from 'react';
import SearchBox from './searchBox';
import ProductTable from './productsTable';
import ProductForm from './productForm';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inventoryData: {
        '1': {id: 1, category: 'Music', price: '$459.99', name: 'Clarinet'},
        '2': {id: 2, category: 'Music', price: '$5,000', name: 'Cello'},
        '3': {id: 3, category: 'Music', price: '$4,500', name: 'Tuba'},
        '4': {id: 4, category: 'Furniture', price: '$799', name: 'Chaise Lounge'},
        '5': {id: 5, category: 'Furniture', price: '$1,300', name: 'Dining Table'},
        '6': {id: 6, category: 'Furniture', price: '$100', name: 'Bean Bag'}
      }
    }
  }
  render() {
    return (
      <div>
        <h1> My Inventory </h1>
        <SearchBox/>
        <ProductTable products={this.state.inventoryData}/>
        <ProductForm/>
      </div>
    );
  }
}

export default App;
