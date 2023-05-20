import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const MyToysRwo = ({ myGame, handelDEleteGame }) => {
  const {
    _id,
    rating,
    description,
    photo,
    toysName,
    price,
    quantity,
    category,
  } = myGame;

  return (
    <>
      <tr>
        <td>
          <img
            className="rounded-md h-20 w-20 "
            src={photo}
            alt="Avatar Tailwind CSS Component"
          />
        </td>
        <td>
          <p className=" font-medium text-xl">{toysName}</p>
        </td>
        <td>
          <p className="font-semibold">{category?.label}</p>
        </td>
        <td>
          <p className="font-semibold text-center">{"$" + price}</p>
        </td>
        <td>
          <p className=" text-center font-semibold">{quantity}</p>
        </td>
        <td className="text-center">
          <Rating
            style={{ maxWidth: 100 }}
            value={rating}
            readOnly
          />
        </td>
        <td className="text-center">
          <Link to={`/update/${_id}`}>
            <button className="text-2xl p-2 rounded-full hover:text-blue-600 hover:bg-blue-300 bg-blue-100 text-blue-500">
              <FaRegEdit />
            </button>
          </Link>
        </td>

        <td className="text-center">
          <button
            onClick={() => handelDEleteGame(_id)}
            className="text-2xl p-2 rounded-full hover:text-red-600 hover:bg-red-300 bg-red-100 text-red-500"
          >
            <FaRegTrashAlt />
          </button>
        </td>
      </tr>
    </>
  );
};

export default MyToysRwo;
