// import { useParams } from "react-router-dom";
import List from "../component/List";
import Header from "../component/Header";

const data = {
  id: 1,
  name: "Marketing",
  color: "#FF5733",
  memberList: [],
};

const Board = () => {
  // const params = useParams();
  return (
    <div>
      <Header />
      <div className="my-4">
        <List />
      </div>
    </div>
  );
};

export default Board;
