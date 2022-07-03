import * as Styled from './style';
import Image from 'next/image';
import useScreenSize from '../../../hooks/useScreenSize';
import sizes from '../../../styles/sizes';
import { useMemo } from 'react';
import {v4 as generateId} from 'uuid';

interface ProductInfoProps {
  flag: string,
  country: string,
  type: string,
  size: string,
  avaliations: number,
  classification: string,
  rating: number
}
const ProductInfo: React.FC<ProductInfoProps> = ({flag, country, type, size, avaliations, rating, classification}) => {
  const { width } = useScreenSize();
  const isDesktop = useMemo<boolean>(() => width !== undefined && width > sizes.desktopSmall, [width]);
  const renderRating = () => {
    const stars = [];
    if(avaliations > 0) {
      while (stars.length < rating) {
        stars.push((
          <Styled.StarImageContainer key={generateId()}>
            <Image 
              alt="Logotipo principal Wine"
              src="/icons/star.svg"
              objectFit="contain"
              layout="fill"
            />
          </Styled.StarImageContainer>
        ))
      }
    }

    return(
      <>
        <Styled.StarsContainer>
          {stars}
        </Styled.StarsContainer>
        <Styled.AvaliationCount>{`(${avaliations})`}</Styled.AvaliationCount>
      </>
    )
  }

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
      <Styled.Text>{type} {classification}</Styled.Text>
      <Styled.Text>{size}</Styled.Text>
      {(isDesktop) && renderRating()}
    </Styled.Wrapper>
  );
}

export default ProductInfo;