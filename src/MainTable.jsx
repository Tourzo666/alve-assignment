/* eslint-disable react/prop-types */
const MainTable = ({item, cooking }) => {
  const { name, calories, time} = item;
  return (
    <tbody>
      {/* row 1 */}
      <tr>
        <th> {cooking.indexOf(item) + 1} </th>
        <td>{name}</td>
        <td> {time} </td>
        <td> {calories} </td>
      </tr>
    </tbody>
  );
};

export default MainTable;
