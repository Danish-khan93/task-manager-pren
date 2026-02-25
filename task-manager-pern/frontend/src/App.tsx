import { CustomButton } from "./component";

const App = () => {
  return (
    <div>
      <CustomButton label="testing button" type="button" variant="text" />
      <CustomButton icon={"plus"} type="button" variant="icon" />
      <CustomButton
        icon={"plus"}
        label={"Add"}
        type="button"
        variant="iconText"
      />
      <CustomButton icon={"edit"} type="button" variant="icon" />
      <CustomButton icon={"delete"} type="button" variant="icon" />
    </div>
  );
};

export default App;
