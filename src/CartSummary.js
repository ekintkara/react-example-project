import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Badge,
  NavItem,
  NavLink,
} from "reactstrap";
import {Link} from 'react-router-dom'

export default class CartSummary extends Component {
  renderSummary() {
    return (
      <UncontrolledDropdown inNavbar nav>
        <DropdownToggle caret nav>
          Cart
        </DropdownToggle>
        <DropdownMenu right style={{ textAlign: "center" }}>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
                <Badge color="danger" onClick={()=>this.props.removeFromCart(cartItem.product)}>X</Badge>
              {cartItem.product.productName}
              <Badge color="success">{cartItem.quantity}</Badge>
            </DropdownItem>
          ))}

          <DropdownItem divider />
          <DropdownItem><Link to="cart">gotocart</Link></DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  renderEmptyCart() {
    return(
      <NavItem>
        <NavLink>Empty Cart</NavLink>
      </NavItem>
    );
  }

  render() {
    return (
      <div>{this.props.cart.length > 0 ? this.renderSummary() : this.renderEmptyCart(   )}</div>
    );
  }
}
