import React, { FormEvent, SetStateAction, useRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as CancelIcon } from '../assets/image/icon/cancel.svg';
import { ReactComponent as SearchIcon } from '../assets/image/icon/search.svg';

type SearchBarProps = React.HTMLProps<HTMLInputElement> & {
  keyword: string;
  setKeyword: React.Dispatch<SetStateAction<string>>;
};

function SearchBar({ keyword, setKeyword, ...options }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputRef.current) inputRef.current?.blur();
  };

  const handleClear = () => {
    setKeyword('');
  };

  return (
    <SearchBarWrapper onSubmit={handleSubmit}>
      <SearchIcon width={16} height={16} />
      <Input
        ref={inputRef}
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        {...options}
      />
      <ClearButton onClick={handleClear}>{keyword.length > 0 ? <CancelIcon /> : <></>}</ClearButton>
    </SearchBarWrapper>
  );
}

const SearchBarWrapper = styled.form`
  display: flex;
  gap: 10px;
  padding: 12px 16px;
  align-items: center;
  border-radius: 8px;
  background: var(--background-bright);

  input:focus {
    outline: none;
  }
`;

const Input = styled.input`
  flex: auto;
  background: none;
  border: none;
  caret-color: var(--main);
  height: 32px;

  color: var(--dark-grey-700);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

const ClearButton = styled.button`
  display: flex;
  align-items: center;
  padding: 4px;
`;

export default SearchBar;
