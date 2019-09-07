export const makeParamsUrl = filter => {
  return `/category?categories=${filter.categories}?show=${filter.productPage}?page=${filter.curentPage}?sortBy=${filter.sortBy}?minPrice=${filter.minPrice}?maxPrice=${filter.maxPrice}`;
};
