import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Collapse,
} from "reactstrap";
import CartSummary from "./CartSummary";
import { Link } from "react-router-dom";

export default class navi extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" expand="md" light>
          <NavbarBrand href="/">navi</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavLink>
                <Link to="/form1">Form Demo 1</Link>
              </NavLink>
              <CartSummary
                removeFromCart={this.props.removeFromCart}
                cart={this.props.cart}
              />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
