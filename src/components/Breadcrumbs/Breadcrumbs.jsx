import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./Breadcrumbs.scss";

class Breadcrumbs extends PureComponent {
  render() {
    return (
      <div className="row">
        <div className="col">
          <div className="breadcrumbs d-flex flex-row align-items-center">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="categories.html">
                  <i className="fa fa-angle-right" aria-hidden="true" />
                  Men's
                </a>
              </li>
              <li className="active">
                <a href="#">
                  <i className="fa fa-angle-right" aria-hidden="true" />
                  Single Product
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

Breadcrumbs.propTypes = {};

export default Breadcrumbs;
