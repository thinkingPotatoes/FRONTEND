import { styled } from 'styled-components';

interface Props {
  isSpoiler: boolean;
  scope: string;
}

function CategoryChips({ isSpoiler, scope }: Props) {
  return (
    <ChipList>
      <Chip>{isSpoiler ? '스포일러 있음' : '스포일러 없음'}</Chip>
      <Chip>{scope === 'PUBLIC' ? '전체공개' : '나만보기'}</Chip>
    </ChipList>
  );
}

const ChipList = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 8px;
`;

const Chip = styled.div`
  display: flex;
  padding: 4px 8px;
  align-items: center;
  width: fit-content;
  gap: 2px;
  border-radius: 100px;
  background: var(--dark-grey-200, #3c3c47);
  color: var(--text-default);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.24px;
`;

export default CategoryChips;
