import * as Styled from './style';
import { formatPrice } from '../../../utils/functions';

const BasePrice: React.FC<{price: number, dashed: boolean, showUnity?: boolean}> = ({price, dashed, showUnity = false}) => {
  const formatedPrice = formatPrice(price);
  return(
    <Styled.Wrapper
      dashed={dashed}
    >
      R${formatedPrice}
      {showUnity && '/UN'}
    </Styled.Wrapper>
  );
}
export default BasePrice;