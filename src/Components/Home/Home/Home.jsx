import Banner from "./Banner";
import Gallery from "./Gallery";

const Home = () => {
    return (
        <div>
            <div className="banner">
            <Banner></Banner>
            </div>
            <div className="gallery">
                    <Gallery></Gallery>
            </div>
        </div>
    );
};

export default Home;