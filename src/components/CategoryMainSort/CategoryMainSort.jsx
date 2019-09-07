import React, { PureComponent } from "react";
import "./CategoryMainSort.scss";
import Axios from "axios";
import ProductListCategory from "../ProductListCategory/ProductListCategory";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import InputChange from "../InputChange/InputChange";
import { makeParamsUrl } from "../../function_makeparams";
import { Link } from "react-router-dom";
class CategoryMainSort extends PureComponent {
  constructor(props) {
    super(props);

    //get param
    const urlParams = new URLSearchParams(window.location.search);
    const initPage = Number(urlParams.get("page"));
    const initShowProduct = Number(urlParams.get("show"));
    const minPrice = Number(urlParams.get("minPrice"));
    const maxPrice = Number(urlParams.get("maxPrice"));

    this.state = {
      productList: [],
      currentFilter: {
        sortBy: "salePrice",
        productPage: initShowProduct ? initShowProduct : 6,
        curentPage: initPage ? initPage : 1,
        totalProduct: 0,
        minPrice: minPrice ? minPrice : 300,
        maxPrice: maxPrice ? maxPrice : 750,
        categories: "all"
      },
      pageNumberCurrent: 1,
      categoryList: []
    };
  }

  getCategoryName = categoriesId => {
    const { categoryList } = this.state;
    for (const item of categoryList) {
      if (item.id === categoriesId) {
        return item.name;
      } else if (categoriesId == "all") {
        return "All";
      }
    }
  };

  showPageNumberCurrent = number => {
    const page = {
      ...this.state,
      pageNumberCurrent: number
    };
    this.setState(page);
  };

  onClickCategories = async categories => {
    const newState = {
      ...this.state,
      currentFilter: { ...this.state.currentFilter, categories }
    };
    this.setState(newState);
    this.getProductList(newState.currentFilter);
    this.props.redirect(makeParamsUrl(newState.currentFilter));
  };

  changeSortBy = sortDefault => {
    const newState = {
      ...this.state,
      currentFilter: { ...this.state.currentFilter, sortBy: sortDefault }
    };
    this.setState(newState);
    console.log("new state", newState);
    this.getProductList(newState.currentFilter);
    this.props.redirect(makeParamsUrl(newState.currentFilter));
  };
  getProductList = async filters => {
    const {
      sortBy,
      productPage,
      curentPage,
      minPrice,
      maxPrice,
      categories
    } = filters;
    let filter = {
      order: sortBy,
      limit: productPage,
      skip: (curentPage - 1) * productPage,
      where: {
        salePrice: {
          between: [minPrice, maxPrice]
        }
      }
    };
    console.log(categories);
    if (categories !== "all") {
      filter = {
        ...filter,
        where: {
          ...filter.where,
          categoryId: categories
        }
      };
    }
    console.log(filter);
    const params = JSON.stringify(filter);
    // console.log("param", params);
    let response = await Axios.get(
      `https://nc-shopping-api.herokuapp.com/api/products?filter=${params}`
    );
    console.log(response);
    const totalProduct = response.data.pagination.total;
    this.setState({
      productList: response.data.body,
      currentFilter: {
        ...this.state.currentFilter,
        totalProduct
      }
    });
  };

  getShowProductPage = productPage => {
    const newState = {
      ...this.state,
      currentFilter: { ...this.state.currentFilter, productPage }
    };
    this.setState(newState);
    this.getProductList(newState.currentFilter);
    this.props.redirect(makeParamsUrl(newState.currentFilter));
  };

  changePage = page => {
    const newState = {
      ...this.state,
      currentFilter: {
        ...this.state.currentFilter,
        curentPage: page
      },
      pageNumberCurrent: page
    };
    this.setState(newState);
    console.log("new state", newState);
    this.getProductList(newState.currentFilter);
    this.props.redirect(makeParamsUrl(newState.currentFilter));
  };
  handleInputChange = (minPrice, maxPrice) => {
    const newState = {
      ...this.state,
      currentFilter: { ...this.state.currentFilter, minPrice, maxPrice }
    };
    this.setState(newState);
    this.getProductList(newState.currentFilter);
    this.props.redirect(makeParamsUrl(newState.currentFilter));
  };

  componentDidMount = async () => {
    let response = await Axios.get(
      `https://nc-shopping-api.herokuapp.com/api/products`
    );
    this.setState({
      ...this.state,
      productList: response.data.body
    });
    this.getProductList(this.state.currentFilter);

    let res = await Axios.get(
      `https://nc-shopping-api.herokuapp.com/api/categories`
    );
    this.setState({ categoryList: res.data.body, loading: false });
    console.log("categories nè", this.state.categoryList);
  };

