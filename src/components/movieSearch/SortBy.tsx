import React, { SetStateAction, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as DownArrowSvg } from '../../assets/image/icon/downArrow.svg';
import ActionSheet from '../common/ActionSheet';

type Props = {
  sort: string;
  setSort: React.Dispatch<SetStateAction<string>>;
  resetPage: () => void;
};

const SORT_BY_LIKE = '인기순';
const SORT_BY_CREATEDAT = '최신순';

function SortBy({ sort, setSort, resetPage }: Props) {
  const [showActions, setShowActions] = useState(false);
  const sortText = sort === 'likeCnt' ? SORT_BY_LIKE : SORT_BY_CREATEDAT;

  const handleShowAction = (show: boolean) => {
    setShowActions(show);
  };

  const handleChangeSort = (sort: string) => {
    resetPage();
    setSort(sort);
  };

  return (
    <SortByWrapper onClick={() => setShowActions(true)}>
      <Sort>{sortText}</Sort>
      <DownArrowSvg width={16} height={16} />
      {showActions && (
        <ActionSheet
          handleShowAction={handleShowAction}
          options={[
            { text: SORT_BY_LIKE, onClick: () => handleChangeSort('likeCnt') },
            { text: SORT_BY_CREATEDAT, onClick: () => handleChangeSort('createdAt') },
          ]}
        />
      )}
    </SortByWrapper>
  );
}

const SortByWrapper = styled.div`
  z-index: 1000;
  display: flex;
`;

const Sort = styled.div`
  color: var(--dark-grey-500, #7e7e87);
  /* Body3 */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 15.6px */
`;

export default SortBy;
