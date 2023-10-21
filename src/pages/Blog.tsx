import styled from 'styled-components';
import BlogReviewSection from '../components/blog/BlogReviewSection.tsx';
import SettingIcon from '../components/blog/SettingIcon.tsx';
import Chip from '../components/common/Chip.tsx';

function Blog() {
  return (
    <BlogWrapper>
      <BlogInfoWrapper>
        <BlogInfo>
          <BlogTitle>{'하둘셋넷다여일여아열하둘셋넷다여일여아열하둘셋넷다여'}</BlogTitle>
          <ChipWrapper>
            <Chip
              props={{
                text: '멜로 / 로맨스',
                deletable: false,
              }}
            />
            <Chip props={{ text: 'SF', deletable: false }} />
            <Chip props={{ text: '드라마', deletable: false }} />
          </ChipWrapper>
        </BlogInfo>
        <IconWrapper>
          <SettingIcon />
        </IconWrapper>
      </BlogInfoWrapper>
      <BlogReviewSection />
    </BlogWrapper>
  );
}

const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: var(--dark-bg-default, #111213);
  max-width: 390px;
  height: 100vh;

  margin: 0 -20px;
  /* padding-top: 47px; // status bar */
`;

const BlogInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6px 16px;
  gap: 10px;
`;

const BlogTitle = styled.div`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  color: var(--dark-grey-800, #e4e4e5);
  /* position: relative; */
`;

const IconWrapper = styled.div`
  margin-right: 8px;
`;

const BlogInfoWrapper = styled.div`
  display: flex;
  position: sticky;
  top: 0px;
`;

const ChipWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

export default Blog;
