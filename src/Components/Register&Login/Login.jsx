import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="my-Container my-8">
      <div className="w-[50%] mx-auto rounded-lg p-20 bg-[#77667f57]">
        <h2 className="mb-8 text-4xl font-bold text-gray-700">
          Login your Account
        </h2>
        <form>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="text"
              placeholder="info@site.com"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="text"
              placeholder="info@site.com"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <input
              className="w-full py-3 rounded-md text-white font-medium text-xl bg-blue-500 outline-0"
              type="submit"
              value="Login"
            />
          </div>
        </form>
        <div>
          <p className="mt-8">
            if you are now in this website so register first:{" "}
            <Link className="text-red-700 underline" to="/register">
              register
            </Link>
          </p>
          <button className="flex text-2xl items-center border-solid border-2 border-blue-500 px-4 py-3 mt-6 w-full rounded-lg font-semibold text-blue-500 hover:bg-blue-500 hover:text-white gap-4">
            <FaGoogle /> <span>Sign in with google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;