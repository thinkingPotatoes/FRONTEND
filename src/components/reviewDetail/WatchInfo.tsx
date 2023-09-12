import styled from 'styled-components';

const WatchInfo = () => {
  return <InfoBox>WatchInfo</InfoBox>;
};

const InfoBox = styled.div`
  display: flex;
  padding: 8px 12px;
  margin-bottom: 12px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 8px;
  background: var(--dark-bg-up, #1c1c25);
  color: var(--text-default);
  font-size: 14px;
  font-weight: 500;
  line-height: 130%; /* 18.2px */
  letter-spacing: -0.014px;
`;
export default WatchInfo;
