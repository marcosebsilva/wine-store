type Product = {
  id: number,
  name: string,
  image: string,
  price: number,
  discount: number,
  priceMember: number,
  priceNonMember: number,
  type: string,
  classification: string,
  size?: string,
  rating: number,
  avaliations: number,
  country: string,
  region: string,
  volume?: string,
  flag: string,
  sommelierComment: string,
}

export default Product