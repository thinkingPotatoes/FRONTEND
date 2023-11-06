import { useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as CancelSvg } from '../../assets/icon/btn-cancel.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { SearchBoxProps, fetchAutocompleteSuggestions } from './SearchBox';
import { MovieResponseList } from '../../types/search';
import { localStorageKey, updateRecentSearch, useSearch } from '../../hooks/useSearchContext';

function RecentSearch({ onChange, onSearch, setResults }: SearchBoxProps) {
  const { recentSearch, setRecentSearch } = useSearch();

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(recentSearch));
  }, [recentSearch]);

  function handleRemoveSearch(index: number) {
    const updatedSearches = [...recentSearch];
    updatedSearches.splice(index, 1);
    setRecentSearch(updatedSearches);
  }

  function handleClearSearches() {
    setRecentSearch([]);
  }

  async function handleRecentChipSearch(keyword: string) {
    onSearch(keyword, true);
    onChange(false);

    const updatedRecentSearches = updateRecentSearch(recentSearch, keyword.trim());
    setRecentSearch(updatedRecentSearches);

    try {
      //!loading 화면 필요
      const results: MovieResponseList[] = await fetchAutocompleteSuggestions(keyword);
      setResults(results);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <SubtitleList>
        <div className="title">최근 검색어</div>
        <div className="deleteBtn" onClick={handleClearSearches}>
          전체삭제
        </div>
      </SubtitleList>
      <SwiperContainer>
        <Swiper slidesPerView={'auto'} spaceBetween={10}>
          {recentSearch.length > 0 &&
            recentSearch.map((search: string, idx: number) => (
              <SwiperSlide key={idx}>
                <RecentSearchChip>
                  <div onClick={() => handleRecentChipSearch(search)}>{search}</div>
                  <CancelSvg onClick={() => handleRemoveSearch(idx)} />
                </RecentSearchChip>
              </SwiperSlide>
            ))}
        </Swiper>
      </SwiperContainer>
    </>
  );
}

const SwiperContainer = styled.div`
  margin-left: 20px;
  height: 52px;
  display: flex;
  align-items: center;
  margin-right: 20px;

  .swiper {
    width: calc(100% + 40px);
  }

  .swiper-slide {
    width: max-content;
  }
`;

export const SubtitleList = styled.div`
  display: flex;
  height: 56px;
  padding: 0 20px;
  align-items: center;
  gap: 10px;

  .title {
    display: flex;
    flex: 1 0 0;
    flex-direction: column;
    justify-content: center;
    color: var(--text-emphasize);
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.014px;
  }

  .deleteBtn {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    align-self: stretch;
    padding-left: 12px;
    gap: 2px;
    color: var(--disabled);
    font-size: 12px;
    font-weight: 500;
    line-height: 130%;
  }
`;

export const RecentSearchChip = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 4px 8px;
  gap: 2px;
  color: var(--main);
  font-size: 16px;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.016px;
  border-radius: 100px;
  background: #2f2f51;
`;

export default RecentSearch;
