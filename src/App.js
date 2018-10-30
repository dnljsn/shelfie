import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Dashboard from './component/dashboard/Dashboard';
import Form from './component/form/Form';
import Header from './component/header/Header';
// import Product from './component/product/Product';


class App extends Component {
  constructor() {
    super();
    this.state = {
      inventoryList: [{
        name: 'Inventory Test 1',
        price: 5,
        imgURL: 'https://ih1.redbubble.net/image.576271258.5888/flat,550x550,075,f.u2.jpg'
      }, {
        name: 'Inventory Test 2',
        price: 10,
        imgURL: 'https://s3.amazonaws.com/dev1.mtimg.com/product_photos/imgs/000/018/159/full/musk_outline.png'
      }]
    };
  }
  render() {
    return (
      <div className="App">
        <Dashboard
          inventoryList={this.state.inventoryList}
        />
        <Form />
        <Header />
        {/* <Product /> */}
      
      
      </div>
    );
  }
}

export default App;
