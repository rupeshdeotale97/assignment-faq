import Layout from '../components/layout';
import SearchBar from '../components/forms/searchBar';
import Cards from '../components/forms/cards/cards';
export default function App() {
  return (
    <Layout>
        <SearchBar />
        <Cards />
    </Layout>
  );
};
