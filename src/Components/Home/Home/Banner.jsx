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
          <div data-aos="fade-left">
            <Lottie animationData={game1} loop={true} />
          </div>
          <div data-aos="fade-right">
            <h1 className="text-5xl font-bold capitalize">
              welcome to us <br /> game Toys Central
            </h1>
            <p className="py-6">
              If you think you want to show off and sell the most famous video
              game <br /> toys you have, you have come to the right place. So
              what is the delay, post your best video game toys now!
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
