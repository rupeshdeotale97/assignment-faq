import Layout from '../components/layout';
import SearchBar from '../components/forms/searchBar';
import Grids from '../components/forms/grids/grids';
import updatePageView from '../utils/updatePageView'
function App() {
  return (
    <Layout>
        <h2 className="text-center mb-5" data-testid="heading">
          Help Center
        </h2>
        <SearchBar searchUpdate={() => {}} />
        <Grids />
    </Layout>
  );
};

// This function gets called at build time
export async function getServerSideProps() {
  // Storing page view on any route render
  await updatePageView('home')
  return {
    props: {}
  }
}

export default App;
