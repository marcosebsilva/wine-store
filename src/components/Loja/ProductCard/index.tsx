import Image from "next/image";
import { useCart } from "../../../context/CartContext";
import Product from "../../../types/Product";
import BaseMemberPrice from "../../UI/BaseMemberPrice";
import * as Styled from './style';
import { useRouter } from "next/router";
import DiscountTag from "../../UI/DiscountTag";
import BasePrice from "../../UI/BasePrice";
import BaseCartButton from "../../UI/BaseCartButton";

const ProductCard: React.FC<{product: Product}> = ({ product }) => {
  const { name, image,price, discount, priceMember, priceNonMember } = product;
  const router = useRouter();

  const { addToCart } = useCart();

  const handleButtonClick = () => {
    addToCart(product);
  }

  return (
    <Styled.Wrapper
      onClick={() => router.push(`loja/${product.id}`)}
    >
      <Styled.CardContainer>
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
          <Styled.GenericContainer>
            <Styled.NonMemberPriceLabel>Não sócio</Styled.NonMemberPriceLabel>
            <BasePrice
              dashed={false}
              price={priceNonMember}
            />
          </Styled.GenericContainer>
        </Styled.DetailsWrapper>
      </Styled.CardContainer>
      <BaseCartButton
        handleClick={handleButtonClick}
      />
    </Styled.Wrapper>
  );
}

export default ProductCard;