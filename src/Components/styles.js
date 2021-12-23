import styled, { css, keyframes } from "styled-components";
import SearchIcon from "../Icons/search";
import ArrowRightIcon from "../Icons/arrowRight";

export const Container = styled.div
`
  position: absolute;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  border-radius: 50px;
  border: 1px solid #9FA0A5;
  padding: 5px;
  background: #FEFEFE;
  transition: all 0.5s;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ hover }) =>
    hover &&
    css`
      width: 50%;
      -webkit-box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, 0.74);
      box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, 0.74);
      border: 1px solid #00adb5;

      @media (min-width: 768px) {
        width: 100%;
      }
    `}
`;

export const SearchInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 42px;
  line-height: 30px;
  outline: 0;
  border: 0;
  font-size: 1rem;
  border-radius: 20px;
  padding: 0 20px;
  margin: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  display: ${(props) => (props.showSearchInput ? "block" : "none")};
`;

/** icons */
const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const IconCommonCss = css`
  height: 1.25rem;
  width: 1.25rem;
  fill: #00adb5;
  z-index: 10;
  animation: ${fadeIn} 1s linear;
`;

export const IconMagnifyingGlass = styled(SearchIcon)`
  ${IconCommonCss}
`;

export const IconRightArrow = styled(ArrowRightIcon)`
  ${IconCommonCss}
  align-self: flex-end;
  cursor: pointer;
  &:hover {
    fill: #FEFEFE;
  }
`;
