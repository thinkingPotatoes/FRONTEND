import Blog from '../pages/Blog.tsx';
import Home from '../pages/Home.tsx';
import MovieSearch from '../pages/MovieSearch.tsx';
import MovieSearchPlot from '../pages/MovieSearchPlot.tsx';

import PostReview from '../pages/PostReview.tsx';
import PostReviewOption from '../pages/PostReviewOption.tsx';
import PostReviewRequired from '../pages/PostReviewRequired.tsx';
import SearchPage from '../pages/SearchPage.tsx';
import SelectMovie from '../pages/SelectMovie.tsx';

import ReviewDetail from '../pages/ReviewDetail.tsx';
import ReviewDetailComment from '../pages/ReviewDetailComment.tsx';

import Setting from '../pages/Setting-page/Setting.tsx';
import MyInfo from '../pages/Setting-page/MyInfo.tsx';
import ServiceInfo from '../pages/Setting-page/ServiceInfo.tsx';
import PrivateInfo from '../pages/Setting-page/PrivateInfo.tsx';
import OpensourceInfo from '../pages/Setting-page/OpensouceInfo.tsx';
import NewIssue from '../pages/Setting-page/NewIssue.tsx';

export const commonRouter = [
  { path: '/', element: <Home /> },

  { path: '/search', element: <SearchPage /> },
  { path: '/moviesearch/:id', element: <MovieSearch /> },
  { path: '/moviesearch/:id/plot', element: <MovieSearchPlot /> },
  { path: '/review/:id', element: <ReviewDetail /> },
  { path: '/review/:id/comment', element: <ReviewDetailComment /> },

  // 테스트 위해 임시 추가
  { path: '/blog', element: <Blog /> },
  { path: '/postreview', element: <SelectMovie /> },
  { path: '/postreview/:id', element: <PostReview /> },
  { path: '/postreview/:id/required', element: <PostReviewRequired /> },
  { path: '/postreview/:id/option', element: <PostReviewOption /> },

  { path: '/setting', element: <Setting /> },
  { path: '/setting-info', element: <MyInfo /> },
  { path: '/setting/service-info', element: <ServiceInfo /> },
  { path: '/setting/private-info', element: <PrivateInfo /> },
  { path: '/setting/opensource-info', element: <OpensourceInfo /> },
  { path: '/setting/issue-info', element: <NewIssue /> },
];

export const publicRouter = [];

export const privateRouter = [
  { path: '/blog', element: <Blog /> },
  { path: '/postreview', element: <SelectMovie /> },
  { path: '/postreview/:id', element: <PostReview /> },
  { path: '/postreview/:id/required', element: <PostReviewRequired /> },
  { path: '/postreview/:id/option', element: <PostReviewOption /> },
];
