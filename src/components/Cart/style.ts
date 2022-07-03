import styled from "styled-components";
import colors from "../../styles/colors";
import devices from "../../styles/devices";

export const Wrapper = styled.div<{show: boolean}>`
  height: 100vh;
  overflow-y: hidden;
  padding: ${(props) => props.show ? '20px' : '0'};
  width: ${(props) => props.show ? '100%': '0'};
  z-index: 10000;
  max-width: 100vw;
  position: fixed;
  top: 0;
  right: 0;
  background-color: white;
  padding: ${(props) => props.show ? '20px' : '0'};
  transition: 200ms;

  @media ${devices.desktopSmall} {
    min-width: auto;
    max-width: 40vw;
    transition: 300ms;
    overflow: hidden;
    opacity: 1;
    -webkit-box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.31); 
    box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.31);
  }
`
export const CartList = styled.ul`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const CloseButton = styled.button`
  padding: 10px;
  background-color: ${colors.wine_purple};
  color: white;
  font-weight: bold;
  border-radius: 5px;
`
export const Total = styled.b`
  padding: 10px;
  background-color: green;
  color: white;
  font-weight: bold;
  text-align: center;
  border-radius: 3px;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`