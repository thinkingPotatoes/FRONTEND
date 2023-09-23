import { ReactNode } from 'react';
import styled from 'styled-components';

function Modal({
  handleShowModal,
  contentNode,
}: {
  handleShowModal: (showModal: boolean) => void;
  contentNode: ReactNode;
}) {
  return (
    <ModalBackDrop onClick={() => handleShowModal(false)}>
      <ModalBox onClick={(e) => e.stopPropagation()}>{contentNode}</ModalBox>
    </ModalBackDrop>
  );
}

const ModalBackDrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  max-width: 390px;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  padding: 0 30px;
`;

const ModalBox = styled.div`
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  border: 1px solid var(--light-grey-700);
  background: var(--main-background);
  box-shadow: 0px 0px 12px 0px rgba(255, 255, 255, 0.1);

  width: 100%;
`;

export default Modal;
