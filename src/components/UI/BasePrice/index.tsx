import * as Styled from './style';
import { formatPrice } from '../../../utils/functions';

const BasePrice: React.FC<{price: number, dashed: boolean}> = ({price, dashed}) => {
  const formatedPrice = formatPrice(price);
  return(
    <Styled.Wrapper
      dashed={dashed}
    >
      R${formatedPrice}
    </Styled.Wrapper>
  );
}
export default BasePrice;