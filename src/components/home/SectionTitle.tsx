import { styled } from 'styled-components';
import { ReactComponent as FrontArrow } from '../../assets/image/icon/frontArrow.svg';

interface Props {
  title: string;
  onClickMoreButton: () => void;
}

function SectionTitle({ title, onClickMoreButton }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <MoreButton onClick={onClickMoreButton}>
        더보기 <FrontArrow />
      </MoreButton>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Pretendard', sans-serif;
  margin-bottom: 16px;
`;
const Title = styled.span`
  font-weight: 600;
  color: var(--text-emphasize);
`;
const MoreButton = styled.button`
  font-size: 12px;
  color: var(--disabled);
`;

export default SectionTitle;
