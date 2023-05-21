import { Link, useNavigate } from "react-router-dom";
import GoogleSigning from "./GoogleSigning";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTitle from "../../hooks/useTitle";

const Register = () => {
  const [error, setError] = useState("");
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();
  useTitle("Register");

  const handelRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    if (password.length <= 7) {
      setError("Password add at least 8 characters");
      return;
    }

    register(email, password)
      .then((result) => {
        const loggingUser = result.user;
        console.log(loggingUser);
        toast.success("Register successful", {
          position: "top-center",
        });
        form.reset();
        setError("");
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <div className="my-Container my-8">
        <div className="w-[50%] mx-auto rounded-lg p-20 bg-[#77667f57]">
          <h2 className="mb-8 text-4xl font-bold text-gray-700">
            Please Register
          </h2>
          <form onSubmit={handelRegister}>
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="please set your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Your Photo Url</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="submit your photo url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="input your Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Set Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="set password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-4">
              <input
                className="w-full py-3 cursor-pointer rounded-md text-white font-medium text-xl bg-blue-500 outline-0"
                type="submit"
                value="Register"
              />
              <ToastContainer />
            </div>
          </form>
          <p className="mt-2 text-red-600">{error}</p>
          <div>
            <p className="mt-8">
              if you have already an Account so please ?{" "}
              <Link className="text-red-700 underline" to="/login">
                Login
              </Link>
            </p>
            <GoogleSigning></GoogleSigning>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
