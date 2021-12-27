import useSWR from 'swr';
import { pageViewWrapper } from './pageView.module.css';
const fetcher = async (input) => {
  const res = await fetch(input);
  return await res.json();
};

const PageView = ({ slug }) => {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);

  return <div className={pageViewWrapper}>{data?.total ? `${data.total} views` : `---`}</div>;
};

export default PageView;