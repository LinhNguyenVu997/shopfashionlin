import * as types from "./../constants/ActionTypes";
let data = JSON.parse(localStorage.getItem("CART"));
let initialState = {
  listCart: data ? data.listCart : []
};
const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART: {
      const { product, quantity } = action;
      const newListCart = [...state.listCart];
      console.log("nef ef", newListCart);
      const index = newListCart.findIndex(x => x.product.id === product.id);
      if (index !== -1) {
        newListCart[index].quantity += quantity;
      } else {
        newListCart.push({
          product,
          quantity
        });
      }
      const newState = { ...state, listCart: newListCart };
      localStorage.setItem("CART", JSON.stringify(newState));
      return newState;
    }
    case types.DELETE_PRODUCT_IN_CART: {
      let { product } = action;
      const newListCart = [...state.listCart];
      const index = newListCart.findIndex(x => x.product.id === product.id);
      console.log("index nè", index);
      console.log(newListCart);
      console.log(product.id);
      if (index !== -1) {
        newListCart.splice(index, 1);
      }
      const newStateDelete = { ...state, listCart: newListCart };
      localStorage.setItem("CART", JSON.stringify(newStateDelete));
      return newStateDelete;
    }
    case types.UPDATE_PLUS_PRODUCT_IN_CART: {
      const { product, quantity } = action;
      const newListCart = [...state.listCart];
      const index = newListCart.findIndex(x => x.product.id === product.id);
      if (index !== -1) {
        newListCart[index].quantity += quantity;
        console.log(newListCart[index].quantity, quantity);
      }
      const newStatePlusQuantity = { ...state, listCart: newListCart };
      localStorage.setItem("CART", JSON.stringify(newStatePlusQuantity));
      return newStatePlusQuantity;
    }
    case types.UPDATE_MINUS_PRODUCT_IN_CART: {
      const { product, quantity } = action;
      const newListCart = [...state.listCart];
      const index = newListCart.findIndex(x => x.product.id === product.id);
      console.log(index);
      if (newListCart[index].quantity > 1 && index !== -1) {
        newListCart[index].quantity -= quantity;
      }

      const newStatePlusQuantity = { ...state, listCart: newListCart };
      localStorage.setItem("CART", JSON.stringify(newStatePlusQuantity));
      return newStatePlusQuantity;
    }
    default:
      return state;
  }
};
export default cart;
