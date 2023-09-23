import styled from 'styled-components';
import { Props } from './TextStyleType';

const Head1 = styled.div<Props>`
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 31.2px */
  letter-spacing: -0.24px;
  color: ${({ color }: Props) => color ?? ''};
  margin-bottom: ${({ marginBottom }: Props) => marginBottom ?? ''};
`;

export default Head1;
