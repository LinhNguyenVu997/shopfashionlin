import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import ProductDetailTab from "../../components/ProductDetailTab/ProductDetailTab";
import Axios from "axios";
import { connect } from "react-redux";
import { actAddToCart } from "../../actions/index";

class SinglePage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      productDetail: {},
      loading: true
    };
  }

  componentDidMount = async () => {
    let response = await Axios.get(
      `http://api.demo.nordiccoder.com/api/products/${this.props.match.params.productId}`
    );
    this.setState({ productDetail: response.data.body, loading: false });
  };
  render() {
    const { loading, productDetail } = this.state;
    const { addToCart } = this.props;
    if (loading) return <p>........Loading</p>;
    return (
      <div className="container single_product_container">
        <Breadcrumbs />
        <ProductDetail productDetail={productDetail} addToCart={addToCart} />
        <ProductDetailTab />
      </div>
    );
  }
}

SinglePage.propTypes = {};
const mapDispatchToProps = dispatch => {
  return {
    addToCart: (product, quantity) => {
      dispatch(actAddToCart(product, quantity));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SinglePage);
