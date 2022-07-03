import Product from '../../../types/Product';
import BaseCartButton from '../../UI/BaseCartButton';
import BaseMemberPrice from '../../UI/BaseMemberPrice';
import BasePrice from '../../UI/BasePrice';
import DiscountTag from '../../UI/DiscountTag';
import NonMemberPrice from '../../UI/NonMemberPrice';
import * as Styled from './style';

interface PriceContainerMobilePorps {
  discount: number,
  price: number,
  priceMember: number,
  priceNonMember: number,
  handleButtonClick: () => void
}

const PriceContainerMobile: React.FC<PriceContainerMobilePorps> = ({discount, price, priceMember, priceNonMember, handleButtonClick}) => {
  return(
    <Styled.Wrapper>
      <DiscountTag discount={discount}/>
      <Styled.PriceWrapper>
        <BasePrice
          price={price}
          dashed={true}
        />
        <BaseMemberPrice price={priceMember} />
        <NonMemberPrice
          price={priceNonMember}
          label="Preço não-sócio"
        />         
      </Styled.PriceWrapper>
      <BaseCartButton
        handleClick={handleButtonClick}
      />
    </Styled.Wrapper>
  );
}

export default PriceContainerMobile;