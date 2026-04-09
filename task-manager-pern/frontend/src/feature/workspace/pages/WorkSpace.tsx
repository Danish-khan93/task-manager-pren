import { useState } from "react";
import { CustomModal, CustomText } from "../../../component";
import BoardCards from "../component/BoardCards";
import CreateBoardForm from "../component/CreateBoardForm";
import { useSelector } from "react-redux";
import type { RootState } from "../../../globalStore/store";

const WorkSpace = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  // useSelector

  const { boardList } = useSelector((state: RootState) => {
    return state.workspace;
  });
  console.log(boardList);

  return (
    <main>
      <section>
        <CustomText variant="h3">Create Board</CustomText>
        <div className="w-30">
          <CustomModal
            label={"Create Board"}
            icon={"plus"}
            type="button"
            variant="iconText"
            openModal={openModal}
            setOpenModal={setOpenModal}
          >
            <CreateBoardForm setOpenModal={setOpenModal} />
          </CustomModal>
        </div>
      </section>
      <section>
        <CustomText variant="h3">Recent Board</CustomText>
        <div className="mx-1 grid grid-cols-6 gap-4 my-4">
          {boardList?.map((value) => {
            return <BoardCards key={value?.id} data={value} />;
          })}
        </div>
      </section>
      <section>
        <CustomText variant="h3">Guest Workspaces</CustomText>
        {/* <div className="mx-1 grid grid-cols-6 gap-4 my-4">
          {boards?.map((value) => {
            return <BoardCards key={value?.id} data={value} />;
          })}
        </div> */}
      </section>
    </main>
  );
};

export default WorkSpace;
