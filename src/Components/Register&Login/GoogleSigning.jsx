import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GoogleSigning = () => {
  const { googleSigning } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handelGoogleSigning = () => {
    googleSigning()
      .then((result) => {
        const loggingUser = result.user;
        console.log(loggingUser);
        toast.success("Your successfully login", {
          position: "top-center",
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <button
        onClick={handelGoogleSigning}
        className="flex text-2xl items-center border-solid border-2 border-blue-500 px-4 py-3 mt-6 w-full rounded-lg text-blue-500 hover:bg-blue-500 hover:text-white gap-4"
      >
        <FcGoogle /> <span>Sign in with google</span>
        <ToastContainer />
      </button>
      <p className="text-red-500">{error}</p>
    </div>
  );
};

export default GoogleSigning;
