import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./ProductDetailTab.scss";

class ProductDetailTab extends PureComponent {
  render() {
    return (
      <div className="tabs_section_container">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="tabs_container">
                <ul className="tabs d-flex flex-sm-row flex-column align-items-left align-items-md-center justify-content-center">
                  <li className="tab active" data-active-tab="tab_1">
                    <span>Description</span>
                  </li>
                  <li className="tab" data-active-tab="tab_2">
                    <span>Additional Information</span>
                  </li>
                  <li className="tab" data-active-tab="tab_3">
                    <span>Reviews (2)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              {/* Tab Description */}
              <div id="tab_1" className="tab_container active">
                <div className="row">
                  <div className="col-lg-5 desc_col">
                    <div className="tab_title">
                      <h4>Description</h4>
                    </div>
                    <div className="tab_text_block">
                      <h2>Pocket cotton sweatshirt</h2>
                      <p>
                        Nam tempus turpis at metus scelerisque placerat nulla
                        deumantos solicitud felis. Pellentesque diam dolor,
                        elementum etos lobortis des mollis ut...
                      </p>
                    </div>
                    <div className="tab_image">
                      <img src="lib/img/desc_1.jpg" alt="" />
                    </div>
                    <div className="tab_text_block">
                      <h2>Pocket cotton sweatshirt</h2>
                      <p>
                        Nam tempus turpis at metus scelerisque placerat nulla
                        deumantos solicitud felis. Pellentesque diam dolor,
                        elementum etos lobortis des mollis ut...
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-5 offset-lg-2 desc_col">
                    <div className="tab_image">
                      <img src="lib/img/desc_2.jpg" alt="" />
                    </div>
                    <div className="tab_text_block">
                      <h2>Pocket cotton sweatshirt</h2>
                      <p>
                        Nam tempus turpis at metus scelerisque placerat nulla
                        deumantos solicitud felis. Pellentesque diam dolor,
                        elementum etos lobortis des mollis ut...
                      </p>
                    </div>
                    <div className="tab_image desc_last">
                      <img src="lib/img/desc_3.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Tab Additional Info */}
              <div id="tab_2" className="tab_container">
                <div className="row">
                  <div className="col additional_info_col">
                    <div className="tab_title additional_info_title">
                      <h4>Additional Information</h4>
                    </div>
                    <p>
                      COLOR:<span>Gold, Red</span>
                    </p>
                    <p>
                      SIZE:<span>L,M,XL</span>
                    </p>
                  </div>
                </div>
              </div>
              {/* Tab Reviews */}
              <div id="tab_3" className="tab_container">
                <div className="row">
                  {/* User Reviews */}
                  <div className="col-lg-6 reviews_col">
                    <div className="tab_title reviews_title">
                      <h4>Reviews (2)</h4>
                    </div>
                    {/* User Review */}
                    <div className="user_review_container d-flex flex-column flex-sm-row">
                      <div className="user">
                        <div className="user_pic" />
                        <div className="user_rating">
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
                        </div>
                      </div>
                      <div className="review">
                        <div className="review_date">27 Aug 2016</div>
                        <div className="user_name">Brandon William</div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                      </div>
                    </div>
                    {/* User Review */}
                    <div className="user_review_container d-flex flex-column flex-sm-row">
                      <div className="user">
                        <div className="user_pic" />
                        <div className="user_rating">
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
                        </div>
                      </div>
                      <div className="review">
                        <div className="review_date">27 Aug 2016</div>
                        <div className="user_name">Brandon William</div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Add Review */}
                  <div className="col-lg-6 add_review_col">
                    <div className="add_review">
                      <form id="review_form" action="post">
                        <div>
                          <h1>Add Review</h1>
                          <input
                            id="review_name"
                            className="form_input input_name"
                            type="text"
                            name="name"
                            placeholder="Name*"
                            required="required"
                            data-error="Name is required."
                          />
                          <input
                            id="review_email"
                            className="form_input input_email"
                            type="email"
                            name="email"
                            placeholder="Email*"
                            required="required"
                            data-error="Valid email is required."
                          />
                        </div>
                        <div>
                          <h1>Your Rating:</h1>
                          <ul className="user_star_rating">
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
                          <textarea
                            id="review_message"
                            className="input_review"
                            name="message"
                            placeholder="Your Review"
                            rows={4}
                            required
                            data-error="Please, leave us a review."
                            defaultValue={""}
                          />
                        </div>
                        <div className="text-left text-sm-right">
                          <button
                            id="review_submit"
                            type="submit"
                            className="red_button review_submit_btn trans_300"
                            value="Submit"
                          >
                            submit
                          </button>
                        </div>
                      </form>
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

ProductDetailTab.propTypes = {};

export default ProductDetailTab;
