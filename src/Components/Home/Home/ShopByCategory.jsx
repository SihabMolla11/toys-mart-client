import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Rating } from "@smastrom/react-rating";
import { FaArrowRight } from "react-icons/fa";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
const ShopByCategory = () => {
  const [activeToyas, setActiveToys] = useState("Toys Pc game");

  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("https://assingment-11-sarver-sihabmolla11.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  //   console.log(toys);

  const ctoys = toys.filter((toy) => toy?.category?.value == activeToyas);
  console.log(ctoys);
  const handelactiveToyas = (category) => {
    setActiveToys(category);
  };

  return (
    <div className="my-Container mb-40" data-aos="fade-in">
      <h2 className="text-4xl">Shop by category section</h2>

      <div className="text-center mt-10">
        <Tabs className="">
          <TabList className="bg-red-400 rounded-t-[30px] font-medium text-white">
            <Tab onClick={() => handelactiveToyas("Toys Pc game")}>
              <div
                className={`${
                  activeToyas == "Toys Pc game" ? "text-red-500 px-4 py-4 " : ""
                }`}
              >
                Toys Pc game
              </div>
            </Tab>
            <Tab onClick={() => handelactiveToyas("Toys for mubile game")}>
              <div
                className={`${
                  activeToyas == "Toys for mubile game"
                    ? "text-red-500 px-4 py-4"
                    : ""
                }`}
              >
                Toys for mubile
              </div>
            </Tab>
            <Tab onClick={() => handelactiveToyas("Toys for child video game")}>
              <div
                className={`${
                  activeToyas == "Toys for child video game"
                    ? " px-4 py-4 text-red-500"
                    : ""
                }`}
              >
                Toys for child video game
              </div>
            </Tab>
          </TabList>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 mt-8">
              {ctoys.slice(0, 3).map((ctoy) => (
                <div key={ctoy._id}>
                  <div className="card h-full card-compact w-full bg-base-100 shadow-xl">
                    <figure>
                      <img
                        className="h-[350px] w-full"
                        src={ctoy.photo}
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body text-start">
                      <h2 className="card-title text-2xl font-medium">
                        {ctoy.toysName}
                      </h2>
                      <p className="text-lg text-orange-500">
                        Price:{" "}
                        <span className=" font-medium">${ctoy.price}</span>
                      </p>
                      <p className="flex items-center gap-2 text-lg font-semibold">
                        Rating:
                        <Rating
                          style={{ maxWidth: 100 }}
                          value={ctoy?.rating}
                          readOnly
                        />
                      </p>
                      <div className="card-actions justify-end">
                        <Link to={`/toy-detail/${ctoy._id}`}>
                          <button className="my-btn flex items-center gap-4">
                            <span>View Detail</span> <FaArrowRight />{" "}
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-3  gap-4 mt-8">
              {ctoys.slice(0, 3).map((ctoy) => (
                <div key={ctoy._id}>
                  <div className="card h-full card-compact w-full bg-base-100 shadow-xl">
                    <figure>
                      <img
                        className="h-[350px] w-full"
                        src={ctoy.photo}
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body text-start">
                      <h2 className="card-title text-2xl font-medium">
                        {ctoy.toysName}
                      </h2>
                      <p className="text-lg text-orange-500">
                        Price:{" "}
                        <span className=" font-medium">${ctoy.price}</span>
                      </p>
                      <p className="flex items-center gap-2 text-lg font-semibold">
                        Rating:
                        <Rating
                          style={{ maxWidth: 100 }}
                          value={ctoy?.Rating}
                          readOnly
                        />
                      </p>
                      <div className="card-actions justify-end">
                        <Link to={`/toy-detail/${ctoy?._id}`}>
                          <button className="my-btn flex gap-2 items-center">
                            View Detail <FaArrowRight />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-3  gap-4 mt-8">
              {ctoys.slice(0, 3).map((ctoy) => (
                <div key={ctoy._id}>
                  <div className="card h-full card-compact w-full bg-base-100 shadow-xl">
                    <figure>
                      <img
                        className="h-[350px] w-full"
                        src={ctoy.photo}
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body text-start">
                      <h2 className="card-title text-2xl font-medium">
                        {ctoy.toysName}
                      </h2>
                      <p className="text-lg text-orange-500">
                        Price:{" "}
                        <span className=" font-medium">${ctoy.price}</span>
                      </p>
                      <p className="flex items-center gap-2 text-lg font-semibold">
                        Rating:
                        <Rating
                          style={{ maxWidth: 100 }}
                          value={ctoy.Rating}
                          readOnly
                        />
                      </p>
                      <div className="card-actions justify-end">
                        <Link to={`/toy-detail/${ctoy?._id}`}>
                          <button className="my-btn flex gap-2 items-center">
                            View Detail <FaArrowRight />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopByCategory;
