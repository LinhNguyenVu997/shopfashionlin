import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import CategoryMainSort from "../../components/CategoryMainSort/CategoryMainSort";
import { connect } from "react-redux";
import { actAddToCart } from "../../actions";
class Categorypage extends PureComponent {
  handleInputChange = (minPrice, maxPrice) => {
    const newState = {
      currentFilter: { ...this.state.currentFilter, minPrice, maxPrice }
    };
    this.setState(newState);
    console.log("this.state", newState);
  };
  redirect = url => {
    this.props.history.push(url);
  };
  render() {
    return (
      <CategoryMainSort
        redirect={this.redirect}
        onAddToCart={this.props.onAddToCart}
      />
    );
  }
}

Categorypage.propTypes = {};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: product => {
      dispatch(actAddToCart(product, 1));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Categorypage);
