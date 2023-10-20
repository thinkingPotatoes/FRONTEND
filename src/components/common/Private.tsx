import styled from 'styled-components';
import { ReactComponent as PrivateIcon } from '../../assets/image/icon/lock.svg';
import Body3 from './texts/Body3';

function Private() {
  return (
    <PrivateWrapper>
      <PrivateIcon width={16} height={16} fill="var(--dark-grey-600)" />
      <Body3>비공개</Body3>
    </PrivateWrapper>
  );
}

const PrivateWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;

  > div {
    display: flex;
    align-items: center;
  }
`;

export default Private;
