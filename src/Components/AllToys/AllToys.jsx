import { useLoaderData } from "react-router-dom";
import ToysTable from "./ToysTable";

const AllToys = () => {
  const games = useLoaderData();

  return (
    <div className="my-Container">
      <div className="overflow-x-auto w-full">
        <table className="table w-full ">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>NAME OF GAME</th>
              <th>category</th>
              <th>seller name</th>
              <th>price</th>
              <th>quantity</th>
              <th>view detail</th>
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
