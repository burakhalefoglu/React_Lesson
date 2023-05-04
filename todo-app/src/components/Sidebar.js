import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class Sidebar extends Component {
    state = {
    };
    componentDidMount(){
      this.props.getCategories();
    }

  render() {
    return ( 
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {this.props.categories.map((category) => (
            <ListGroupItem active={this.props.currentCategory===category.categoryName?true:false} onClick={()=> this.props.changeCategory(category)} key={category.id}>{category.categoryName}</ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
