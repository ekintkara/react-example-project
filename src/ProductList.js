import React, { Component } from "react";
import { Table, Button } from "reactstrap";
export default class ProductList extends Component {
 
  render() {
    return (
      <div>
        <h3>
          {this.props.info.title}-{this.props.currentCategory}
        </h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th style={{ textAlign: "center" }}>Product Name</th>
              <th style={{ textAlign: "center" }}>Unit Price</th>
              <th style={{ textAlign: "center" }}>Quantity Per Unit</th>
              <th style={{ textAlign: "center" }}>Units In Stock</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td style={{ textAlign: "center" }}>{product.productName}</td>
                <td style={{ textAlign: "center" }}>{product.unitPrice}</td>
                <td style={{ textAlign: "center" }}>
                  {product.quantityPerUnit}
                </td>
                <td style={{ textAlign: "center" }}>{product.unitsInStock}</td>
                <td>
                  
                  <Button onClick={()=>this.props.addToCart(product)} color="primary">Add</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
