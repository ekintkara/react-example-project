import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Notfound from "./Notfound";
import CartList from "./CartList";
import FormDemo1 from "./FormDemo1";


export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] };

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };
  addToCart = (product) => {
    let newcart = this.state.cart;
    // var addedItem = newcart.find((c) => c.product.id === product.id);
    newcart.push({ product: product, quantity: 1 });
    this.setState({ cart: newcart });
    alertify.success(product.productName + "  added to cart", 2);
  };

  removeFromCart = (product) => {
    let newcart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newcart });
    alertify.error(product.productName + "  Removed From Cart", 2);
  };

  render() {
    let categoryInfo = { title: "Category List" };
    let productInfo = { title: "Product List" };
    let naviBar = { title: "Navigation Bar" };
    return (
      <div>
        <Row>
          <Col xs="12">
            <Navi
              removeFromCart={this.removeFromCart}
              cart={this.state.cart}
              info={naviBar}
            />
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
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <ProductList
                      {...props}
                      products={this.state.products}
                      currentCategory={this.state.currentCategory}
                      info={productInfo}
                      addToCart={this.addToCart}
                    />
                  )}
                />

                <Route
                  exact
                  path="/cart"
                  render={(props) => (
                    <CartList
                      {...props}
                      cart={this.state.cart}
                      removeFromCart={this.removeFromCart}
                    />
                  )}
                />
                <Route component={Notfound} />
                <Route path="/form1" component={FormDemo1}/>
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
