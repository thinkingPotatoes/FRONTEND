import { styled } from 'styled-components';

interface Props {
  backgroundColor: string;
  color: string;
}

const SocialLoginButton = styled.button<Props>`
  box-sizing: border-box;
  height: 52px;
  padding: 8px 16px;
  background-color: ${({ backgroundColor }: Props) => backgroundColor};
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 16px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ color }: Props) => color};
  gap: 8px;
`;

export default SocialLoginButton;
