import React from 'react';
import Subtitle2 from '../common/texts/Subtitle2';
import Body3 from '../common/texts/Body3';
import styled from 'styled-components';
import { Rating } from 'react-simple-star-rating';
import { ReactComponent as BlankStarIcon } from '../../assets/image/icon/blankStarColorless.svg';
import { ReactComponent as FillStarIcon } from '../../assets/image/icon/fillStar.svg';

interface Props {
  subject: string;
  keywords: string[];
  grade: number;
  poster: string;
}

function BlogReviewSummaryItem({ subject, keywords, grade, poster }: Props) {
  return (
    <Conatiner>
      <Poster src={poster} alt="poster" />
      <Content>
        <Subject>{subject}</Subject>
        <KeywordContainer>
          {keywords.map((keyword: string, index: number) => {
            // 키워드가 너무 많은 경우 최대 3개로 제한, 백엔드에서 수정 필요할듯
            if (index >= 3) {
              return <></>;
            }

            return <Body3>#{keyword}</Body3>;
          })}
        </KeywordContainer>
        <StarContainer>
          <Rating
            fillIcon={<FillStarIcon width={'16px'} height={'16px'} fill="var(--main)" />}
            emptyIcon={
              <BlankStarIcon
                width={'16px'}
                height={'16px'}
                color="#ffffff"
                fill={grade === 0 ? 'var(--dark-grey-500)' : 'var(--main)'}
              />
            }
            allowFraction={true}
            initialValue={grade}
          />
        </StarContainer>
      </Content>
    </Conatiner>
  );
}

const Conatiner = styled.div`
  display: flex;
  padding: 12px 16px;
  gap: 12px;
  background-color: var(--dark-grey-100);
  border-radius: 8px;
`;

const Subject = styled(Subtitle2)`
  color: var(--dark-grey-800);
`;

const Poster = styled.img`
  width: 40px;
  height: 56px;
  object-fit: cover;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const KeywordContainer = styled.div`
  color: var(--dark-grey-700);
  display: flex;
  gap: 4px;
`;

const StarContainer = styled.div`
  height: 16px;
`;

export default BlogReviewSummaryItem;
