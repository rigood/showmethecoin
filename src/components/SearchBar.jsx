import styled from "styled-components";
import MagnifyingGlass from "../assets/icons/magnifyingGlass.png";

const SearchBar = ({ keyword, handleKeyword }) => {
  return (
    <Wrapper>
      <SearchIcon src={MagnifyingGlass} />
      <Input
        type="text"
        placeholder="코인명 검색"
        value={keyword}
        onChange={handleKeyword}
      />
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;

const Input = styled.input`
  width: 300px;
  padding: 0.4rem 1.2rem;
  border-radius: 1rem;
  background-color: #f1f3f5;

  &::placeholder {
    color: #adb5bd;
  }
`;

const SearchIcon = styled.img`
  width: 16px;
  height: 16px;
`;
