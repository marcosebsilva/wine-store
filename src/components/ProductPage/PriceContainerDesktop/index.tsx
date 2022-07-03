import BaseMemberPrice from '../../UI/BaseMemberPrice';
import BasePrice from '../../UI/BasePrice';
import NonMemberPrice from '../../UI/NonMemberPrice';
import * as Styled from './style';

interface PriceContainerDesktopProps {
  priceMember: number,
  priceNonMember: number,
  handleButtonClick: () => void
}

const PriceContainerDesktop: React.FC<PriceContainerDesktopProps> = ({priceMember, priceNonMember}) => {
  return(
    <Styled.Wrapper>
      <BaseMemberPrice
        price={priceMember}
      />
      <NonMemberPrice
        label='Não sócios'
        price={priceNonMember}
        showUnity={true}
      />
    </Styled.Wrapper>
  );
}

export default PriceContainerDesktop;