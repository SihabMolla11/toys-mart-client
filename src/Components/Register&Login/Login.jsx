import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import GoogleSigning from "./GoogleSigning";

const Login = () => {
  const [error, setError] = "";
  const { loginUser } = useContext(AuthContext);

  const handelLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        const loggingUser = result.user;
        console.log(loggingUser);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="my-Container my-8">
      <div className="w-[50%] mx-auto rounded-lg p-20 bg-[#77667f57]">
        <h2 className="mb-8 text-4xl font-bold text-gray-700">
          Login your Account
        </h2>
        <form onSubmit={handelLogin}>
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="email"
              placeholder="type your email"
              name="email"
              required
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="write your password"
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
        <p className="mt-2 text-red-600">{error}</p>
        <div>
          <p className="mt-8">
            if you are now in this website so please ?{" "}
            <Link className="text-red-700 underline" to="/register">
              register
            </Link>
          </p>
          <GoogleSigning></GoogleSigning>
        </div>
      </div>
    </div>
  );
};

export default Login;
