import Banner from "./Home/Banner";
import Gallery from "./Home/Gallery";
import ShopByCategory from "./Home/ShopByCategory";

const Home = () => {
  return (
    <div>
      <div className="banner">
        <Banner></Banner>
      </div>
      <div className="gallery">
        <Gallery></Gallery>
      </div>
      <div>
        <ShopByCategory></ShopByCategory>
      </div>
    </div>
  );
};

export default Home;
