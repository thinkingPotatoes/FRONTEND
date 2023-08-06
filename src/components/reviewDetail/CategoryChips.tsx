import { styled } from 'styled-components';

interface Props {
  categoryList: string[];
}

const CategoryChips = ({ categoryList }: Props) => {
  return (
    <ChipList>
      {categoryList.map((category) => (
        <Chip>{category}</Chip>
      ))}
    </ChipList>
  );
};

const ChipList = styled.div`
  display: flex;
  gap: 5px;
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
