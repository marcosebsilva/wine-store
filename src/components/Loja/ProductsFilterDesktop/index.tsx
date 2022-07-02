import { useEffect, useState } from "react";
import { SearchOptions, useSearch } from '../../../context/SearchContext'
import BaseInputRadio from "../../UI/BaseInputRadio";
import * as Styled from './style';
import { v4 as generateId} from 'uuid';

type PriceFilter = {
  id: string,
  label: string,
  value: Omit<SearchOptions, 'query'>
}

const priceFilters: PriceFilter[] = [
    {
      id: generateId(),
      label: "Até R$40",
      value: { minPrice: null, maxPrice: 40 },
    },
    {
      id: generateId(),
      label: "R$40 A R$60",
      value: { minPrice: 40, maxPrice: 40 },
    },
    {
      id: generateId(),
      label: "R$100 A R$200",
      value: { minPrice: 100, maxPrice: 200 },
    },
    {
      id: generateId(),
      label: "R$200 A R$500",
      value: { minPrice: 200, maxPrice: 500 },
    },
    {
      id: generateId(),
      label: "Acima de R$500",
      value: { minPrice: 500, maxPrice: null }
    }

];

const ProductsFilter: React.FC = () => {
  const [selectedPriceRange, setSelectedPriceRange] = useState<Omit<SearchOptions, 'query'>>({ maxPrice: null, minPrice: null });
  const { updateSearch } = useSearch();
  
  const handleClick = (clickedPriceRange: Omit<SearchOptions, 'query'>) => {
    if(JSON.stringify(clickedPriceRange) === JSON.stringify(selectedPriceRange)){
      setSelectedPriceRange({maxPrice: null, minPrice: null});
    } else {
      setSelectedPriceRange({...clickedPriceRange});
    }
  };

  useEffect(() => {
    updateSearch({...selectedPriceRange});
  }, [selectedPriceRange, updateSearch]);

  return(
    <Styled.Wrapper>
      <Styled.MainTitle>Refine sua busca</Styled.MainTitle>
      <section>
        <Styled.SectionTitle>Por preço</Styled.SectionTitle>
        <Styled.List>
          {priceFilters.map((price) => (
            <li key={`${price.id}`}>
              <BaseInputRadio
                name="price"
                label={price.label}
                handleClick={() => handleClick(price.value)}
                checked={JSON.stringify(price.value) === JSON.stringify(selectedPriceRange)}
              />
            </li>
          ))}
        </Styled.List>
      </section>
    </Styled.Wrapper>
  );
}

export default ProductsFilter;