// import { useLoaderData } from "react-router-dom";
import ToysTable from "./ToysTable";
import { useEffect, useState } from "react";

const AllToys = () => {
  // const toys = useLoaderData();

  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const [serchText, setSearchText] = useState("");

  const handelSearch = (event) => {
    event.preventDefault();
    fetch(`http://localhost:5000/toysSearch/${serchText}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  };

  return (
    <div className="my-Container mt-10">
      <div className="text-end">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          className="mb-6 p-3 outline-none rounded-s-lg w-full max-w-xs"
        />
        <button
          onClick={handelSearch}
          className="text-md hover:bg-green-600 border-0  text-white rounded-e-lg font-semibold  bg-green-400 p-3 "
        >
          search toys
        </button>
      </div>

      <div className="overflow-x-auto rounded-t-lg w-full">
        <table className="table w-full  ">
          {/* head */}
          <thead className=" border-t-2 rounded-lg border-[#ffffff]">
            <tr>
              <th className="border-x-2 border-[#ffffff]">Image</th>
              <th className="border-x-2 border-[#ffffff]">NAME OF GAME</th>
              <th className="border-x-2 border-[#ffffff]">category</th>
              <th className="border-x-2 border-[#ffffff]">seller name</th>
              <th className="text-center border-x-2 border-[#ffffff]">price</th>
              <th className="text-center border-x-2 border-[#ffffff]">
                quantity
              </th>
              <th className="border-x-2 border-[#ffffff]">view detail</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <ToysTable key={toy._id} toy={toy}></ToysTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
