import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/layout';
import SearchBar  from '../../components/forms/searchBar';
import PageView from '../../components/pageView';
function OrderDetailsSearch({slug}) {
  const router = useRouter()

  const [searchInput, setSearchInput] = useState('')

  const onSearch = () => {
    router.push(`/order-details/${searchInput}`)
  }

  useEffect(() => {
    fetch(`/api/views/${slug}`, {
      method: 'POST'
    });
  }, [slug]);

  return (
    <Layout>
      <h2 className="text-center" data-testid="heading">
        Order Details
      </h2>
      
      <SearchBar
        className="mt-4"
        searchInput={searchInput}
        searchUpdate={setSearchInput}
        onSearch={onSearch}
        searchId={'search-input'}
        submitId={'submit'}
      />
      <PageView slug={slug} />
    </Layout>
  );
};

// This function gets called at build time
export async function getServerSideProps() {
  return {
    props: {
      slug: 'order-details'
    }
  }
}

export default OrderDetailsSearch;