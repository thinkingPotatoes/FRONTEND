import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as InputCancelSvg } from '../../assets/icon/input-cancel.svg';
import { ReactComponent as SearchSvg } from '../../assets/icon/search.svg';

interface SearchBarProps {
  keyword: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  onClear: () => void;
  onSearch: () => void;
  isSearch: boolean;
}

function SearchInputBar({ keyword, onChange, onClear, onSearch, isSearch }: SearchBarProps) {
  const [_, setIsSearching] = useState(false);

  const handleSearch = () => {
    onSearch();
    setIsSearching(true);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch();
      setIsSearching(false);
    }
  };

  return (
    <BarFrame>
      <SearchBarContainer>
        <SearchInput
          value={keyword}
          onChange={onChange}
          placeholder="검색어를 입력해주세요."
          onKeyDown={handleKeyPress}
        />
        {keyword && (
          <ExitBox onClick={onClear}>
            <InputCancelSvg />
          </ExitBox>
        )}
      </SearchBarContainer>
      {!isSearch && (
        <RightButtonBox onClick={handleSearch}>
          <SearchSvg />
        </RightButtonBox>
      )}
    </BarFrame>
  );
}

const BarFrame = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const RightButtonBox = styled.div`
  display: flex;
  height: 44px;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  flex-shrink: 0;
`;

const SearchBarContainer = styled.div`
  display: flex;
  min-width: 270px;
  width: 100%;
  flex: 1;
  background-color: var(--background-bright);
  border-radius: 8px;
  border: none;
  padding: 12px 16px;
  justify-content: space-between;
`;

const SearchInput = styled.input`
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
  border: none;
  border-radius: 8px;
  background-color: var(--background-bright);
  color: var(--text-default);
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  font-family: 'Pretendard';
  &::placeholder {
    font-size: 14px;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: -0.014px;
    color: var(--disabled);
  }
  &:focus {
    outline: none;
  }
`;

const ExitBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export default SearchInputBar;
