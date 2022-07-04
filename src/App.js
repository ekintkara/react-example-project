import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  state = { currentCategory: "", products: [] };

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  };

  render() {
    let categoryInfo = { title: "Category List" };
    let productInfo = { title: "Product List" };
    let naviBar = { title: "Navigation Bar" };
    return (
      <div>
        <Row>
          <Col xs="12">
            <Navi info={naviBar} />
          </Col>
        </Row>

        <Container>
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <ProductList
                products={this.state.products}
                currentCategory={this.state.currentCategory}
                info={productInfo}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}