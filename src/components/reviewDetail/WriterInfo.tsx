import { styled } from 'styled-components';

const WriterInfo = () => {
  return (
    <WriterWrapper>
      <div className="profileName">Joeun Lee</div>
      <div className="writeTime">2023.12.25</div>
    </WriterWrapper>
  );
};

const WriterWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  padding: 16px 0px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--dark-border-border, #3c3c47);

  .writeTime {
    color: var(--text-default);
    font-size: 14px;
    font-weight: 500;
    line-height: 130%; /* 18.2px */
    letter-spacing: -0.014px;
  }

  .profileName {
    display: flex;
    gap: 8px;
    align-items: center;
    color: var(--text-default);
    font-size: 14px;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: -0.014px;
  }
`;

export default WriterInfo;
