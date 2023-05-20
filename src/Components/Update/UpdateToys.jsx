import { FaRegHandPointRight } from "react-icons/fa";
import videoGame from "../../assets/game.jpg";
import { useContext, useRef, useState } from "react";
import Select from "react-select";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const UpdateToys = () => {
  const [selectedOptionm, setSelectedOption] = useState(null);
  const { user } = useContext(AuthContext);
  const ratingRef = useRef(null);
  const [rating, setRating] = useState(0);

  const game = useLoaderData();

  const { _id, photo, toysName, price, quantity, category } = game;
  // console.log(name)

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
    UpdateToys.rating = rating;
    // console.log(UpdateToys);

    fetch(`http://localhost:5000/toys/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(UpdateToys),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.matchedCount > 0) {
          Swal.fire(
            "game post successfully",
            "Your new video game added successful",
            "success"
          );
          form.reset();
        }
      });
  };

  return (
    <div className="my-Container my-6">
      <h2 className="my-6 text-[#4A3F5E] text-center flex items-center justify-center gap-6 text-5xl font-medium">
        <FaRegHandPointRight className="text-[#EBB943]" /> Update Your Toys
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
                    <span className="text-md font-medium">
                      Name of the Toys
                    </span>
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
                    readOnly
                    defaultValue={user?.displayName}
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
                      Select Toys category
                    </span>
                  </label>
                  <Select
                    className="text-zinc-500"
                    defaultValue={selectedOptionm}
                    onChange={setSelectedOption}
                    required
                    defaultValue={category}
                    options={options}
                  />
                </div>
                <div className="w-full">
                  <label className="label">
                    <span className="text-md font-medium">Game price</span>
                  </label>
                  <input
                    type="number"
                    placeholder="$ price of the game"
                    name="price"
                    defaultValue={price}
                    className="my-input "
                  />
                </div>
              </div>
              <div className="flex gap-10 mb-4">
                <div className="w-full">
                  <label className="label">
                    <span className="text-md font-medium">Game rating</span>
                  </label>
                  {/* <input
                    type="number"
                    placeholder="rating of the game"
                    name="raging"
                    defaultValue={rating}
                    className=" my-input"
                  /> */}
                  <Rating
                    style={{ maxWidth: 180 }}
                    ref={ratingRef}
                    value={rating}
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
                    Description of the game
                  </span>
                </label>
                {/* <input
                  type="text"
                  placeholder="description of the game"
                  name="description"
                  defaultValue={description}
                  className="my-input "
                /> */}
                <textarea
                  className="textarea textarea-bordered w-full h-40"
                  placeholder="Bio"
                  // defaultValue={description}
                  name="description"
                ></textarea>
              </div>
              <input
                className="bg-green-500 mt-8 text-white py-3 px-8 text-lg font-semibold rounded-md"
                type="submit"
                value="Update your game"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateToys;
