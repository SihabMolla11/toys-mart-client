import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyToysRwo from "./myToysRwo";
import { FcEmptyTrash } from "react-icons/fc";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myGames, setMyGames] = useState([]);
  const url = `http://localhost:5000/toys-mydata?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyGames(data));
  }, [url]);

  //   console.log(myGames);



  const handelDEleteGame = (id) => {
    // console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        fetch(`http://localhost:5000/toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = myGames.filter((myGame) => myGame._id !== id);
              setMyGames(remaining);
            }
          });
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
