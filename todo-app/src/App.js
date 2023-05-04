import "./App.css";
import Navi from "./components/Navi";
import { Container, Row, Col } from "reactstrap";
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";

import React, { Component } from 'react'

export default class App extends Component {
  
  state = {
    products: [],
    categories: [],
    currentCategory : ""
  };
  changeCategory = (category)=>{
    this.setState({currentCategory:category.categoryName})
    this.getProducts(category.id)
  }
  getCategories = ()=>{
    fetch("http://localhost:3000/categories")
    .then(response=>response.json())
    .then(data=>this.setState({categories: data}))
  }

  getProducts = (url_param) => {
    let url = "http://localhost:3000/products"
    if (url_param) {
      url = url + "?categoryId=" + url_param
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  render() {
    let categoryInfo = {title:"Kategori"}
    let bodyInfo = {title:"Gövde"}
    return (
      <div>
      <Container>
        <Row>
          <Navi/>
        </Row>
        <Row>
          <Col xs="3">
            <Sidebar
            changeCategory={this.changeCategory}
            currentCategory={this.state.currentCategory}
            categories={this.state.categories}
            getCategories={this.getCategories}
            getProducts={this.getProducts}
             info={categoryInfo}/>
          </Col>
          <Col xs="9">
            <Body
            currentCategory={this.state.currentCategory}
            categories={this.state.categories} 
            products={this.state.products} 
            getProducts={this.getProducts} 
            info={bodyInfo}/>
          </Col>
        </Row>
      </Container>
    </div>
    )
  }
}
