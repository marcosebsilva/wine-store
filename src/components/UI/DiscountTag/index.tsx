import * as Styled from './style';

const DiscountTag: React.FC<{discount: number}> = ({discount}) => {
  return(
    <Styled.Wrapper>
      <Styled.Text>{discount}% OFF</Styled.Text>
    </Styled.Wrapper>
  );
}

export default DiscountTag;