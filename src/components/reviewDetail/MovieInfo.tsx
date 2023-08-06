import { styled } from 'styled-components';

interface MovieInfoType {
  poster: string;
  title: string;
  content: string;
}

interface Props {
  info: MovieInfoType;
}
const MovieInfo = ({ info }: Props) => {
  return (
    <MovieBox>
      <img src={info.poster} alt="" />
      <Info>
        <div className="title">{info.title}</div>
        <div className="content">{info.content.slice(0, 48) + '...'}</div>
      </Info>
    </MovieBox>
  );
};

const MovieBox = styled.div`
  display: flex;
  margin: 8px 0px 12px;
  padding: 20px 16px 12px 16px;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid var(--dark-border-border, #3c3c47);
  img {
    width: 80px;
    height: 114.275px;
    flex-shrink: 0;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--text-default);
  gap: 6px;
  .title {
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.048px;
  }

  .content {
    overflow: hidden;
    font-size: 12px;
    font-weight: 500;
    line-height: 130%;
  }
`;
export default MovieInfo;
