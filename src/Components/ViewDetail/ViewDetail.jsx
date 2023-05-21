import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import { FcApproval } from "react-icons/fc";

import "@smastrom/react-rating/style.css";
import useTitle from "../../hooks/useTitle";

const ViewDetail = () => {
  useTitle("Toys Detail");

  const toy = useLoaderData();
  console.log(toy);
  const {
    photo,
    name,
    toysName,
    email,
    price,
    rating,
    quantity,
    description,
    category,
  } = toy || {};

  return (
    <div className="my-Container mt-10">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col gap-10 lg:flex-row">
          <img src={photo} className="w-[50%] rounded-lg shadow-2xl" />
          <div className="w-[50%]">
            <h1 className="text-5xl font-bold text-[#241d3a]">{toysName}</h1>
            <p className="text-3xl mt-3 font-semibold">
              Category: {category?.value}
            </p>
            <div className="my-5 ">
              <p className="text-xl font-semibold">Seller Name: {name}</p>
              <p className="mt-3 text-xl">
                User Contract email:{" "}
                <span className="text-blue-600 underline">{email}</span>
              </p>

              <p className="mt-3">
                toy price:{" "}
                <span className="text-[#f5a002] text-xl font-bold">
                  {"$" + price}
                </span>
              </p>
              <p className="text-normal flex mt-3 gap-4 ">
                Toys rating:{" "}
                <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
              </p>

              <p className="mt-3 text-lg flex items-center gap-2">
                Available quantity: {quantity}
                <FcApproval className="text-2xl" />
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <h3 className="text-3xl mt-8 mb-4 font-semibold">
        {toysName} description:-{" "}
      </h3>
      <p>{description}</p>
    </div>
  );
};

export default ViewDetail;
