import { useCallback, useEffect, useMemo, useState } from "react";
import useScreenSize from "../../../hooks/useScreenSize";
import sizes from "../../../styles/sizes";
import Product from "../../../types/Product";
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
    if(pageCount > 1) {
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

  const showMoreProducts = (quantity: number) => {
    if(itemsPerPage + quantity > totalProducts){
      setItemPerPage(totalProducts);
    } else {
      setItemPerPage((prev) => prev + quantity);
    }
  }

  return(
    <Styled.Wrapper>
      <Styled.ResultCount>
        <b>{totalProducts}</b> produtos encontrados
      </Styled.ResultCount>
      <Styled.ProductsContainer>
        {loading
          ? (<p>Loading</p>)
          : (paginatedProducts.map((product) => <ProductCard key={product.id} product={product}/>))
        }
      </Styled.ProductsContainer>
      {isDesktop
        ? renderDesktopPagination()
        : (
          <PaginationControllerMobile
            showMore={() => showMoreProducts(8)}
            totalCount={totalProducts}
            itemsPerPage={itemsPerPage}
          />
        )
      }
    </Styled.Wrapper>
  )
}

export default ProductsTable;