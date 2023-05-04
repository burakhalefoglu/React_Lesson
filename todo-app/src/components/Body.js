import React, { Component } from "react";
import { Table } from "reactstrap";

export default class Body extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <div>
        <h3>{this.props.info.title + " - " + this.props.currentCategory}</h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Quantity PerUnit</th>
              <th>Unit Price</th>
              <th>Units In Stock</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((products) => (
              <tr>
                <th scope="row">{products.id}</th>
                <td>{products.productName}</td>
                <td>{products.quantityPerUnit}</td>
                <td>{products.unitPrice}</td>
                <td>{products.unitsInStock}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
