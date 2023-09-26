import React, { SetStateAction, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as DownArrowSvg } from '../../assets/image/icon/downArrow.svg';
import ActionSheet from '../common/ActionSheet';

function SortBy({
  sort,
  setSort,
}: {
  sort: string;
  setSort: React.Dispatch<SetStateAction<string>>;
}) {
  const [showActions, setShowActions] = useState(false);
  const sortText = sort === 'likeCnt' ? '인기순' : '최신순';
  const handleShowAction = (show: boolean) => {
    setShowActions(show);
  };

  const handleChangeSort = (sort: string) => {
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
            { text: '인기순', onClick: () => handleChangeSort('likeCnt') },
            { text: '최신순', onClick: () => handleChangeSort('createdAt') },
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
