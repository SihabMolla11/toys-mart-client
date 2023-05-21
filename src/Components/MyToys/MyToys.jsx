import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyToysRwo from "./myToysRwo";
// import { FcEmptyTrash } from "react-icons/fc";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [mytoys, setMyToys] = useState([]);
  const url = `https://assingment-11-sarver-sihabmolla11.vercel.app/toys-mydata?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [url]);

  useTitle("My Toys");

  //   console.log(mytoys);

  const handelDEleteToya = (id) => {
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
        fetch(
          `https://assingment-11-sarver-sihabmolla11.vercel.app/toys/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = mytoys.filter((myToy) => myToy._id !== id);
              setMyToys(remaining);
            }
          });
      }
    });
  };

  const handellowesPriceSort = () => {
    const sotrLowprice = mytoys.sort((a, b) => {
      return new Number(a?.price) - new Number(b?.price);
    });
    setMyToys([...sotrLowprice]);
  };

  const handelHeigthPriceSort = () => {
    const sotrLowprice = mytoys.sort((a, b) => {
      return new Number(b?.price) - new Number(a?.price);
    });
    setMyToys([...sotrLowprice]);
  };

  return (
    <>
      <div className=" my-Container mt-10 ">
        <div className="my-4">
          <div className="dropdown">
            <label tabIndex={0} className="my-btn m-1">
              Sort by price
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-60"
            >
              <li onClick={handellowesPriceSort}>
                <a>lowest price to heigh price</a>
              </li>
              <li onClick={handelHeigthPriceSort}>
                <a>Heigh price to lowest price</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="overflow-x-auto rounded-t-lg  ">
          <table className="table table-compact  w-full">
            <thead className="border-t-2 rounded-lg border-[#ffffff]">
              <tr>
                <th className="border-x-2 border-[#ffffff]">image</th>
                <th className="border-x-2 border-[#ffffff]">game name</th>
                <th className="border-x-2 border-[#ffffff]">sub-category</th>
                <th className="text-center border-[#ffffff]">price</th>
                <th className="text-center border-[#ffffff]">quantity</th>
                <th className="border-x-2 border-[#ffffff]">ratting</th>
                {/* <th> description</th> */}
                <th className="text-center border-x-2 border-[#ffffff]">
                  update
                </th>
                <th className="text-center border-x-2 border-[#ffffff]">
                  DELETE
                </th>
              </tr>
            </thead>
            <tbody>
              {mytoys.map((myToy) => (
                <MyToysRwo
                  key={myToy._id}
                  myToy={myToy}
                  handelDEleteToya={handelDEleteToya}
                ></MyToysRwo>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyToys;
