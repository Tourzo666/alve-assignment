import Cover from "./Cover";
import Description from "./Description";
import Header from "./Header";
import Item from "./Item";


function App() {
  return (
    <>
      <div className="lg:w-3/4 mx-auto">
        <Header></Header>
        <Cover></Cover>
        <Description></Description>
        <Item></Item>
      </div>
    </>
  );
}

export default App;
