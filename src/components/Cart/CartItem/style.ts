import styled from "styled-components";
import {Wrapper as BaseCounterWrapper} from "../../UI/BaseCounter/style";

export const Wrapper = styled.div`
  display: flex;
  max-width: 100%;
  padding-inline: 10px;
  border-radius: 5px;
  align-items: center;
  min-height: 100px;
  margin: auto;
  justify-content: space-between;
  -webkit-box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.31); 
  box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.31);
  ${BaseCounterWrapper} {
    flex-direction: column;
    width: 30px;
    padding: 5px;
  }
`

export const Title = styled.h1`
  font-size: 1rem;
  width: 40%;
`

export const RemoveButton = styled.button`
  background: red;
  width: 20px;
  border-radius: 2px;
  height: 20px;
  position: relative;
  &:after, &::before {
    content: '';
    height: 2px;
    background-color: white;
    border-radius: 3px;
    top: 50%;
    left: 50%;
    width: 80%;
    display: block;
    position: absolute;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`

export const ImageContainer = styled.div`
  position: relative;
  width: 80px;
  height: 50px;
`
