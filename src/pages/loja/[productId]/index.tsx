import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { getAllProducts } from '../../../services/wine-api/calls';
import { findById } from '../../../services/wine-api/filters';
import { ParsedUrlQuery } from "querystring";
import { useEffect } from 'react';
import Product from '../../../types/Product';
import * as Styled from './style';

type ProductDetailsProps = {
  product: Product
}

const ProductDetails: NextPage<ProductDetailsProps> = ({ product }) => {
  return (
    <Styled.Wrapper>
      <h1>{product.name}</h1>
    </Styled.Wrapper>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { items } = await getAllProducts();

  const paths = items.map((product) => ({
    params: {
      productId: `${product.id}`
    }
  }));

  return {
    fallback: false,
    paths,
  }
}

interface Params extends ParsedUrlQuery {
  productId: string,
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { items } = await getAllProducts();
  const { productId } = params as Params;

  const productToRender = findById({ products: items, id: Number(productId)});
  return {
    props: {
      product: productToRender,
    }
  }
}

export default ProductDetails;
