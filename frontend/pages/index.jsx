import React, { useEffect} from 'react';
import Layout from '../components/layout';
import SearchBar from '../components/forms/searchBar';
import Grids from '../components/forms/grids/grids';
import PageView from '../components/PageView';
function App({slug}) {
  useEffect(() => {
    fetch(`/api/views/${slug}`, {
      method: 'POST'
    });
  }, [slug]);
  return (
    <Layout>
        <h1>{slug}</h1>
        <h2 className="text-center mb-5" data-testid="heading">
          Help Center
        </h2>
        <SearchBar searchUpdate={() => {}} />
        <Grids />
        <PageView slug={slug} />
    </Layout>
  );
};

// This function gets called at build time
export async function getServerSideProps() {
  return {
    props: {
      slug:'home'
    }
  }
}

export default App;
