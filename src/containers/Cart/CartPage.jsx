import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import CartList from "../../components/CartList/CartList";
import "./CartPage.scss";
import { connect } from "react-redux";
import {
  actPlusProductInCart,
  actMinusProductInCart
} from "../../actions/index";

class CartPage extends PureComponent {
  render() {
    const {
      cart,
      onUpdatePlusProductInCart,
      onUpdateMinusProductInCart
    } = this.props;
    console.log("cart e", cart.listCart);
    return cart.length > 0 ? (
      <CartList
        cart={cart}
        onUpdatePlusProductInCart={onUpdatePlusProductInCart}
        onUpdateMinusProductInCart={onUpdateMinusProductInCart}
      />
    ) : (
      <div className="cart-empty">
        {" "}
        <img src="https://www.rostail.com/assets/images/emptycart.gif" alt="" />
      </div>
    );
  }
}

CartPage.propTypes = {};
const mapStateToProps = state => {
  return {
    cart: state.cart.listCart
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdatePlusProductInCart: product => {
      dispatch(actPlusProductInCart(product, 1));
    },
    onUpdateMinusProductInCart: product => {
      dispatch(actMinusProductInCart(product, 1));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage);
