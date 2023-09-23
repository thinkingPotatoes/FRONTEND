import { styled } from 'styled-components';
import { RefObject, useState } from 'react';
import { ReactComponent as MoreActSvg } from '../../../assets/icon/moreDot.svg';
import { ReviewComment } from '../../types/review';
import { POST_OPTION } from '../../../pages/ReviewDetailComment';

interface CommentModalBtnProps {
  comment: ReviewComment;
  inputRef: RefObject<HTMLInputElement>;
  setNowCommentId: React.Dispatch<React.SetStateAction<string>>;
  setNowPostStatus: React.Dispatch<React.SetStateAction<string>>;
}

const CommentModalBtn = ({
  comment,
  inputRef,
  setNowCommentId,
  setNowPostStatus,
}: CommentModalBtnProps) => {
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    const buttonRect = event.currentTarget.getBoundingClientRect();
    const x = buttonRect.left + buttonRect.width / 2;
    const y = buttonRect.top + buttonRect.height;
    setModalPosition({ x, y });
    setModalOpen(!isModalOpen);
  };

  const handleEditClick = () => {
    // 수정모드
    if (inputRef.current) {
      // inputRef에 값을 먼저 설정
      inputRef.current.value = comment.content;
      inputRef.current.focus();
      setNowPostStatus(POST_OPTION.PUT);
      setNowCommentId(comment.id);
    }

    setModalOpen(false);
  };

  const handleDeleteClick = () => {
    setModalOpen(false);
  };

  // 바깥 영역을 클릭 시 모달이 닫힘
  const handleModalContainerClick = () => {
    setModalOpen(false);
    // setNowPostStatus(POST_OPTION.POST);
  };

  return (
    <>
      <Button onClick={handleModalToggle}>
        <MoreActSvg />
      </Button>
      {isModalOpen && (
        <ModalContainer onClick={handleModalContainerClick}>
          <ModalContent top={modalPosition.y} left={modalPosition.x}>
            <OptionButton onClick={handleEditClick}>수정하기</OptionButton>
            <OptionButton onClick={handleDeleteClick}>삭제하기</OptionButton>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
};

const Button = styled.button`
  border: none;
  margin: 8px;
  cursor: pointer;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

const ModalContent = styled.div<{ top: number; left: number }>`
  position: fixed;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left - 170}px;
  background-color: var(--dark-grey-50);
  padding: 10px;
  margin-right: 35px;
  border-radius: 8px;
`;

const OptionButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  padding: 8px;
  width: 100%;
  text-align: left;

  &:hover {
    color: var(--text-emphasize);
  }
`;

export default CommentModalBtn;
