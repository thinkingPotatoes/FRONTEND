import { styled } from 'styled-components';
import { ReactComponent as SettingSvg } from '../../assets/setting.svg';

function SettingIcon() {
  return (
    <IconWrapper>
      <SettingSvg />
    </IconWrapper>
  );
}

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  padding: 8px;
`;

export default SettingIcon;
