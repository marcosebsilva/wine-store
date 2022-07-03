import { NextPage } from "next";
import * as Styled from './style';
import { formatMemberPrice } from "./utils";

const BaseMemberPrice: NextPage<{price: number}> = ({price}) => {
  const [integer, decimals] = formatMemberPrice(price);
  return(
    <Styled.Wrapper>
      R$
      {' '}
      <Styled.Integer>{integer}</Styled.Integer>
      {','}
      <Styled.Decimals>{decimals}</Styled.Decimals>
    </Styled.Wrapper>
  );
}

export default BaseMemberPrice;