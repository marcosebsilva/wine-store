import * as Styled from './style';
import Image from 'next/image';

interface ProductInfoProps {
  flag: string,
  country: string,
  type: string,
  size: string,
}
const ProductInfo: React.FC<ProductInfoProps> = ({flag, country, type, size}) => {
  return(
    <Styled.Wrapper>
      <Styled.FlagContainer>
        <Image 
          alt="Logotipo principal Wine"
          src={flag}
          objectFit="contain"
          layout="fill"
        />
      </Styled.FlagContainer>
      <Styled.CountryText>{country}</Styled.CountryText>
      <Styled.Text>{type}</Styled.Text>
      <Styled.Text>{size}</Styled.Text>
    </Styled.Wrapper>
  );
}

export default ProductInfo;