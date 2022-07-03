import * as Styled from './style';


interface BaseCounterProps {
  quantity: number,
  increaseQuantity: () => void,
  decreaseQuantity: () => void
}

const BaseCounter: React.FC<BaseCounterProps> = ({ quantity, increaseQuantity, decreaseQuantity }) => {
  return(
    <Styled.Wrapper>
      <Styled.RoundButton onClick={decreaseQuantity} disabled={quantity === 1}> - </Styled.RoundButton>
      <Styled.Quantity>{quantity}</Styled.Quantity>
      <Styled.RoundButton onClick={increaseQuantity}> + </Styled.RoundButton>
    </Styled.Wrapper>
  );
}

export default BaseCounter;