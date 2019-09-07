import React, { PureComponent, lazy, Suspense } from "react";
import PropTypes from "prop-types";
// import ProductItem from "../ProductItem/ProductItem";
const ProductItem = lazy(() => import("../ProductItem/ProductItem"));

class ProductList extends PureComponent {
  render() {
    const { productList, onAddToCart } = this.props;
    return (
      <div
        className="product-grid5"
        data-isotope='{ "itemSelector": ".product-item", "layoutMode": "fitRows" }'
      >
        <Suspense fallback={<div>.....loading</div>}>
          {productList.map(productItem => (
            <ProductItem
              key={productItem.id}
              productItem={productItem}
              onAddToCart={onAddToCart}
            />
          ))}
        </Suspense>
      </div>
    );
  }
}

ProductList.propTypes = {};

export default ProductList;
