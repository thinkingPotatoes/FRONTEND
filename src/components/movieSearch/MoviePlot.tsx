import ShowMoreText from 'react-show-more-text';
import { styled } from 'styled-components';

function MoviePlot({ plot }: { plot: string }) {
  return (
    <Plot>
      <ShowMoreText
        lines={3}
        more="더보기"
        less="닫기"
        truncatedEndingComponent={' ...'}
        anchorClass="anchor-button"
      >
        {plot}
      </ShowMoreText>
    </Plot>
  );
}

const Plot = styled.div`
  color: var(--dark-grey-700, #c3c3c6);

  /* Body2 */
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 18.2px */
  letter-spacing: -0.014px;

  .anchor-button {
    color: var(--main);
  }
`;

export default MoviePlot;
