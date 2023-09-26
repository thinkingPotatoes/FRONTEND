import { useNavigate, useParams } from 'react-router-dom';
import ReactShowMoreText from 'react-show-more-text';
import { styled } from 'styled-components';
import { Movie } from '../../types/movie';

type Props = { plot: string; movie: Movie; expanded?: boolean };

function MoviePlot({ plot, movie, expanded }: Props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleShowPlot = () => {
    navigate(`/moviesearch/${id}/plot`, {
      state: { movie },
    });
  };

  return (
    <Plot>
      <ReactShowMoreText
        lines={3}
        more="더보기"
        less=""
        truncatedEndingComponent={' ...'}
        anchorClass="anchor-button"
        onClick={handleShowPlot}
        expanded={expanded || false}
      >
        {plot}
      </ReactShowMoreText>
    </Plot>
  );
}

const Plot = styled.span`
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
