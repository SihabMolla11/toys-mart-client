import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyToysRwo = ({ myGame, handelDEleteGame }) => {
  const {
    _id,
    name,
    rating,
    description,
    photo,
    gameName,
    price,
    quantity,
    category,
  } = myGame;

  return (
    <>
      <tr>
        <td className="text-center">
          <button
            onClick={() => handelDEleteGame(_id)}
            className="text-2xl p-2 rounded-full hover:text-red-600 hover:bg-red-300 bg-red-100 text-red-500"
          >
            <FaRegTrashAlt />
          </button>
        </td>
        <td>
          <img
            className="rounded-md h-20 w-20 "
            src={photo}
            alt="Avatar Tailwind CSS Component"
          />
        </td>
        <td>
          <p className="font-bold text-2xl">{gameName}</p>
        </td>
        <td>
          <p className="font-semibold">{category?.label}</p>
        </td>
        <td>
          <p className="font-semibold">{"$" + price}</p>
        </td>
        <td>
          <p className=" font-semibold">{quantity}</p>
        </td>
        <td>
          <p className=" font-semibold">{rating}</p>
        </td>
        <td>
          <p className=" font-semibold">{description}</p>
        </td>
        <td className="text-center">
          <Link to={`/update/${_id}`}>
            <button className="my-btn ml-4 flex items-center gap-4">
              <span>Update</span>
            </button>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default MyToysRwo;
