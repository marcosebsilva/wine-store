import * as Styled from './style';

const ProductDescription: React.FC<{description: string}> = ({description}) => {
  return(
    <Styled.Wrapper>
      <Styled.Title>Descrição</Styled.Title>
      <Styled.Description>{description}</Styled.Description>
    </Styled.Wrapper>
  );
}

export default ProductDescription;