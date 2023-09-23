import { ReactNode } from 'react';
import styled from 'styled-components';
import Caption1 from './texts/Caption1';

type ListItemProps = React.HTMLProps<HTMLDivElement> & {
  text: string;
  textStyle?: {
    color?: string;
    weight?: number;
    size?: number;
  };
  description?: string;
  right?: ReactNode;
};

function ListItem({ text, description, right, textStyle, ...options }: ListItemProps) {
  return (
    <ListItemWrapper {...options}>
      <div>
        <Text $style={textStyle}>{text}</Text>
        <Description>
          <Caption1>{description}</Caption1>
        </Description>
      </div>
      <Right>{right ? right : <></>}</Right>
    </ListItemWrapper>
  );
}

const ListItemWrapper = styled.div`
  display: flex;
  height: 52px;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.div<{ $style?: { color?: string; weight?: number; size?: number } }>`
  font-size: 14px;
  font-style: normal;
  line-height: 130%;
  letter-spacing: -0.014px;

  color: ${(props) => (props?.$style?.color ? `var(${props.$style.color})` : '')};
  font-weight: ${(props) => (props?.$style?.weight ? props.$style.weight : 500)};
  font-size: ${(props) => (props?.$style?.size ? `${props.$style.size}px` : '')};
`;

const Description = styled.div`
  color: var(--dark-grey-500);
`;

const Right = styled.div`
  padding: 0 12px;
`;

export default ListItem;
