import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';

type Props = {
  subject: string;
  setSubject: React.Dispatch<React.SetStateAction<string>>;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
};

function ReviewForm(props: Props) {
  const subjectRef = useRef<HTMLTextAreaElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const handleResizeSubjectHeight = useCallback(() => {
    if (subjectRef.current) {
      subjectRef.current.style.height = 'auto';
      subjectRef.current.style.height = subjectRef.current.scrollHeight + 'px';
    }
  }, []);

  const handleResizeContentHeight = useCallback(() => {
    if (contentRef.current) {
      contentRef.current.style.height = 'auto';
      contentRef.current.style.height = contentRef.current.scrollHeight + 'px';
    }
  }, []);

  return (
    <ReviewFormWrapper>
      <Subject
        value={props.subject}
        onChange={(e) => props.setSubject(e.target.value)}
        onInput={handleResizeSubjectHeight}
        ref={subjectRef}
        placeholder="리뷰 제목"
        rows={1}
      />
      <Content
        value={props.content}
        onChange={(e) => props.setContent(e.target.value)}
        ref={contentRef}
        onInput={handleResizeContentHeight}
        placeholder="영화리뷰를 작성해주세요"
      />
    </ReviewFormWrapper>
  );
}

const ReviewFormWrapper = styled.div`
  flex: auto;
  textarea::-webkit-scrollbar {
    display: none;
  }
`;

const Subject = styled.textarea`
  width: 100%;
  background: rgba(0, 0, 0, 0);
  padding: 18px 0 16px 0;

  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.24px;
  border: none;
  outline: none;
  resize: none;
  border-bottom: 1px solid var(--dark-border-border);

  color: var(--dark-grey-800);
  caret-color: var(--main);
`;

const Content = styled.textarea`
  width: 100%;

  background: rgba(0, 0, 0, 0);
  border: none;
  outline: none;
  resize: none;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.016px;

  color: var(--dark-grey-800);
  caret-color: var(--main);

  margin-top: 16px;
`;

export default ReviewForm;
