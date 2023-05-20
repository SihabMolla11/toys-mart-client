import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyToysRwo from "./myToysRwo";
import { FcEmptyTrash } from "react-icons/fc";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myGames, setMyGames] = useState([]);
  const url = `http://localhost:5000/games/mydata?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyGames(data));
  }, [url]);

  console.log(myGames);

  const handelUpdateGame = (id) => {
    console.log(id);
  };

  const handelDEleteGame = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/games/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = myGames.filter((myGame) => myGame._id == id);
          setMyGames(remaining);
        }
      });
  };

  return (
    <div className="my-Container">
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>DELETE BUTTON</th>
              <th>image</th>
              <th>game name</th>
              <th>sub-category</th>
              <th>price</th>
              <th>quantity</th>
              <th>ratting</th>
              <th> description</th>
              <th>update button</th>
            </tr>
          </thead>
          <tbody>
            {myGames.map((myGame) => (
              <MyToysRwo
                key={myGame._id}
                myGame={myGame}
                handelUpdateGame={handelUpdateGame}
                handelDEleteGame={handelDEleteGame}
              ></MyToysRwo>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
