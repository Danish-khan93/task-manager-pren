import type { FC } from "react";
import TaskCard from "./TaskCard";
import AddTask from "./AddTask";

type Props = {

}


const List:FC<Props> = (props) => {
  
  const {listName ,cardList} = props
  
    return (
    <main className="w-80 h-auto max-h-screen bg-amber-200 p-1 rounded-lg shadow-xl flex flex-col gap-2">
      <div>list name</div>
      <div className="flex flex-col flex-1 overflow-y-auto">
        <TaskCard/>
        </div>
      <div>
        <AddTask/>
      </div>
    </main>
  );
};

export default List;
