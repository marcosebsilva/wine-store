import * as Styled from './style';

const BaseCartButton: React.FC<{handleClick: () => void}> = ({ handleClick }) => {
  return(
    <Styled.Wrapper
      onClick={handleClick}
    >
      Adicionar
    </Styled.Wrapper>
  );
}

export default BaseCartButton;