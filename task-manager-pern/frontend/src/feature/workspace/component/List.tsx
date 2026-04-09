import type { FC } from "react";
import TaskCard from "./TaskCard";
import AddTask from "./AddTask";

type Props = {

}


const List:FC<Props> = (props) => {
  
  const {listName ,cardList} = props
  
    return (
    <main className="w-80 h-[calc(100vh-300px)] p-1 rounded-lg shadow-xl flex flex-col gap-2"
    style={{backgroundColor:"var(--color-bg)"}}
    >
      <div>list name</div>
      <div className="flex flex-col gap-2 flex-1 overflow-y-auto">
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        </div>
      <div>
        <AddTask/>
      </div>
    </main>
  );
};

export default List;
