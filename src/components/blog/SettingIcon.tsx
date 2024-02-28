import { styled } from 'styled-components';
import { ReactComponent as SettingSvg } from '../../assets/setting.svg';

function SettingIcon() {
  return (
    <IconWrapper>
      <SettingSvg width={24} height={24} />
    </IconWrapper>
  );
}

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  padding: 8px;
`;

export default SettingIcon;
