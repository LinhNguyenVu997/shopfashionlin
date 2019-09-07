import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./ProductDetail.scss";

class ProductDetail extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      imgCurrent: this.props.productDetail.image
    };
  }
  changeImg = img => {
    this.setState({ ...this.state, imgCurrent: img });
  };
  handleClickQuantityMinus = () => {
    if (this.state.quantity === 1) {
      return;
    } else {
      this.setState({ quantity: this.state.quantity - 1 });
    }
  };
  handleClickQuantityPlus = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  };

  getQuantity = (product, quantity) => {
    this.props.addToCart(product, quantity);
  };
  render() {
    const { productDetail } = this.props;
    console.log("productdetails", productDetail);
    console.log("productdetailsthumbnail", productDetail.thumbnails);
    console.log("productdetailsthumbnail0", productDetail.thumbnails[0]);
    const { quantity } = this.state;
    return (
      <div className="row">
        <div className="col-lg-7">
          <div className="single_product_pics">
            <div className="row">
              <div className="col-lg-3 thumbnails_col order-lg-1 order-2">
                <div className="single_product_thumbnails">
                  <ul>
                    <li
                      className={`${
                        this.state.imgCurrent === productDetail.thumbnail
                          ? "active"
                          : ""
                      }`}
                      onClick={() => this.changeImg(productDetail.thumbnail)}
                    >
                      <img src={productDetail.thumbnail} alt="" />
                    </li>
                    <li
                      className={`${
                        this.state.imgCurrent === productDetail.thumbnails[0]
                          ? "active"
                          : ""
                      }`}
                      onClick={() =>
                        this.changeImg(productDetail.thumbnails[0])
                      }
                    >
                      <img src={productDetail.thumbnails[0]} alt="" />
                    </li>
                    <li
                      className={`${
                        this.state.imgCurrent === productDetail.thumbnails[1]
                          ? "active"
                          : ""
                      }`}
                      onClick={() => this.changeImg(productDetail.images[1])}
                    >
                      <img src={productDetail.images[1]} alt="" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-9 image_col order-lg-2 order-1">
                <div className="single_product_image">
                  <div
                    className="single_product_image_background"
                    style={{ backgroundImage: `url(${this.state.imgCurrent})` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="product_details">
            <div className="product_details_title">
              <h2>{productDetail.name}</h2>
              <p>{productDetail.shortDescription}</p>
            </div>
            <div className="free_delivery d-flex flex-row align-items-center justify-content-center">
              <span className="ti-truck" />
              <span>free delivery</span>
            </div>
            <div className="original_price">{productDetail.originalPrice}</div>
            <div className="product_price">{productDetail.salePrice}</div>
            <ul className="star_rating">
              <li>
                <i className="fa fa-star" aria-hidden="true" />
              </li>
              <li>
                <i className="fa fa-star" aria-hidden="true" />
              </li>
              <li>
                <i className="fa fa-star" aria-hidden="true" />
              </li>
              <li>
                <i className="fa fa-star" aria-hidden="true" />
              </li>
              <li>
                <i className="fa fa-star-o" aria-hidden="true" />
              </li>
            </ul>
            <div className="product_color">
              <span>Select Color:</span>
              <ul>
                <li style={{ background: "#e54e5d" }} />
                <li style={{ background: "#252525" }} />
                <li style={{ background: "#60b3f3" }} />
              </ul>
            </div>
            <div className="quantity d-flex flex-column flex-sm-row align-items-sm-center">
              <span>Quantity:</span>
              <div className="quantity_selector">
                <span className="minus">
                  <i
                    className="fa fa-minus"
                    aria-hidden="true"
                    onClick={() => this.handleClickQuantityMinus()}
                  />
                </span>
                <span id="quantity_value">{quantity}</span>
                <span className="plus">
                  <i
                    className="fa fa-plus"
                    aria-hidden="true"
                    onClick={() => this.handleClickQuantityPlus()}
                  />
                </span>
              </div>
              <div
                className="redred "
                onClick={() => this.getQuantity(productDetail, quantity)}
              >
                <a>add to cart</a>
              </div>
              <div className="product_favorite d-flex flex-column align-items-center justify-content-center" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProductDetail.propTypes = {};

export default ProductDetail;
