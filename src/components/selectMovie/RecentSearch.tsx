import { ReactComponent as X } from '../../assets/image/icon/multiply.svg';

import React, { SetStateAction, useEffect } from 'react';
import styled from 'styled-components';
import useLocalStorage from '../../hooks/useLocalStorage';
import ListItem from '../common/ListItem';

export const localStorageKey = 'recentSearchList';

function RecentSearch({ setKeyword }: { setKeyword: React.Dispatch<SetStateAction<string>> }) {
  const [recentSearch, setRecentSearch] = useLocalStorage({
    key: localStorageKey,
    initialValue: [],
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(recentSearch));
  }, [recentSearch]);

  const handleRemoveSearch = (index: number) => {
    const updatedSearches = [...recentSearch];
    updatedSearches.splice(index, 1);
    setRecentSearch(updatedSearches);
  };

  const handleClickItem = (title: string) => {
    setKeyword(title);
  };

  return (
    <RecentSearchWrapper>
      {recentSearch.map((item: string, idx: number) => (
        <ListItem
          key={item}
          text={item}
          right={<X onClick={() => handleRemoveSearch(idx)} />}
          textStyle={{
            color: '--dark-grey-700',
            weight: 700,
            size: 16,
          }}
          onClick={() => handleClickItem(item)}
        />
      ))}
    </RecentSearchWrapper>
  );
}

const RecentSearchWrapper = styled.div`
  padding-top: 24px;
`;

export default RecentSearch;
