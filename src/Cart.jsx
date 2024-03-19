/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { MdAccessTime } from "react-icons/md";
import { AiOutlineFire } from "react-icons/ai";
const Cart = ({ item, handleAddItems }) => {
  const { _id,img, name, time, info, ingredients, calories } = item;
  return (
    <div>
      <div className="card w-96  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title font-bold "> {name} </h2>
          <p className="text-gray-600" > {info} </p>
          <div>
            <h2 className="font-semibold text-[18px] mt-2 ">
              Ingredients: {ingredients.length}{" "}
            </h2>
            <div className="mt-2">
              {ingredients.map((ingredient) => (
                <li className="text-gray-600" > {ingredient} </li>
              ))}
            </div>
          </div>
          <div className="flex " >
            <div className="flex items-center  ">
              <MdAccessTime />
              <p className=" ml-2 "> {time}</p>
            </div>
            <div className="flex items-center ml-6 ">
              <AiOutlineFire />
              <p className=" ml-2 "> {calories} </p>
            </div>
          </div>
          <div className="card-actions mt-4 ">
            <button onClick={()=>handleAddItems(_id)} className="btn btn-success rounded-full text-[18px] text-white  ">Want to Cook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
