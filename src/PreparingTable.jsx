/* eslint-disable react/prop-types */
const PreparingTable = ({ item, handlePrepare , addedItems }) => {
  const { name, calories, time, _id } = item;
  return (
    <tbody>
      {/* row 1 */}
      <tr>
        <th> {addedItems.indexOf(item) + 1 } </th>
        <td>{name}</td>
        <td> {time} </td>
        <td> {calories} </td>
        <td> <button onClick={()=>handlePrepare(_id)} className="btn btn-success rounded-full text-white text-[17px] " >Preparing</button> </td>
      </tr>
    </tbody>
  );
};

export default PreparingTable;
