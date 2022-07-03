import * as Styled from './style';
import BasePrice from '../BasePrice';

interface NonMemberPriceProps {
  price: number,
  label: string,
  showUnity?: boolean,
}

const NonMemberPrice: React.FC<NonMemberPriceProps> = ({ price, label, showUnity }) => {
  return(
   <Styled.Wrapper>
    <Styled.Label>{label}</Styled.Label>
    <BasePrice
      showUnity={showUnity}
      dashed={false}
      price={price}
    />
  </Styled.Wrapper>
  )
}

export default NonMemberPrice;