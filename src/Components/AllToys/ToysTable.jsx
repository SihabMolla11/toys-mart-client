import { FaArrowRight } from "react-icons/fa";

const ToysTable = ({ game }) => {
  const { _id, name, photo, gameName, price, quantity, category } = game;

    const handelViewDetail = (id)=>{
        console.log(id)
    }


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
          <p className="font-bold text-2xl">{gameName}</p>
        </td>
        <td>
          <p className="font-semibold">{category?.label}</p>
        </td>
        <td>
          <p className="font-semibold">{name}</p>
        </td>
        <td>
          <p className="font-semibold">{"$" + price}</p>
        </td>
        <td>
          <p className=" font-semibold">{quantity}</p>
        </td>
        <td className="text-center">
          <button onClick={()=>handelViewDetail(_id)} className="my-btn flex items-center gap-4"> <span>View Detail</span> <FaArrowRight/> </button>
        </td>
      </tr>
    </>
  );
};

export default ToysTable;
