import { CustomButton, CustomCheckBox, CustomInput } from "./component";

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

      <CustomInput label={"test"} name={"test"} type="number" max={4} />
      <CustomInput
        label={"test"}
        name={"test"}
        type="password"
        maxLength={10}
        minLength={5}
      />
      <CustomCheckBox label={"tesing"} name={"test"}/>
    </div>
  );
};

export default App;
