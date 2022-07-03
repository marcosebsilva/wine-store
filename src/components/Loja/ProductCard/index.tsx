import Image from "next/image";
import { useCart } from "../../../context/CartContext";
import Product from "../../../types/Product";
import BaseMemberPrice from "../../UI/BaseMemberPrice";
import * as Styled from './style';
import { useRouter } from "next/router";
import DiscountTag from "../../UI/DiscountTag";
import BasePrice from "../../UI/BasePrice";
import BaseCartButton from "../../UI/BaseCartButton";
import NonMemberPrice from "../../UI/NonMemberPrice";
import { MouseEvent, useEffect, useState } from "react";
import testSelectors from "../../../../cypress/fixtures/test_selectors";


interface ProductCardProps {
  cardClickCallback?: () => void,
  product: Product,
}
const ProductCard: React.FC<ProductCardProps> = ({ product, cardClickCallback = () => {} }) => {
  const { name, image,price, discount, priceMember, priceNonMember } = product;
  const router = useRouter();

  const { addToCart } = useCart();

  const handleButtonClick = () => {
    addToCart(product, 1);
  }

  const handleCardClick = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    cardClickCallback();
    router.push(`loja/${product.id}`)
  }

  return (
    <Styled.Wrapper data-testid={testSelectors.productCard}>
      <Styled.CardContainer onClick={handleCardClick}>
        <Styled.ImageContainer>
          <Image 
            alt={`Foto do produto ${name}`}
            src={`${image}`}
            objectFit="contain"
            layout="fill"
            quality={100}
          />
        </Styled.ImageContainer>
        <Styled.DetailsWrapper>
          <Styled.ProductName>{ name }</Styled.ProductName> 
          <Styled.GenericContainer>
            <BasePrice
              dashed={true}
              price={price}
            />
            <DiscountTag discount={discount}/>
          </Styled.GenericContainer>
          <Styled.GenericContainer>
            <Styled.MemberPriceLabel>Sócio Wine</Styled.MemberPriceLabel>
            <BaseMemberPrice price={priceMember}/>
          </Styled.GenericContainer>
          <NonMemberPrice
            label="Não sócio"
            price={priceNonMember}
          />
        </Styled.DetailsWrapper>
      </Styled.CardContainer>
      <BaseCartButton
        handleClick={handleButtonClick}
      />
    </Styled.Wrapper>
  );
}

export default ProductCard;