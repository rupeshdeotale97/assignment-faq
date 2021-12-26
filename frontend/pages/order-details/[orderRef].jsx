import React, { useState } from 'react'
import { useRouter } from 'next/router'
import API_URL from '../../constants/costants'
import updatePageView from '../../utils/updatePageView'
import Layout from '../../components/layout';
import SearchBar from '../../components/forms/searchBar';
import CardDetails from '../../components/forms/cards/cards';

function OrderDetails({ orders }) {
  const router = useRouter()
  const { orderRef } = router.query
  const orderDetails = orders.find(order => order.reference === orderRef)
  const [searchInput, setSearchInput] = useState(orderRef)

  const onSearch = () => {
    router.push(`${searchInput}`)
  }

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
    </Layout>
  );
};

// This function gets called at build time
export async function getServerSideProps() {
  // Storing page view on any route render
  await updatePageView('order-details')
  // Call an external API endpoint to get posts
  const res = await fetch(`${API_URL}/orders`)
  const orders = await res.json();

  return {
    props: {
      orders
    }
  }
}


export default OrderDetails;