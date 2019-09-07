import * as types from "./../constants/ActionTypes";

export const actAddToCart = (product, quantity) => {
  return {
    type: types.ADD_TO_CART,
    product,
    quantity
  };
};
export const actDeleteProductInCart = product => {
  return {
    type: types.DELETE_PRODUCT_IN_CART,
    product
  };
};

export const actPlusProductInCart = (product, quantity) => {
  return {
    type: types.UPDATE_PLUS_PRODUCT_IN_CART,
    product,
    quantity
  };
};
export const actMinusProductInCart = (product, quantity) => {
  return {
    type: types.UPDATE_MINUS_PRODUCT_IN_CART,
    product,
    quantity
  };
};
