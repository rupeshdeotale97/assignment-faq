import Layout from '../components/layout';
import SearchBar from '../components/forms/searchBar';
import Grids from '../components/forms/grids/grids';
import { useRouter } from 'next/router'
import updatePageView from '../utils/updatePageView'
function App() {
  const router = useRouter();
  const goTo = (path) => {
    console.log("called");
    router.push(path);
  }
  return (
    <Layout>
        <SearchBar />
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
