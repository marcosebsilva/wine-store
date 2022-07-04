import styled from "styled-components";
import {Wrapper as BaseCounterWrapper} from "../../UI/BaseCounter/style";

export const Wrapper = styled.div`
  display: flex;
  padding-left: 10px;
  border-radius: 5px;
  align-items: center;
  min-height: 100px;
  margin: auto;
  justify-content: space-between;
  overflow: hidden;
  -webkit-box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.31); 
  box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.31);

  ${BaseCounterWrapper} {
    flex-direction: column;
    width: 30px;
    padding: 5px;
    box-shadow: none;
    border-radius: 0;
    height: 100px;
  }
`

export const Title = styled.h1`
  font-size: 1rem;
  margin: auto;
`

export const RemoveButton = styled.button`
  background-color: red;
  width: 30px;
  flex-shrink: 0;
  min-height: 100px;
  position: relative;
  transition: 100ms;

  &:hover {
    background-color: white;
    border: 1px solid red;
    border-radius: 0 5px 5px 0;

    &:after, &::before {
      background-color: red;
    }
  }

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
