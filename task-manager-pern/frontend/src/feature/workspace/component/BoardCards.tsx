import type { FC } from "react";
import { Link } from "react-router-dom";
type Props = {
  data: { id: number; name: string; color: string };
};
const BoardCards: FC<Props> = (props) => {
  const { data } = props;

  const {id,name,color} = data;
  // link image or color code and name of the board board id
console.log(id);

  return (
    <Link
      to={"#"}
      className="w-42 h-30 bg-white rounded-lg flex flex-col overflow-hidden shadow-lg"
    >
      <div style={{backgroundColor:color}} className="flex-2 p-1">board color and image</div>
      <div className="flex-1 p-1">{name}</div>
    </Link>
  );
};

export default BoardCards;
