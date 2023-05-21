import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ToysTable = ({ toy }) => {
  const { _id, name, photo, toysName, price, quantity, category } = toy;

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
          <p className="font-semibold">{name}</p>
        </td>
        <td>
          <p className="font-semibold text-center">{"$" + price}</p>
        </td>
        <td>
          <p className=" font-semibold text-center">{quantity}</p>
        </td>
        <td className="text-center">
          <Link to={`/toy-detail/${_id}`}>
            <button className="my-btn flex items-center gap-4">
              <span>View Detail</span> <FaArrowRight />{" "}
            </button>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default ToysTable;
