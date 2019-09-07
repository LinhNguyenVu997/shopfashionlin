import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import CartItem from "../CartItem/CartItem";
import { connect } from "react-redux";
import { actDeleteProductInCart } from "../../actions/index";

class CartList extends PureComponent {
  showtotal = () => {
    let rs = this.props.cart.reduce((current, next) => {
      return current + next.product.salePrice * next.quantity;
    }, 0);
    return rs;
  };
  render() {
    const {
      cart,
      onDeleteProductInCart,
      onUpdatePlusProductInCart,
      onUpdateMinusProductInCart
    } = this.props;
    return (
      <section className="section">
        <div className="table-responsive">
          <table className="table product-table">
            <thead className="thead-black">
              <tr>
                <th>Hình ảnh</th>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th>Số Lượng</th>
                <th>Tổng Cộng</th>
                <th />
              </tr>
            </thead>
            {cart.map(cartItem => (
              <CartItem
                key={cartItem.id}
                cartItem={cartItem}
                onDeleteProductInCart={onDeleteProductInCart}
                onUpdatePlusProductInCart={onUpdatePlusProductInCart}
                onUpdateMinusProductInCart={onUpdateMinusProductInCart}
              />
            ))}

            <td colSpan="3" />
            <td>
              <h4>
                <strong>Tổng Tiền</strong>
              </h4>
            </td>
            <td>
              <h4>
                <strong>{this.showtotal()}$</strong>
              </h4>
            </td>
            <td colSpan="3">
              <button
                type="button"
                className="btn btn-primary waves-effect waves-light"
              >
                Complete purchase
                <i className="fa fa-angle-right right" />
              </button>
            </td>
          </table>
        </div>
      </section>
    );
  }
}

CartList.propTypes = {
  //ghi chú
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteProductInCart: (product, quantity) => {
      dispatch(actDeleteProductInCart(product, 1));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(CartList);
