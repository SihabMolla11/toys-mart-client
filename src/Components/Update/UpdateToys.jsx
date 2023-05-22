import { FaRegHandPointRight } from "react-icons/fa";
import videoGame from "../../assets/game.jpg";
import { useContext, useRef, useState } from "react";
import Select from "react-select";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import useTitle from "../../hooks/useTitle";

const UpdateToys = () => {
  const [selectedOptionm, setSelectedOption] = useState(null);
  const { user } = useContext(AuthContext);
  const ratingRef = useRef(null);
  useTitle("Update Toys");

  const game = useLoaderData();

  const {
    _id,
    photo,
    toysName,
    price,
    name,
    rating,
    description,
    quantity,
    category,
  } = game;
  // console.log(name)
  const [uprating, setRating] = useState(rating);
  const options = [
    { value: "Toys Pc game", label: "Toys Pc game" },
    { value: "Toys for mubile game", label: "Toys for mubile game" },
    { value: "Toys virtual reality", label: "Toys virtual reality" },
    { value: "Toys for child video game", label: "Toys for child video game" },
  ];

  const handelUpdateToys = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const toysName = form.toysName.value;
    const name = form.name.value;
    const email = form.email.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const UpdateToys = {
      photo,
      toysName,
      name,
      description,
      email,
      price,
      rating,
      quantity,
    };
    UpdateToys.category = selectedOptionm;
    UpdateToys.rating = uprating;
    // console.log(UpdateToys);
    console.log(uprating);

    fetch(`https://assingment-11-sarver-sihabmolla11.vercel.app/toys/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(UpdateToys),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.matchedCount > 0) {
          Swal.fire("Successful", "Your post updated successfully", "success");
          form.reset();
        }
      });
  };

  return (
    <div className="my-Container my-6">
      <h2 className="my-6 text-[#4A3F5E] text-center flex items-center justify-center gap-6 text-5xl font-medium">
        <FaRegHandPointRight className="text-[#EBB943]" /> Update Your Toy
      </h2>
      <div>
        <div className="card card-compact w-full shadow-xl">
          <figure>
            <img src={videoGame} alt="Shoes" className="w-full" />
          </figure>
          <div className="card-body">
            <form onSubmit={handelUpdateToys} className="py-12 px-16">
              <div className="flex gap-10 mb-4">
                <div className="w-full">
                  <label className="label">
                    <span className="text-md font-medium">Photo url</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Photo url"
                    name="photo"
                    defaultValue={photo}
                    required
                    readOnly
                    className=" my-input "
                  />
                </div>
                <div className="w-full">
                  <label className="label">
                    <span className="text-md font-medium">Name of the Toy</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name of the Toys"
                    name="toysName"
                    defaultValue={toysName}
                    required
                    readOnly
                    className=" my-input "
                  />
                </div>
              </div>
              <div className="flex gap-10 mb-4">
                <div className="w-full">
                  <label className="label">
                    <span className="text-md font-medium">Seller name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="seller name"
                    name="name"
                    required
                    defaultValue={name}
                    className=" my-input"
                  />
                </div>
                <div className="w-full">
                  <label className="label">
                    <span className="text-md font-medium">Email</span>
                  </label>
                  <input
                    type="email"
                    defaultValue={user?.email}
                    placeholder="Email"
                    name="email"
                    readOnly
                    className="my-input "
                  />
                </div>
              </div>
              <div className="flex gap-10 mb-4">
                <div className="w-full">
                  <label className="label">
                    <span className="text-md font-medium">
                      Select Toy category
                    </span>
                  </label>
                  <Select
                    className="text-zinc-500"
                    value={selectedOptionm}
                    onChange={setSelectedOption}
                    required
                    defaultValue={category}
                    options={options}
                  />
                </div>
                <div className="w-full">
                  <label className="label">
                    <span className="text-md font-medium">Toy price</span>
                  </label>
                  <input
                    type="number"
                    placeholder="$ price of the Toy"
                    name="price"
                    defaultValue={price}
                    className="my-input "
                  />
                </div>
              </div>
              <div className="flex gap-10 mb-4">
                <div className="w-full">
                  <label className="label">
                    <span className="text-md font-medium">Toy rating</span>
                  </label>
                  <Rating
                    style={{ maxWidth: 180 }}
                    ref={ratingRef}
                    value={uprating}
                    onChange={setRating}
                  />
                </div>
                <div className="w-full">
                  <label className="label">
                    <span className="text-md font-medium">
                      Available quantity
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder="Available quantity"
                    name="quantity"
                    defaultValue={quantity}
                    className="my-input "
                  />
                </div>
              </div>
              <div className="w-full">
                <label className="label">
                  <span className="text-md font-medium">
                    Description of the Toy
                  </span>
                </label>
                <textarea
                  className="textarea textarea-bordered w-full h-40"
                  placeholder="Bio"
                  defaultValue={description}
                  name="description"
                ></textarea>
              </div>
              <input
                className="bg-green-500 cursor-pointer mt-8 text-white py-3 px-8 text-lg font-semibold rounded-md"
                type="submit"
                value="Update your Toy"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateToys;
