import { useState } from 'react';
import { styled } from 'styled-components';
import BlogReviewCalendar from './BlogReviewCalendar.tsx';
import BlogReviewList from './BlogReviewList.tsx';

const VIEW_CALENDAR = 0;
const VIEW_LIST = 1;

interface Props {
  nickname: string;
}

function BlogReviewSection({ nickname }: Props) {
  const [viewType, setViewType] = useState(0);
  const handleSelectViewType = (newViewType: number) => {
    setViewType(newViewType);
  };
  return (
    <BlogReviewWrapper>
      <ViewSelector>
        <ViewToggle
          onClick={() => handleSelectViewType(VIEW_CALENDAR)}
          $isSelected={viewType === VIEW_CALENDAR}
        >
          Calendar
        </ViewToggle>
        <ViewToggle
          onClick={() => handleSelectViewType(VIEW_LIST)}
          $isSelected={viewType === VIEW_LIST}
        >
          List
        </ViewToggle>
      </ViewSelector>
      {viewType === VIEW_CALENDAR ? <BlogReviewCalendar /> : <BlogReviewList nickname={nickname} />}
    </BlogReviewWrapper>
  );
}

const BlogReviewWrapper = styled.div`
  display: flex;
  /* height: 100%; */
  padding: 16px 20px;
  flex-direction: column;
  align-items: center;
  flex: 1 0 0;

  border-radius: 32px 32px 0px 0px;
  background: var(--dark-grey-50, #202027);
`;

const ViewSelector = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  margin-bottom: 8px;
  gap: 4px;

  border-radius: 20px;
  background: var(--dark-bg-default, #111213);
`;

const ViewToggle = styled.span<{ $isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 4px 12px;
  border-radius: 20px;
  background: var(--dark-bg-up, #1c1c25);

  background: ${(props) => (props.$isSelected ? '#1c1c25' : '0')};

  color: ${(props) => (props.$isSelected ? '#fff' : '#7E7E87')};

  /* Subtitle2 */
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.014px;
`;

export default BlogReviewSection;
