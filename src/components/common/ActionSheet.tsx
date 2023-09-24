import styled from 'styled-components';

export type Option = {
  text: string;
  onClick: () => void;
};

function ActionSheet({
  options,
  handleShowAction,
}: {
  options: Option[];
  handleShowAction: (showModal: boolean) => void;
}) {
  const handleClickOption = (e: React.MouseEvent<HTMLDivElement>, option: Option) => {
    e.stopPropagation();

    option.onClick();
    handleShowAction(false);
  };

  const handleCancel = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    handleShowAction(false);
  };

  return (
    <ActionSheetBackdrop onClick={handleCancel}>
      <Options>
        {options.map((option, idx) => {
          const border = idx !== options.length - 1;
          let radius = '0 0 0 0';
          if (idx === 0) radius = '13px 13px 0 0';
          if (idx === options.length - 1) radius = '0 0 13px 13px';
          return (
            <Option
              key={option.text}
              $radius={radius}
              $border={border}
              onClick={(e) => handleClickOption(e, option)}
            >
              {option.text}
            </Option>
          );
        })}
      </Options>
      <Cancel onClick={handleCancel}>취소</Cancel>
    </ActionSheetBackdrop>
  );
}

const Options = styled.div`
  width: 100%;
`;

const Option = styled.div<{ $radius: string; $border: boolean }>`
  display: flex;
  padding: 18px 16px;
  justify-content: center;
  align-items: center;
  color: #007aff;
  width: 100%;
  background: rgba(24, 24, 24, 0.7);

  border-radius: ${(props) => props.$radius};
  border-bottom: ${(props) => (props.$border ? '0.5px solid rgba(84, 84, 88, 0.65)' : 'none')};
`;

const ActionSheetBackdrop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: end;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  max-width: 390px;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  padding: 0 8px 32px 8px;

  z-index: 1000;
`;

const Cancel = styled.div`
  display: flex;
  padding: 18px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 13px;
  background: #1c1c1e;
  color: #0a84ff;
  backdrop-filter: blur(40px);

  width: 100%;
`;

export default ActionSheet;
