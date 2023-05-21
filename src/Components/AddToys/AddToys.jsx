import { FaRegHandPointRight } from "react-icons/fa";
import videoGametoys from "../../assets/game.jpg";
import { useContext, useRef, useState } from "react";
import Select from "react-select";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import useTitle from "../../hooks/useTitle";

const AddToys = () => {
  const [selectedOptionm, setSelectedOption] = useState(null);

  const { user } = useContext(AuthContext);
  useTitle("Add Toys");

  const ratingRef = useRef(null);
  const [rating, setRating] = useState(0);

  const options = [
    { value: "Toys Pc game", label: "Toys Pc game" },
    { value: "Toys for mubile game", label: "Toys for mubile game" },
    { value: "Toys virtual reality", label: "Toys virtual reality" },
    { value: "Toys for child video game", label: "Toys for child video game" },
  ];

  const handelAddToys = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const toysName = form.toysName.value;
    const name = form.name.value;
    const email = form.email.value;
    const price = form.price.value;
    // const rating = form.raging.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const newToys = {
      photo,
      toysName,
      name,
      email,
      price,
      rating,
      quantity,
      description,
    };
    newToys.category = selectedOptionm;
    newToys.rating = rating;
    // console.log(newToys);

    fetch("http://localhost:5000/toys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newToys),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire(" successful", "Your new Toy added successful", "success");
          form.reset();
        }
      });
  };

  return (
    <div className="my-Container my-6">
      <h2 className="my-6 text-[#4A3F5E] text-center flex items-center justify-center gap-6 text-5xl font-medium">
        <FaRegHandPointRight className="text-[#EBB943]" /> Post Your New Toys
      </h2>
      <div>
        <div className="card card-compact w-full shadow-xl">
          <figure>
            <img src={videoGametoys} alt="Shoes" className="w-full" />
          </figure>
          <div className="card-body">
            <form onSubmit={handelAddToys} className=" px-16">
              <div className="flex gap-10 mb-4">
                <div className="w-full">
                  <label className="label">
                    <span className="text-md font-medium">Photo url</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Photo url"
                    name="photo"
                    className=" my-input "
                    required
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
                    className=" my-input "
                    required
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
                    defaultValue={user?.displayName}
                    className=" my-input"
                    required
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
                    defaultValue={selectedOptionm}
                    onChange={setSelectedOption}
                    options={options}
                    required
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
                    className="my-input "
                    required
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
                    required
                    className="my-input "
                  />
                </div>
              </div>
              <div className="w-full">
                <label className="label">
                  <span className="text-md font-medium">
                    Description of the Toys
                  </span>
                </label>
                <textarea
                  className="textarea textarea-bordered w-full h-40"
                  placeholder="Bio"
                  name="description"
                ></textarea>
              </div>
              <input
                className="bg-green-500 mt-8 cursor-pointer text-white py-3 px-8 text-lg font-semibold rounded-md"
                type="submit"
                value="Post your Toy"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToys;
