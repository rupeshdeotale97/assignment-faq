import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import API_URL from '../../config';
import Layout from '../../components/layout';
import SearchBar from '../../components/forms/searchBar';
import CardDetails from '../../components/forms/cards/cards';
import PageView from '../../components/PageView';
function OrderDetails({ orders, slug }) {
  const router = useRouter()
  const { orderRef } = router.query
  const orderDetails = orders.find(order => order.reference === orderRef)
  const [searchInput, setSearchInput] = useState(orderRef)

  const onSearch = () => {
    router.push(`${searchInput}`)
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
        searchId={"order-search"}
        submitId={"search-button"}
      />

      {orderDetails && orderDetails ? (
        <div data-testid="order"><CardDetails cardInfo={orderDetails}  /></div>
      ) : (
        <p className="text-center mt-4 h4">Cannot find order</p>
      )}
      <PageView slug={slug} />
    </Layout>
  );
};

// This function gets called at build time
export async function getServerSideProps() {
  // Call an external API endpoint to get posts
  const res = await fetch(`${API_URL}/orders`)
  const orders = await res.json();

  return {
    props: {
      orders,
      slug: 'order-details-results'
    }
  }
}


export default OrderDetails;