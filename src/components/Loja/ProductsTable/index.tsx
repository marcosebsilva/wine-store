import { useCallback, useEffect, useMemo, useState } from "react";
import useScreenSize from "../../../hooks/useScreenSize";
import sizes from "../../../styles/sizes";
import Product from "../../../types/Product";
import Loading from "../../UI/Loading";
import PaginationController from "../PaginationControllerDesktop";
import PaginationControllerMobile from "../PaginationControllerMobile";
import ProductCard from "../ProductCard";
import * as Styled from './style';

const ProductsTable: React.FC<{products: Product[]}> = ({ products }) => {
  const [itemsPerPage, setItemPerPage] = useState<number>(8);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [paginatedProducts, setPaginatedProducts] = useState<Product[]>(products);
  const [loading, setLoading] = useState<boolean>(true);

  const { width } = useScreenSize();
  const isDesktop = useMemo(() => width !== undefined && width >= sizes.desktopSmall, [width])

  const totalProducts = useMemo(() => products.length, [products]);
  const pageCount = useMemo(() => Math.ceil(totalProducts / itemsPerPage), [totalProducts, itemsPerPage]);

  const updatePaginatedProducts = useCallback(() => {
    const paginatedProducts = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    setPaginatedProducts(paginatedProducts);
  }, [products, currentPage, itemsPerPage]);

  useEffect(() => {
    if(currentPage !== 1) {
      setCurrentPage(1);
    }
    setLoading(true);
    updatePaginatedProducts();
    setLoading(false);
  }, [products]);

  useEffect(() => {
    setLoading(true);
    updatePaginatedProducts();
    setLoading(false);

    if(isDesktop){
      window.scrollTo({ top: 0});
    }
    
  }, [products, currentPage, itemsPerPage, setLoading, updatePaginatedProducts, isDesktop]);

  useEffect(() => {
    if(isDesktop) {
      setItemPerPage(8);
    }
  }, [isDesktop]);

  const handlePageClick = (newPage: number) => {
    setCurrentPage(newPage)
  }

  const renderDesktopPagination = () => {
    if(pageCount > 1 && !loading) {
      return (
        <PaginationController
          pageCount={pageCount}
          currentPage={currentPage}
          handlePageClick={handlePageClick}
          maxAmountOfButtons={3}
          minAmountOfButtons={2}
        />
      )
    }
  }

  const renderMobilePagination = () => {
    if(!loading) {
      return (
        <PaginationControllerMobile
          showMore={() => showMoreProducts(8)}
          totalCount={totalProducts}
          itemsPerPage={itemsPerPage}
        />
      )
    }
  }

  const showMoreProducts = (quantity: number) => {
    if(itemsPerPage + quantity > totalProducts){
      setItemPerPage(totalProducts);
    } else {
      setItemPerPage((prev) => prev + quantity);
    }
  }

  const cardClickCallback = () => {
    setLoading(true);
    console.log('redirecting...');
  }

  return(
    <Styled.Wrapper>
      <Styled.ResultCount>
        <b>{totalProducts}</b> produtos encontrados
      </Styled.ResultCount>
        {loading ? <Loading /> : (
          <Styled.ProductsContainer>
            {paginatedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                cardClickCallback={cardClickCallback}
              />
            ))}
          </Styled.ProductsContainer>
        )}
      {isDesktop ? renderDesktopPagination() : renderMobilePagination()}
    </Styled.Wrapper>
  )
}

export default ProductsTable;