import * as Styled from './style';

const Loading: React.FC = () => {
// got this from https://loading.io/css/
  return(
    <Styled.Wrapper>
      <Styled.Loading>
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      </Styled.Loading>
    </Styled.Wrapper>
  );
}

export default Loading