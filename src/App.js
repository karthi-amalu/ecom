import React from 'react';

import './App.css';
import productTitle from './components/productTitle';
import book from "./images/book.jpeg";
import logo from "./images/logo.jpeg";
import paper from "./images/paper.jpg";
import pen from "./images/pen.jpg";
import pencil from "./images/pencil.jpg";
import eraser from "./images/eraser.jpg";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cartCount: 0,
      products: [{
        "id": 1,
        "title": "Book",
        "clicked": false,
        "pic" : book
      },
      {
        "id": 2,
        "title": "Paper",
        "clicked": false,
        "pic" : paper
      },
      {
        "id": 2,
        "title": "Pen",
        "clicked": false,
        "pic" : pen
      },
      {
        "id": 2,
        "title": "Pencil",
        "clicked": false,
        "pic": pencil
      },
      {
        "id": 2,
        "title": "Eraser",
        "clicked": false,
        "pic" : eraser
      }]
    }
  }


  addCount = (status) => {
    let newCount = this.state.cartCount;
    if(status)
      newCount++;
    else
      newCount--;
    this.setState({cartCount: newCount});
    if(newCount >4)
      alert("Limit Reached");
  }
  render() {
    return (
      <div class='container clearfix'>
        <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{ marginTop: "20px" }}>
          <a class="navbar-brand" href="#">
            {this.state.firstState}
            <img src={logo} width="60" height="60" />
          </a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">

            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">{"Cart (" + this.state.cartCount + ")"}</button>

            </form>
          </div>
        </nav>
        <h3 style={{ marginTop: 20 }}>Products</h3>
        <div className="row">
          {productTitle(this.addCount.bind(this),  this.state.products[0])}
          {productTitle(this.addCount.bind(this), this.state.products[1])}
          {productTitle(this.addCount.bind(this), this.state.products[2])}
          {productTitle(this.addCount.bind(this), this.state.products[3])}
          {productTitle(this.addCount.bind(this), this.state.products[4])}
        </div>
      </div>
    );
  }
}



export default App;