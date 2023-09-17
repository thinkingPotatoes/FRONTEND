import { ReactComponent as X } from '../../assets/image/icon/multiply.svg';

import { useEffect } from 'react';
import styled from 'styled-components';
import useLocalStorage from '../../hooks/useLocalStorage';
import ListItem from '../common/ListItem';

export const localStorageKey = 'recentSearchList';

function RecentSearch() {
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
        />
      ))}
    </RecentSearchWrapper>
  );
}

const RecentSearchWrapper = styled.div`
  padding-top: 24px;
`;

export default RecentSearch;
