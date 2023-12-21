import styled from 'styled-components';
import { Props } from './TextStyleType';

const Body3 = styled.div<Props>`
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 15.6px */
  color: ${({ color }) => color};
  margin-bottom: ${({ marginBottom }: Props) => marginBottom ?? ''};
`;

export default Body3;
