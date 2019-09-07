import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

class ProductItem extends PureComponent {
  render() {
    const { productItem } = this.props;
    return (
      <div className="product-item">
        <div className="product discount product_filter">
          <div className="product_image">
            <img src={productItem.image} alt="" />
          </div>
          <div className="favorite favorite_left" />
          <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
            <span>-$20</span>
          </div>
          <div className="product_info">
            <h6 className="product_name">
              <NavLink to={`/single/${productItem.id}`}>
                {productItem.name}
              </NavLink>
            </h6>
            <div className="product_price">
              {productItem.salePrice}
              <span>{productItem.originalPrice}</span>
            </div>
          </div>
        </div>
        <div className="red_button add_to_cart_button">
          <a onClick={() => this.onAddToCart(productItem)}>add to cart</a>
        </div>
      </div>
    );
  }
  onAddToCart = productItem => {
    this.props.onAddToCart(productItem);
    console.log(productItem);
  };
}

ProductItem.propTypes = {};

export default ProductItem;
