import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./header.scss";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class header extends PureComponent {
  showQuantity = () => {
    console.log(this.props.cart);
    let rs = this.props.cart.reduce((total, current) => {
      return total + current.quantity;
    }, 0);
    return rs;
  };

  render() {
    return (
      <header className="header trans_300">
        <div className="top_nav">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="top_nav_left">
                  free shipping on all u.s orders over $50
                </div>
              </div>
              <div className="col-md-6 text-right">
                <div className="top_nav_right">
                  <ul className="top_nav_menu">
                    <li className="language">
                      <NavLink to="#">
                        English
                        <i className="fa fa-angle-down" />
                      </NavLink>
                      <ul className="language_selection">
                        <li>
                          <NavLink to="#">French</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Italian</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">German</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Spanish</NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="account">
                      <NavLink to="#">
                        My Account
                        <i className="fa fa-angle-down" />
                      </NavLink>
                      <ul className="account_selection">
                        <li>
                          <NavLink to="#">
                            <i className="fa fa-sign-in" aria-hidden="true" />
                            Sign In
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="#">
                            <i className="fa fa-user-plus" aria-hidden="true" />
                            Register
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main_nav_container">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-right">
                <div className="logo_container">
                  <NavLink to="#">
                    Nordic<span>Shop</span>
                  </NavLink>
                </div>
                <nav className="navbar">
                  <ul className="navbar_menu">
                    <li>
                      <NavLink exact to="/">
                        home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/category">shop</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">promotion</NavLink>
                    </li>
                    <li>
                      <NavLink to="https://nordiccoder.com/blog" target="blank">
                        blog
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="contact.html">contact</NavLink>
                    </li>
                  </ul>
                  <ul className="navbar_user">
                    <li className="checkout">
                      <NavLink to="/cart">
                        <i className="fa fa-shopping-cart" aria-hidden="true" />
                        <span id="checkout_items" className="checkout_items">
                          {this.showQuantity()}
                        </span>
                      </NavLink>
                    </li>
                  </ul>
                  <div className="hamburger_container">
                    <i className="fa fa-bars" aria-hidden="true" />
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart.listCart
  };
};

export default connect(
  mapStateToProps,
  null
)(header);
