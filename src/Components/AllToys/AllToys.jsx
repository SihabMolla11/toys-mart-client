import { useLoaderData } from "react-router-dom";
import ToysTable from "./ToysTable";

const AllToys = () => {
  const games = useLoaderData();

  return (
    <div className="my-Container mt-10">
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
              <th className="text-center border-x-2 border-[#ffffff]">quantity</th>
              <th className="border-x-2 border-[#ffffff]">view detail</th>
            </tr>
          </thead>
          <tbody>
            {games.map((game) => (
              <ToysTable key={game._id} game={game}></ToysTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
