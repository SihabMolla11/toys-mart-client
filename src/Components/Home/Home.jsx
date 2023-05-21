import Banner from "./Home/Banner";
import Carousel from "./Home/Carousel";
import Gallery from "./Home/Gallery";
import ShopByCategory from "./Home/ShopByCategory";
import UseInfo from "./Home/UseInfo";

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
      <div>
        <Carousel></Carousel>
      </div>
      <div>
        <UseInfo></UseInfo>
      </div>
    </div>
  );
};

export default Home;
