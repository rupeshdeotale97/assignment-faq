import useSWR from 'swr';

const fetcher = async (input) => {
  const res = await fetch(input);
  return await res.json();
};

const PageView = ({ slug }) => {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);

  return <div style={{textAlign:'center'}}>{data?.total ? `${data.total} views` : `---`}</div>;
};

export default PageView;