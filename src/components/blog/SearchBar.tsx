import React, { FormEvent, SetStateAction, useRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../assets/image/icon/searchColorless.svg';

type Props = {
  focus: boolean;
  setFocus: React.Dispatch<SetStateAction<boolean>>;
  setKeyword: React.Dispatch<SetStateAction<string>>;
};

function SearchBar({ focus, setFocus, setKeyword }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFocus(false);
    inputRef.current?.blur();
  };

  const inputBgColor = focus ? 'var(--dark-bg-down)' : 'var(--background-bright)';

  return (
    <SearchBarWarpper>
      <InputBox $focus={focus} onSubmit={handleSubmit} $background={inputBgColor}>
        {focus || <SearchIcon width={16} height={16} fill="var(--dark-grey-500)" />}
        <Input
          placeholder="내 리뷰를 검색해보세요!"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={(e) => setKeyword(e.target.value)}
          ref={inputRef}
        />
      </InputBox>
      {focus && (
        <SearchButton>
          <SearchIcon width={24} height={24} fill="var(--dark-grey-600)" />
        </SearchButton>
      )}
    </SearchBarWarpper>
  );
}

const SearchBarWarpper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  width: 100%;
`;

const InputBox = styled.form<{ $focus: boolean; $background: string }>`
  display: flex;
  justify-content: space-between;
  gap: 6px;
  border-radius: 8px;
  background: ${(props) => props.$background};
  border: ${(props) => (props.$focus ? '1px solid var(--main)' : 'none')};
  padding: 12px 16px;
  width: 100%;

  input:focus {
    outline: none;
    border: none;
  }
`;

const Input = styled.input`
  display: flex;
  align-items: center;
  width: 100%;
  background: none;
  border: none;
  caret-color: var(--main);

  color: var(--dark-grey-700);
`;

const SearchButton = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 10px;
`;

export default SearchBar;
