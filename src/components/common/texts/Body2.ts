import styled from 'styled-components';
import { Props } from './TextStyleType';

const Body2 = styled.div<Props>`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 18.2px */
  letter-spacing: -0.014px;
  font-family: 'Pretendard';
  color: ${({ color }) => color};
  margin-bottom: ${({ marginBottom }: Props) => marginBottom ?? ''};
`;

export default Body2;
