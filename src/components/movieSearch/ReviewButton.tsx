import { styled } from 'styled-components';
import { ReactComponent as Pencil } from '../../assets/image/icon/pencil.svg';

function ReviewButton() {
  return (
    <ReviewButtonWrapper>
      <Pencil />
    </ReviewButtonWrapper>
  );
}

const ReviewButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: sticky;

  bottom: 12px;
  left: calc(390px - 79px);

  @media (max-width: 390px) {
    left: calc(390px - 79px);
  }

  @media (max-width: 375px) {
    left: calc(375px - 79px);
  }

  width: 67px;
  height: 67px;
  padding: 16px;
  background-color: white;
  border-radius: 999px;
  border: 3px solid var(--main, #9087f4);
  background: var(--dark-grey-900, #fff);

  /* Shadow/FloatingBtn */
  box-shadow: 5px 3px 6px 0px rgba(0, 0, 0, 0.3);
`;

export default ReviewButton;
