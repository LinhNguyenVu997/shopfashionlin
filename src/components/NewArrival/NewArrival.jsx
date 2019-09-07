import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./NewArrival.scss";
import { async } from "q";
import Axios from "axios";
import CategoryList from "../CategoryList/CategoryList";
import ProductList from "../ProductList/ProductList";
import { actAddToCart } from "../../actions/index";
import { connect } from "react-redux";
class NewArrival extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: [],
      productList: [],
      currentFilter: ""
    };
  }

  handleClickCategories = async id => {
    let response = await Axios.get(
      `https://nc-shopping-api.herokuapp.com/api/categories/${id}/products`
    );
    this.setState({ productList: response.data.body });
    console.log(this.state.productList);
  };

  handleClickAll = async () => {
    let responseAll = await Axios.get(
      `https://nc-shopping-api.herokuapp.com/api/products`
    );
    this.setState({ productList: responseAll.data.body });
    console.log(this.state.productList);
  };

  componentDidMount = async () => {
    let response = await Axios.get(
      `http://api.demo.nordiccoder.com/api/categories`
    );
    this.setState({ categoryList: response.data.body, loading: false });
    console.log("categories nè", this.state.categoryList);

    let res = await Axios.get(`http://api.demo.nordiccoder.com/api/products`);
    this.setState({ productList: res.data.body });
    console.log("productList nè", this.state.productList);
  };
  render() {
    const { categoryList, productList, currentFilter } = this.state;
    const { onAddToCart } = this.props;
    return (
      <div className="new_arrivals">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="section_title new_arrivals_title">
                <h2>New Arrivals</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col text-center">
              <div className="new_arrivals_sorting">
                <CategoryList
                  categoryList={categoryList}
                  onProductItemClick={this.handleClickCategories}
                  onClickAll={this.handleClickAll}
                  currentFilter={currentFilter}
                  productList={productList}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ProductList
                onAddToCart={onAddToCart}
                productList={productList}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: product => {
      dispatch(actAddToCart(product, 1));
    }
  };
};
NewArrival.propTypes = {};

export default connect(
  null,
  mapDispatchToProps
)(NewArrival);
