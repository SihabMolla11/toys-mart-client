import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  const { user, logOut, loading } = useContext(AuthContext);

  const handelLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="bg-blue-50">
      <div className="my-Container navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className=" font-medium  menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-96"
            >
              <li className=" my-menuItem">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="my-menuItem">
                <NavLink to="/alltoys">All Toys</NavLink>
              </li>
              <li className="my-menuItem">
                <NavLink to="/mytoys">My Toys</NavLink>
              </li>
              <li className="my-menuItem">
                <NavLink to="/addToys">Add A Toy</NavLink>
              </li>
              <li className="my-menuItem">
                <NavLink to="/blog">Blogs</NavLink>
              </li>
              <li className="my-menuItem">
                {!user && <NavLink to="/register">Register</NavLink>}
              </li>
            </ul>
          </div>
          <Link to="/" className="flex items-center gap-8">
            <img className="w-28" src={logo} alt="" />
            <p className="text-2xl font-bold hidden md:block">
              Video game mart
            </p>
          </Link>
        </div>
        <div className="hidden text-md lg:flex">
          <ul className="gap-8 ml-4  font-semibold menu-horizontal px-1">
            <li className="my-menuItem">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="my-menuItem">
              <NavLink to="/alltoys">All Toys</NavLink>
            </li>
            <li className="my-menuItem">
              <NavLink to="/mytoys">My Toys</NavLink>
            </li>
            <li className="my-menuItem">
              <NavLink to="/addToys">Add A Toy</NavLink>
            </li>
            <li className="my-menuItem">
              <NavLink to="/blog">Blogs</NavLink>
            </li>
            <li className="my-menuItem">
              {!user && <NavLink to="/register">Register</NavLink>}
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-8">
          {user ? (
            <button onClick={handelLogOut} className="my-btn ">
              Log Out
            </button>
          ) : (
            <Link to="/login" className="my-btn ">
              {loading ? (
                <div
                  className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-gray-400 rounded-full"
                  role="status"
                  aria-label="loading"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <p>Login</p>
              )}
            </Link>
          )}
          <div>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-22 rounded-full">
                {user ? (
                  <img title={user?.displayName} src={user.photoURL} />
                ) : (
                  <div title="please login First" className="text-5xl">
                    <FaRegUserCircle />
                  </div>
                )}
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
