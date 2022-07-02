import Image from "next/image";
import { useCart } from "../../../context/CartContext";
import Product from "../../../types/Product";
import BaseMemberPrice from "../../UI/BaseMemberPrice";
import * as Styled from './style';
import { formatPrice } from "../../../utils/functions";

const ProductCard: React.FC<{product: Product}> = ({ product }) => {
  const { name, image, flag,price, discount, priceMember, priceNonMember } = product;
  const formatedPrice = formatPrice(price);
  const formatedNonMemberPrice= formatPrice(priceNonMember);

  const { addToCart } = useCart();

  const handleButtonClick = () => {
    addToCart(product);
  }

  return (
    <Styled.Wrapper>
      <Styled.CardContainer>
        <Styled.ImageContainer>
          <Styled.FlagContainer>
            <Image
              alt={`Bandeira da ${flag}`}
              src={`${flag}`}
              objectFit="contain"
              layout="fill"
              quality={100}
            />
          </Styled.FlagContainer>
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
            <Styled.Price dashed={true}>R${formatedPrice}</Styled.Price>
            <Styled.DiscountTag>{discount}% OFF</Styled.DiscountTag>
          </Styled.GenericContainer>
          <Styled.GenericContainer>
            <Styled.MemberPriceLabel>Sócio Wine</Styled.MemberPriceLabel>
            <BaseMemberPrice price={priceMember}/>
          </Styled.GenericContainer>
          <Styled.GenericContainer>
            <Styled.NonMemberPriceLabel>Não sócio</Styled.NonMemberPriceLabel>
            <Styled.Price dashed={false}>R${formatedNonMemberPrice}</Styled.Price>
          </Styled.GenericContainer>
        </Styled.DetailsWrapper>
      </Styled.CardContainer>
      <Styled.CartButton onClick={handleButtonClick}>
        Adicionar
      </Styled.CartButton>
    </Styled.Wrapper>
  );
}

export default ProductCard;