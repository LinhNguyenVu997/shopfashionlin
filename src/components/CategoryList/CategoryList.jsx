import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import CategoryItem from "../CategoryItem/CategoryItem";

class CategoryList extends React.Component {
  render() {
    const {
      categoryList,
      onProductItemClick,
      onClickAll,
      currentFilter
    } = this.props;
    return (
      <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
        <li
          className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center active is-checked"
          onClick={() => onClickAll()}
        >
          all
        </li>
        {categoryList.map(categoryItem => (
          <CategoryItem
            key={categoryItem.id}
            categoryItem={categoryItem}
            onProductItemClick={onProductItemClick}
            currentFilter={currentFilter}
          />
        ))}
      </ul>
    );
  }
}

CategoryList.propTypes = {};

export default CategoryList;
