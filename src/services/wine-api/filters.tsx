import Product from "../../types/Product";

type IFilterById =  {
  id: number,
  products: Product[],
}

type IFilterByPrice = {
  products: Product[],
  minPrice: number | null,
  maxPrice: number | null
}

type IFilterByQuery = {
  products: Product[],
  query: string,
}

export function findById({id, products}: IFilterById) {
  return products.find((product) => product.id === id);
}

export function filterByPrice({products, minPrice, maxPrice}: IFilterByPrice) {
  if (minPrice === null && maxPrice === null) return products;

  const filteredProducts = products.filter((product) => {
    if (minPrice && maxPrice) {
      return product.price > minPrice && product.price < maxPrice
    }

    if (minPrice) return product.price > minPrice;

    if (maxPrice) return product.price < maxPrice;
  });

  return filteredProducts;
}

export function filterByQuery({products, query}:IFilterByQuery){
  return products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()));
};