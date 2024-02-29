import Navbar from "../features/navbar/Navbar";
import ProductList from "../features/productList/components/ProductList";

const Home = () => {
  return (
    <div>
      <Navbar>
        <ProductList />
      </Navbar>
    </div>
  );
};

export default Home;
