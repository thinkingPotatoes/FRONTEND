import { useState } from 'react';
import styled from 'styled-components';
import useDebounce from '../../hooks/useDebounce';
import useInfinteScroll from '../../hooks/useInfinteScroll';
import { Review } from '../../types/review';
import Head3 from '../common/texts/Head3';
import Subtitle1 from '../common/texts/Subtitle1';
import Subtitle2 from '../common/texts/Subtitle2';
import SortBy from '../movieSearch/SortBy';
import ReviewList from './ReviewList';
import SearchBar from './SearchBar';

function BlogReviewList() {
  const [focus, setFocus] = useState(false);
  const [keyword, setKeyword] = useState('');
  const debouncedKeyword = useDebounce(keyword);
  const apiPath = debouncedKeyword.length > 0 ? `/filog/search/my-article` : `/filog/user`;
  const showList = debouncedKeyword.length > 0 || !focus;

  const {
    sort,
    setSort,
    ref: endRef,
    list: reviewList,
  } = useInfinteScroll(apiPath, debouncedKeyword);

  return (
    <BlogReviewListWrapper>
      <Header>
        <Head3>누구님의 영화리뷰</Head3>
        <SortBy sort={sort} setSort={setSort} />
      </Header>
      <SearchBox>
        <SearchBar setKeyword={setKeyword} focus={focus} setFocus={setFocus} />
      </SearchBox>
      {debouncedKeyword.length > 0 && (
        <SearchResult>
          <Subtitle1>{`"${debouncedKeyword}" 리뷰 검색 결과입니다`}</Subtitle1>
        </SearchResult>
      )}
      {showList ? (
        <ReviewList reviewList={reviewList as Review[]} endRef={endRef} />
      ) : (
        <Searching>
          <Subtitle2>내 리뷰를 검색하는 중이에요 🔎</Subtitle2>
        </Searching>
      )}
    </BlogReviewListWrapper>
  );
}

const BlogReviewListWrapper = styled.div`
  width: 100%;
  color: var(--dark-grey-800);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
`;

const Searching = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px 0px;
  color: var(--dark-grey-700);
`;

const SearchResult = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0px 24px 0;
  color: var(--dark-grey-700);
`;

export default BlogReviewList;
