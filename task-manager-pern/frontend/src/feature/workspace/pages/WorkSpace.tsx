import { CustomModal, CustomText } from "../../../component";
import BoardCards from "../component/BoardCards";

const boards = [
  { id: 1, name: "Marketing", color: "#FF5733" },
  { id: 2, name: "Design", color: "#33FFCE" },
  { id: 3, name: "Development", color: "#335BFF" },
  { id: 4, name: "HR", color: "#FF33A6" },
  { id: 5, name: "Sales", color: "#FFD733" },
  { id: 6, name: "Sales", color: "#FFD733" },
  { id: 7, name: "Sales", color: "#FFD733" },
  { id: 8, name: "Sales", color: "#FFD733" },
];

const WorkSpace = () => {
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
          >
            danish
          </CustomModal>
        </div>
      </section>
      <section>
        <CustomText variant="h3">Recent Board</CustomText>
        <div className="mx-1 grid grid-cols-6 gap-4 my-4">
          {boards?.map((value) => {
            return <BoardCards key={value?.id} data={value} />;
          })}
        </div>
      </section>
      <section>
        <CustomText variant="h3">Guest Workspaces</CustomText>
        <div className="mx-1 grid grid-cols-6 gap-4 my-4">
          {boards?.map((value) => {
            return <BoardCards key={value?.id} data={value} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default WorkSpace;
