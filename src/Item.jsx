import { useEffect } from "react";
import { useState } from "react";
import Cart from "./Cart";
import PreparingTable from "./PreparingTable";

import MainTable from "./MainTable";
import { Bounce, toast } from "react-toastify";

const Item = () => {
  const [items, setItems] = useState([]);
  const [addedItems, setAddedItems] = useState([]);
  const [cooking, setCooking] = useState([]);
  let totalTime = 0;
  let totalCalories = 0;
  cooking.map(
    (item) => (totalTime = totalTime + parseInt(item.time.slice(0, -4)))
  );
  cooking.map(
    (item) =>
      (totalCalories = totalCalories + parseInt(item.calories.slice(0, -9)))
  );
  const handleAddItems = (id) => {
    const add = items.find((item) => item._id === id);
    const remainingAdded = addedItems.find((item) => item._id === id);
    const remainingCooking = cooking.find((item) => item._id === id);
    if (!remainingAdded && !remainingCooking) {
      const newAdd = [...addedItems, add];
      setAddedItems(newAdd);
    } else {
      toast('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }
  };
  const handlePrepare = (id) => {
    const preparedItem = addedItems.find((item) => item._id === id);
    const finalCooking = addedItems.filter((item) => item._id !== id);
    const remainingCooking = cooking.find((item) => item._id === id);
    if (!remainingCooking) {
      const newCooking = [...cooking, preparedItem];
      setCooking(newCooking);
    }
    setAddedItems(finalCooking);
  };
  console.log(addedItems);
  useEffect(() => {
    fetch("food.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className="flex">
      <div className="grid grid-cols-2 w-2/3 ">
        {items.map((item) => (
          <Cart
            key={item._id}
            handleAddItems={handleAddItems}
            item={item}
          ></Cart>
        ))}
      </div>
      <div className=" w-1/3 ml-4 ">
        <div className="mt-8">
          <p className="text-2xl font-semibold text-center ">
            Want to Cook: {addedItems.length}{" "}
          </p>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
              </thead>
              {addedItems.map((item) => (
                <PreparingTable
                  addedItems={addedItems}
                  key={item._id}
                  handlePrepare={handlePrepare}
                  item={item}
                ></PreparingTable>
              ))}
            </table>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-2xl font-semibold text-center ">
            Currently Cooking: {cooking.length}{" "}
          </p>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
              </thead>
              {cooking.map((item) => (
                <MainTable
                  key={item._id}
                  cooking={cooking}
                  item={item}
                ></MainTable>
              ))}

              <tbody>
                <tr>
                  <th></th>
                  <td></td>
                  <td className="font-semibold">
                    Total Time = <br /> {totalTime} min{" "}
                  </td>
                  <td className="font-semibold">
                    Total Calories <br /> {totalCalories} calories{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
