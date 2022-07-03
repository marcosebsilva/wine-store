import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image';
import { getAllProducts } from '../../../services/wine-api/calls';
import { findById } from '../../../services/wine-api/filters';
import { ParsedUrlQuery } from "querystring";
import RegionDescription from '../../../components/ProductPage/RegionDescription';
import Product from '../../../types/Product';
import * as Styled from './style';
import ProductInfo from '../../../components/ProductPage/ProductInfo';
import ProductDescription from '../../../components/ProductPage/ProductDescription';
import PriceContainerMobile from '../../../components/ProductPage/PriceContainerMobile';
import { useCart } from '../../../context/CartContext';
import { useEffect, useMemo, useState } from 'react';
import sizes from '../../../styles/sizes';
import useScreenSize from '../../../hooks/useScreenSize';
import PriceContainerDesktop from '../../../components/ProductPage/PriceContainerDesktop';
import BaseCartButton from '../../../components/UI/BaseCartButton';
import BaseCounter from '../../../components/UI/BaseCounter';
import Link from 'next/link';

type ProductDetailsProps = {
  product: Product
}

const ProductDetails: NextPage<ProductDetailsProps> = ({ product }) => {
  const {
    region,
    country,
    flag,
    type,
    size,
    image,
    sommelierComment,
    discount,
    price,
    priceMember,
    priceNonMember,
    volume,
    avaliations = 0,
    rating,
    classification
  } = product;

  const { addToCart } = useCart();
  const { width } = useScreenSize();
  const [quantityToIncrease, setQuantity] = useState<number>(1);

  const decreaseQuantity = () => {
    if(quantityToIncrease <= 1) return;
    setQuantity((prev) => prev - 1);
  }

  const isDesktop = useMemo(() => width !== undefined && width >= sizes.desktopSmall, [width]);

  useEffect(() =>{
    if(!isDesktop){
      setQuantity(1);
    }
  }, [isDesktop])

  const handleButtonClick = () => {
    addToCart(product, quantityToIncrease);
  }

  return (
    <Styled.Wrapper>
      {isDesktop && (
        <Styled.GoBack>
          <Styled.Arrow />
          <Link href="/loja">Voltar</Link>
        </Styled.GoBack>
      )
      }
      <RegionDescription
        region={region}
        country={country}
      />
      <Styled.ProductTitle>{product.name}</Styled.ProductTitle>
      <ProductInfo
        avaliations={avaliations}
        classification={classification}
        rating={rating}
        country={country}
        flag={flag}
        type={type}
        size={size || volume as string}
      />
      <Styled.ImageContainer>
        <Image 
          alt="Logotipo principal Wine"
          src={image}
          objectFit="contain"
          layout="fill"
        />
      </Styled.ImageContainer>
      {isDesktop && (
        <PriceContainerDesktop
          priceMember={priceMember}
          priceNonMember={priceNonMember}
          handleButtonClick={handleButtonClick}
        />)}
      <ProductDescription
        description={sommelierComment}
      />
      {!isDesktop && (
        <PriceContainerMobile
          discount={discount}
          price={price}
          priceMember={priceMember}
          priceNonMember={priceNonMember}
          handleButtonClick={handleButtonClick}
        />
      )}
      {isDesktop && (
        <Styled.DesktopButtonsContainer>
          <BaseCounter
            quantity={quantityToIncrease}
            increaseQuantity={() => setQuantity((prev) => prev + 1)}
            decreaseQuantity={decreaseQuantity}
          />
          <BaseCartButton
            handleClick={handleButtonClick}
          />
        </Styled.DesktopButtonsContainer>
      )}
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
