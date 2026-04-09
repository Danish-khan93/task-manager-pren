import type { FC } from "react";
import { Link } from "react-router-dom";
type Props = {
  data: { id: number; boardName: string; bgColor?: string };
};
const BoardCards: FC<Props> = (props) => {
  const { data } = props;

  const { id, boardName, bgColor } = data;
  // link image or color code and name of the board board id

  return (
    <Link
      to={`${id}`}
      className="w-42 h-30 bg-white rounded-lg flex flex-col overflow-hidden shadow-lg"
    >
      <div style={{ backgroundColor: bgColor }} className="flex-2 p-1">
        board color and image
      </div>
      <div className="flex-1 p-1">{boardName}</div>
    </Link>
  );
};

export default BoardCards;
