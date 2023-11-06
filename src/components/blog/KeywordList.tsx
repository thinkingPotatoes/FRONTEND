import styled from 'styled-components';
import Body3 from '../common/texts/Body3';

function KeywordList({ keywords }: { keywords: string[] }) {
  const sharpKeywords = keywords.map((keyword) => `#${keyword}`);

  return (
    <KeywordListWrapper>
      <Body3>{sharpKeywords.join(' ')}</Body3>
    </KeywordListWrapper>
  );
}

const KeywordListWrapper = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  color: var(--dark-grey-700);
  height: 40px;
  width: 100%;
  overflow: hidden;
`;

export default KeywordList;
