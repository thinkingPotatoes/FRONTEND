import { useState, ChangeEvent, KeyboardEvent, RefObject, useEffect } from 'react';
import { styled } from 'styled-components';
import { POST_OPTION } from '../../../pages/ReviewDetailComment';
import axios from '../../../api/apiController';

interface Props {
  reviewId: string | undefined;
  setUpdateData: React.Dispatch<React.SetStateAction<boolean>>;
  setNowPostStatus: React.Dispatch<React.SetStateAction<string>>;
  inputRef: RefObject<HTMLInputElement>;
  postCommentAction: string;
  commentId: string;
}

function CommentInputForm({
  reviewId,
  setUpdateData,
  setNowPostStatus,
  inputRef,
  postCommentAction,
  commentId,
}: Props) {
  const [commentContent, setCommentContent] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCommentContent(event.target.value);
  };

  const handleCommentSubmit = async (commentAction: string, commentId: string) => {
    if (commentContent.trim().length > 0) {
      const COMMENT_URL = `/comment/${reviewId}`;
      switch (commentAction) {
        case POST_OPTION.POST:
          try {
            await axios.post(COMMENT_URL, {
              content: commentContent,
            });
            setUpdateData((prev) => !prev);
            setCommentContent('');
          } catch (error: any) {
            console.error('오류:', error.message);
          }
          break;
        case POST_OPTION.PUT:
          try {
            await axios.put(COMMENT_URL + `/${commentId}`, {
              content: commentContent,
            });
            setUpdateData((prev) => !prev);
            setCommentContent('');
            setNowPostStatus(POST_OPTION.POST);
          } catch (error: any) {
            console.error('오류:', error.message);
          }
          break;
      }
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleCommentSubmit(postCommentAction, commentId);
    }
  };

  return (
    <CommentInputContainer>
      <CommentInputBox>
        <CommentInput
          ref={inputRef}
          value={commentContent}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          placeholder={postCommentAction === POST_OPTION.REPLY ? '답글 달기' : '댓글 달기'}
          hasContent={commentContent.trim().length > 0}
        />
        <CommentButton
          hasContent={commentContent.trim().length > 0}
          onClick={() => handleCommentSubmit(postCommentAction, commentId)}
        >
          {postCommentAction === POST_OPTION.PUT ? '수정' : '등록'}
        </CommentButton>
        {postCommentAction !== POST_OPTION.POST && (
          <CommentButton hasContent={true} onClick={() => setNowPostStatus(POST_OPTION.POST)}>
            취소
          </CommentButton>
        )}
      </CommentInputBox>
    </CommentInputContainer>
  );
}

const CommentInputContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  margin-left: -20px;
  padding: 16px 20px;
  gap: 12px;
  border-top: 1px solid var(--dark-border-border, #3c3c47);
  background-color: var(--main-background);
`;

const CommentInputBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--dark-bg-default, #111213);
`;

interface CommentButtonProps {
  hasContent: boolean;
}

const CommentInput = styled.input<CommentButtonProps>`
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1 0 0;
  padding: 12px 16px;
  align-self: stretch;
  font-size: 16px;
  border: none;
  background-color: var(--main-background);
  color: var(--text-emphasize);
  border-radius: 8px;
  outline: none;
  &::placeholder {
    color: var(--disabled);
    font-size: 14px;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: -0.014px;
  }
  &:focus {
    border: 1px solid var(--main);
  }
`;

const CommentButton = styled.button<CommentButtonProps>`
  cursor: ${({ hasContent }) => (hasContent ? 'pointer' : '')};
  flex: 0 0 auto;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.014px;
  color: ${({ hasContent }) => (hasContent ? 'var(--main)' : 'var(--disabled)')};
`;

export default CommentInputForm;
