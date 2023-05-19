import Lottie from "lottie-react";
import game1 from "../../../assets/banner/1stgame.json";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
const Banner = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="my-Container hero-content flex-col lg:flex-row-reverse">
          <Lottie animationData={game1} loop={true} />
          <div>
            <h1 className="text-5xl font-bold capitalize">
              welcome to us <br />
              GameWorld Central
            </h1>
            <p className="py-6">
              Your ultimate destination for all things gaming.If you are looking
              <br /> for a place where your game collections will be. Through
              which you can sell and buy video games. Then you have come to the
              right place,
            </p>
            {user ? (
              <button className="my-btn">
                <Link to="/addToys">Get Started</Link>
              </button>
            ) : (
              <button className="my-btn">
                <Link to="/login">Get Started</Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
