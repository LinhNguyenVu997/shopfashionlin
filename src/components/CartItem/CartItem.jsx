import React, { PureComponent } from "react";

class CartItem extends PureComponent {
  onUpdateQuantity = (product, quantity) => {
    if (quantity > 0) {
      this.props.onUpdateProductInCart(product, quantity);
      console.log(quantity);
    }
  };

  onDeleteProduct = product => {
    const { onDeleteProductInCart } = this.props;
    onDeleteProductInCart(product);
  };

  giam = product => {
    this.props.onUpdateMinusProductInCart(product);
    console.log("giảm nè", product);
  };
  tang = product => {
    this.props.onUpdatePlusProductInCart(product);
    console.log("tăng nè", product);
  };
  render() {
    const {
      cartItem,
      onUpdateMinusProductInCart,
      onUpdatePlusProductInCart
    } = this.props;
    const { quantity } = cartItem;
    return (
      <tr>
        <th scope="row">
          <img
            src={cartItem.product.image}
            alt=""
            className="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h5>
            <strong>{cartItem.product.name}</strong>
          </h5>
        </td>
        <td>{cartItem.product.salePrice}$</td>
        <td className="center-on-small-only">
          <div className="quatity">
            <span className="qty">{quantity} </span>
          </div>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              className="btn btn-sm btn-primary
                                        btn-rounded waves-effect waves-light"
              onClick={() => this.giam(cartItem.product)}
            >
              <span>—</span>
            </label>
            <label
              className="btn btn-sm btn-primary
                                        btn-rounded waves-effect waves-light"
              onClick={() => this.tang(cartItem.product)}
            >
              <span>+</span>
            </label>
          </div>
        </td>
        <td>{cartItem.product.salePrice * cartItem.quantity}$</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-red waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Remove item"
            onClick={() => this.onDeleteProduct(cartItem.product)}
          >
            X
          </button>
        </td>
      </tr>
    );
  }
}

CartItem.propTypes = {};

export default CartItem;
