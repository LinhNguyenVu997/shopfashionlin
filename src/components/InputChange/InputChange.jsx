import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

class InputChange extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: { min: 200, max: 650 }
    };
  }

  render() {
    return (
      <div className="sidebar_section">
        <div className="sidebar_title">
          <h5>Filter by Price</h5>
        </div>
        <p>
          <InputRange
            maxValue={700}
            minValue={100}
            value={this.state.value}
            onChange={value => this.setState({ value })}
          />
        </p>
        <div id="slider-range" />
        <div
          className="filter_button"
          onClick={() =>
            this.props.handleInputChange(
              this.state.value.min,
              this.state.value.max
            )
          }
        >
          <span>filter</span>
        </div>
      </div>
    );
  }
}

InputChange.propTypes = {};

export default InputChange;
