import BaseCartButton from '../../UI/BaseCartButton';
import BaseMemberPrice from '../../UI/BaseMemberPrice';
import BasePrice from '../../UI/BasePrice';
import DiscountTag from '../../UI/DiscountTag';
import * as Styled from './style';

interface PriceContainerProps {
  discount: number,
  price: number,
  priceMember: number,
  priceNonMember: number,
  handleButtonClick: () => void
}

const PriceContainer: React.FC<PriceContainerProps> = ({ discount, price, priceMember, priceNonMember, handleButtonClick }) => {


  return(
    <Styled.Wrapper>
      <DiscountTag discount={discount}/>
      <Styled.PriceWrapper>
        <BasePrice
          price={price}
          dashed={true}
        />
        <BaseMemberPrice price={priceMember} />
        <Styled.NonMemberPriceContainer>
          <Styled.NonMemberPriceLabel>
            Preço não-sócio
          </Styled.NonMemberPriceLabel>
          <BasePrice
            price={priceNonMember}
            dashed={false}
          />
        </Styled.NonMemberPriceContainer>
      </Styled.PriceWrapper>
      <BaseCartButton
        handleClick={handleButtonClick}
      />
    </Styled.Wrapper>
  );
}

export default PriceContainer;