  render() {
    const { productList, categoryList } = this.state;
    const { categories } = this.state.currentFilter;
    const { onAddToCart } = this.props;

    const totalPage = Math.ceil(
      this.state.currentFilter.totalProduct /
        this.state.currentFilter.productPage
    );
    let page = [];
    for (let i = 1; i <= totalPage; i++) {
      page.push(i);
    }
    const sortType = {
      default: "Default Sorting",
      name: "Product Name",
      salePrice: "Price"
    };
    const sortArray = Object.keys(sortType);
    // console.log(window.location);
    return (
      <div className="container product_section_container">
        <div className="row">
          <div className="col product_section clearfix">
            {/* Breadcrumbs */}
            <div className="breadcrumbs d-flex flex-row align-items-center">
              <ul>
                <li>
                  <a href="index.html">Home &nbsp; > &nbsp; Categories</a>
                </li>
                <li className="active">
                  <a href="index.html">
                    <i className="fa fa-angle-right" aria-hidden="true" />
                    {this.getCategoryName(this.state.currentFilter.categories)}
                  </a>
                </li>
              </ul>
            </div>
            {/* Sidebar */}
            <div className="sidebar">
              <div className="sidebar_section">
                <div className="sidebar_title">
                  <h5>Product Category</h5>
                </div>
                <ul className="sidebar_categories">
                  <li
                    className={`${categories === "all" ? "active" : ""}`}
                    onClick={() => this.onClickCategories("all")}
                  >
                    <Link>
                      <span>
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        />
                      </span>
                      All
                    </Link>
                  </li>
                  {categoryList.map(item => (
                    <li
                      className={categories === item.id ? "active" : ""}
                      onClick={() => this.onClickCategories(item.id)}
                    >
                      {console.log(categories, item.id)}
                      <Link>
                        <span>
                          <i
                            className="fa fa-angle-double-right"
                            aria-hidden="true"
                          />
                        </span>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Price Range Filtering */}
              <InputChange handleInputChange={this.handleInputChange} />
            </div>
            {/* Main Content */}
            <div className="main_content">
              {/* Products */}
              <div className="products_iso">
                <div className="row">
                  <div className="col">
                    {/* Product Sorting */}
                    <div className="product_sorting_container product_sorting_container_top">
                      <ul className="product_sorting">
                        <li>
                          <span className="type_sorting_text">
                            {sortType[this.state.currentFilter.sortBy]}
                          </span>
                          <i className="fa fa-angle-down" />
                          <ul className="sorting_type">
                            {sortArray.map(sortItem => (
                              <li
                                className={`type_sorting_btn ${
                                  sortItem === this.state.currentFilter.sortBy
                                    ? "active-selected"
                                    : ""
                                }`}
                                onClick={() => this.changeSortBy(sortItem)}
                              >
                                <span>{sortType[sortItem]}</span>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <span>Show</span>
                          <span className="num_sorting_text">
                            {this.state.currentFilter.productPage}
                          </span>
                          <i className="fa fa-angle-down" />
                          <ul className="sorting_num">
                            <li
                              className={`num_sorting_btn ${
                                6 === this.state.currentFilter.productPage
                                  ? "active-selected"
                                  : ""
                              }`}
                              onClick={() => this.getShowProductPage(6)}
                            >
                              <span>6</span>
                            </li>
                            <li
                              className={`num_sorting_btn ${
                                12 === this.state.currentFilter.productPage
                                  ? "active-selected"
                                  : ""
                              }`}
                              onClick={() => this.getShowProductPage(12)}
                            >
                              <span>12</span>
                            </li>
                            <li
                              className={`num_sorting_btn ${
                                24 === this.state.currentFilter.productPage
                                  ? "active-selected"
                                  : ""
                              }`}
                              onClick={() => this.getShowProductPage(24)}
                            >
                              <span>24</span>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <div className="pages d-flex flex-row align-items-center">
                        <div className="page_current">
                          <span>{this.state.pageNumberCurrent}</span>
                          <ul className="page_selection">
                            {page.map(item => (
                              <li onClick={() => this.changePage(item)}>
                                <a href="#">{item}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="page_total">
                          <span>of</span> {totalPage}
                        </div>
                        <div id="next_page" className="page_next">
                          <a href="#">
                            <i
                              className="fa fa-long-arrow-right"
                              aria-hidden="true"
                            />
                          </a>
                        </div>
                      </div>
                    </div>

                    <ProductListCategory
                      productList={productList}
                      onAddToCart={onAddToCart}
                    />

                    <div className="product_sorting_container product_sorting_container_bottom clearfix">
                      <ul className="product_sorting">
                        <li>
                          <span>Show:</span>
                          <span className="num_sorting_text">04</span>
                          <i className="fa fa-angle-down" />
                          <ul className="sorting_num">
                            <li className="num_sorting_btn">
                              <span>01</span>
                            </li>
                            <li className="num_sorting_btn">
                              <span>02</span>
                            </li>
                            <li className="num_sorting_btn">
                              <span>03</span>
                            </li>
                            <li className="num_sorting_btn">
                              <span>04</span>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <span className="showing_results">
                        Showing 1–3 of 12 results
                      </span>
                      <div className="pages d-flex flex-row align-items-center">
                        <div className="page_current">
                          <span>1</span>
                          <ul className="page_selection">
                            <li>
                              <a href="#">1</a>
                            </li>
                            <li>
                              <a href="#">2</a>
                            </li>
                            <li>
                              <a href="#">3</a>
                            </li>
                          </ul>
                        </div>
                        <div className="page_total">
                          <span>of</span> 3
                        </div>
                        <div id="next_page_1" className="page_next">
                          <a href="#">
                            <i
                              className="fa fa-long-arrow-right"
                              aria-hidden="true"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CategoryMainSort.propTypes = {};

export default CategoryMainSort;
