import { NextPage } from "next";
import { MouseEvent } from "react";
import * as Styled from './style';


type BaseInputRadioProps = {
  label: string,
  name: string,
  checked: boolean,
  handleClick: (e: MouseEvent<HTMLInputElement>) => void
}

const BaseInputRadio: NextPage<BaseInputRadioProps> = ({label, name, handleClick, checked}) => {
  return(
    <Styled.Label>
      <Styled.RadioInput
        type="radio"
        name={name}
        onClick={handleClick}
        checked={checked}
        readOnly
      />
      {' '}
      {label}
    </Styled.Label>
  );
}

export default BaseInputRadio;