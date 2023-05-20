import { FaRegHandPointRight } from "react-icons/fa";
import videoGame from "../../assets/game.jpg";
import { useContext, useState } from "react";
import Select from "react-select";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const UpdateToys = () => {
  const [selectedOptionm, setSelectedOption] = useState(null);
  const { user } = useContext(AuthContext);

  const game = useLoaderData();

  const {
    _id,
    rating,
    description,
    photo,
    gameName,
    price,
    quantity,
    category,
  } = game;
  // console.log(name)

  const options = [
    { value: "Car", label: "Car" },
    { value: "Cricket", label: "Cricket" },
    { value: "Table Tannins", label: "Table Tannins" },
    { value: "Army shooting", label: "Army shooting" },
    { value: "Battle Royale", label: "Battle Royale" },
    { value: "Fight", label: "Fight" },
  ];

  const handelUpdateToys = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const gameName = form.GameName.value;
    const name = form.name.value;
    const email = form.email.value;
    const price = form.price.value;
    const rating = form.raging.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const updateGame = {
      photo,
      gameName,
      name,
      email,
      price,
      rating,
      quantity,
      description,
    };
    updateGame.category = selectedOptionm;
    // console.log(updateGame);

    fetch(`http://localhost:5000/toys/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateGame),
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
        <FaRegHandPointRight className="text-[#EBB943]" /> post your video game
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
                    readOnly
                    className=" my-input "
                  />
                </div>
                <div className="w-full">
                  <label className="label">
                    <span className="text-md font-medium">
                      Name of the game
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="name of the game"
                    name="GameName"
                    defaultValue={gameName}
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
                      Select Game category
                    </span>
                  </label>
                  <Select
                    className="text-zinc-500"
                    defaultValue={selectedOptionm}
                    onChange={setSelectedOption}
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
                  <input
                    type="number"
                    placeholder="rating of the game"
                    name="raging"
                    defaultValue={rating}
                    className=" my-input"
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
                <input
                  type="text"
                  placeholder="description of the game"
                  name="description"
                  defaultValue={description}
                  className="my-input "
                />
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
