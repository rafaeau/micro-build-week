import { useEffect, useRef, useState } from "react";
import {
  Container,
  SearchInput,
  IconRightArrow,
  IconMagnifyingGlass
} from "./styles";

function Search() {
  const targetRef = useRef(null); //initial value
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isTyped, setIsTyped] = useState('')
  const showSearchInput = isHovered || isFocused;

  useEffect(() => {
    targetRef.current.value = "";
  }, [showSearchInput]);

  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}   //with mouse hover it shows search area
      onMouseLeave={() => setIsHovered(false)}  // when mouse leave search icon its closing searchin area
      onFocus={() => setIsFocused(true)}        // make the search input area persistence when you click on it
      onBlur={() => setIsFocused(false)}        //closing search input area after clicking anywhere else
      onChange={()=>setIsTyped(targetRef.current.value)} // displaying changing value
      hover={showSearchInput}
    >
      <SearchInput ref={targetRef} showSearchInput={showSearchInput} />
      {showSearchInput ? <IconRightArrow /> : <IconMagnifyingGlass />}
    </Container>
  );
}

export default Search;