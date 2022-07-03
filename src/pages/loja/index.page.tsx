import type { GetStaticProps, NextPage } from 'next';
import { useEffect, useState, useMemo } from 'react';
import { useSearch } from '../../context/SearchContext';
import { getAllProducts } from '../../services/wine-api/calls';
import { filterByPrice, filterByQuery } from '../../services/wine-api/filters';
import Product from '../../types/Product';
import ProductsFilterDesktop from '../../components/Loja/ProductsFilterDesktop';
import ProductsTable from '../../components/Loja/ProductsTable';
import * as Styled from './style';
import sizes from '../../styles/sizes';
import useIsDesktop from '../../hooks/useIsDesktop';

type LojaProps = {
  products: Product[],
}

const Loja: NextPage<LojaProps> = ({ products }) => {
  const [sortedProducts, setSortedProducts] = useState<Product[]>(products);
  const isDesktop = useIsDesktop();
  const { maxPrice, minPrice, query } = useSearch();

  useEffect(() => {
    let priceSorteredProducts: Product[];

    if (query === '') {
      priceSorteredProducts = filterByPrice({ products, maxPrice, minPrice });
      setSortedProducts(priceSorteredProducts);
    } else {
      const querySorteredProducts = filterByQuery({ products, query });

      priceSorteredProducts = filterByPrice({
        products: querySorteredProducts,
        maxPrice,
        minPrice
      })
    }

    setSortedProducts(priceSorteredProducts);
  }, [query, maxPrice, minPrice, products]);

  return (
    <Styled.MainWrapper>
      {isDesktop && <ProductsFilterDesktop />}
      <ProductsTable
        products={sortedProducts}
      />
    </Styled.MainWrapper>
  )
}

export default Loja;

export const getStaticProps: GetStaticProps = async () => {
  let { items, totalItems } = await getAllProducts();
  return {
    props: {
      products: items,
      totalProducts: totalItems,
    }
  }
}
