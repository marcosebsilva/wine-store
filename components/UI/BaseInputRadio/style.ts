import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 400;
`

export const RadioInput = styled.input`
  position: relative;
  visibility: hidden;
  &:after {
    content: '';
    visibility: visible;
    display: block;
    position: absolute;
    top: -5px;
    left: 0;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 2px solid #888888;
  }

  &:checked {
    &:before {
      content: '';
      visibility: visible;
      position: absolute;
      display: block;
      left: 20%;
      bottom: 15%;
      width: 100%;
      height: 100%;
      position: relative;
      border-radius: 50%;
      background-color: black;
    }
  }
  margin-right: 15px;
`