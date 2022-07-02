import Product from './Product';

interface ApiResponse {
  page: number,
  totalPages: number,
  itemsPerPage: number,
  totalItems: number,
  items: Product[]
}

export default ApiResponse;