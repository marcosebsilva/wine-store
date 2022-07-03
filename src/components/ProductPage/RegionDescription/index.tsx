import * as Styled from './style';

const RegionDescription: React.FC<{region: string, country: string}> = ({country, region}) => {
  return(
    <Styled.Wrapper>
      <Styled.Text >Vinhos</Styled.Text>
      <Styled.Arrow />
      <Styled.Text >{country}</Styled.Text>
      <Styled.Arrow />
      <Styled.RegionText>{region}</Styled.RegionText>
    </Styled.Wrapper>
  );
}

export default RegionDescription;