import styled from 'styled-components';
import BlogReviewSection from '../components/blog/BlogReviewSection.tsx';
import SettingIcon from '../components/blog/SettingIcon.tsx';
import Chip from '../components/common/Chip.tsx';
import Footer from '../components/common/Footer.tsx';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from '../api/apiController';

interface BlogInfo {
  title: string;
  genreList: string[];
}

function Blog() {
  const navigate = useNavigate();
  const [blogInfo, setBlogInfo] = useState<BlogInfo>();
  useEffect(function fetchMyPage() {
    const fetch = async () => {
      const {
        data: { title, genreList },
      } = await axios.get(`/my-page`);

      setBlogInfo({
        title,
        genreList,
      });
    };

    fetch();
  }, []);

  return (
    <BlogWrapper>
      <BlogInfoWrapper>
        <BlogInfo>
          <BlogTitle>{blogInfo?.title}</BlogTitle>
          <ChipWrapper>
            {blogInfo?.genreList.map((genre) => (
              <Chip
                props={{
                  text: genre,
                  deletable: false,
                }}
              />
            ))}
          </ChipWrapper>
        </BlogInfo>
        <IconWrapper onClick={() => navigate('/setting')}>
          <SettingIcon />
        </IconWrapper>
      </BlogInfoWrapper>
      <BlogReviewSection />
      <Footer />
    </BlogWrapper>
  );
}

const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: var(--dark-bg-default, #111213);
  max-width: 390px;
  height: 100vh;

  margin: 0 -20px;
  /* padding-top: 47px; // status bar */
`;

const BlogInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6px 16px;
  gap: 10px;
`;

const BlogTitle = styled.div`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  color: var(--dark-grey-800, #e4e4e5);
  /* position: relative; */
`;

const IconWrapper = styled.div`
  margin-right: 8px;
`;

const BlogInfoWrapper = styled.div`
  display: flex;
  position: sticky;
  top: 0px;
`;

const ChipWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

export default Blog;
