import { SAVE_PRODUCTS, GET_PRODUCT } from "../actionTypes";

const initialState = {
  products: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_PRODUCTS: {
      return { products: action.payload };
    }
    case GET_PRODUCT: {
      return state.products.filter((product) => product.id == action.payload);
    }
    default:
      return state;
  }
};

export default productsReducer;
