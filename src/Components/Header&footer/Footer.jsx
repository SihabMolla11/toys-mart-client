import { useContext } from "react";
import logo from "../../assets/footerlog.png";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className=" bg-gradient-to-r from-[#020838] to-[#2C0B02] rounded-tl-[200px]">
      <div className="my-Container pl-20 justify-center md:justify-start  gap-20 md:p-10 grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 text-white">
        <div className="">
          <img src={logo} alt="" />
        </div>
        <div>
          <h3 className="text-2xl font-medium mb-4">Website menubar: </h3>
          <ul className="grid gap-1 text-lg ">
            <li className=" my-menuItem">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="my-menuItem">
              <NavLink to="/alltoys">All Toys</NavLink>
            </li>
            {user && (
              <li className="my-menuItem">
                <NavLink to="/mytoys">My Toys</NavLink>
              </li>
            )}
            {user && (
              <li className="my-menuItem">
                <NavLink to="/addToys">Add A Toy</NavLink>
              </li>
            )}
            <li className="my-menuItem">
              <NavLink to="/blog">Blogs</NavLink>
            </li>
            <li className="my-menuItem">
              {!user && <NavLink to="/register">Register</NavLink>}
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-medium  mb-4 flex items-center">
            <FaMapMarkerAlt className="text-green-500" /> Location:{" "}
          </h3>
          <p className=" space-y-4">
            Dhaka, Bangladesh, <br /> GopalGanj, Suktail, <br /> Charsuktail
          </p>
          <progress className="progress w-full mt-20"></progress>
        </div>
        <div>
          <h3 className="text-2xl font-medium  mb-4 "> Contract section:</h3>
          <p className="text-md">
            <span className="flex items-center gap-4">
              <FaPhoneAlt className="text-xl text-green-500" /> Contract number:
            </span>{" "}
            <span className="ml-9">+8801234567890</span>
          </p>
          <p className="text-md">
            <span className="flex items-center gap-4">
              <FaEnvelope className="text-xl text-blue-500" /> Contract Email:
            </span>{" "}
            <span className=" underline text-blue-600 cursor-pointer ml-10">
              sihabmolla@10gmail.com
            </span>
          </p>
          <div className="flex items-center gap-8 mt-4 text-blue-500 justify-center">
            <Link
              to="https://www.facebook.com"
              className="p-2 bg-white rounded-full"
            >
              <FaFacebook className="text-4xl" />
            </Link>
            <Link
              to="https://twitter.com"
              className="p-2 bg-white rounded-full"
            >
              <FaTwitter className="text-4xl" />
            </Link>
            <Link
              to="https://bd.linkedin.com"
              className="p-2 bg-white rounded-full"
            >
              <FaLinkedinIn className="text-4xl" />
            </Link>
          </div>
        </div>
      </div>
      <div className="my-Container my-4">
        <hr />
      </div>
      <div className="py-4 text-white text-center">
        <small>All Coy Rite from@sihabMolla</small>
      </div>
    </div>
  );
};

export default Footer;
