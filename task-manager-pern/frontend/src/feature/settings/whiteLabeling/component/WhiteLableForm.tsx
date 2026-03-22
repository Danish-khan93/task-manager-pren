import { useForm } from "react-hook-form";
import { CustomButton, CustomColorPicker } from "../../../../component";
import { useTheme, type ThemeType } from "../../../../context/ThemeContext";

const WhiteLableForm = () => {
  const { theme, setTheme } = useTheme();

  const { handleSubmit, register, watch, reset } = useForm({
    defaultValues: theme,
  });

  const onSubmit = (value: ThemeType) => {
    console.log(value);
    setTheme(value);
  };
  const allValues = watch();

  const saveTheme = () => {
    localStorage.setItem("theme", JSON.stringify(theme));
  };

  const resetTheme = () => {
    reset();
    const val = watch();
    setTheme(val);
  };

  return (
    <main className="my-5 ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-5">
          <div className="flex items-end gap-1.5 ">
            <CustomColorPicker label={"background"} {...register("bg")} />
            <div
              className="w-10 h-10 rounded-lg border-2 border-black"
              style={{ backgroundColor: allValues?.bg }}
            ></div>
          </div>
          <div className="flex items-end gap-1.5 ">
            <CustomColorPicker
              label={"Typography"}
              {...register("typography")}
            />
            <div
              className="w-10 h-10 rounded-lg border-2 border-black"
              style={{ backgroundColor: allValues?.typography }}
            ></div>
          </div>
          <div className="flex items-end gap-1.5">
            <CustomColorPicker label={"Border"} {...register("border")} />
            <div
              className="w-10 h-10 rounded-lg border-2 border-black"
              style={{ backgroundColor: allValues?.border }}
            ></div>
          </div>
          <div className="flex items-end gap-1.5">
            <CustomColorPicker label={"Button"} {...register("buttonBg")} />
            <div
              className="w-10 h-10 rounded-lg border-2 border-black"
              style={{ backgroundColor: allValues?.buttonBg }}
            ></div>
          </div>
          <div className="flex items-end gap-1.5">
            <CustomColorPicker
              label={"Button Text"}
              {...register("buttonColor")}
            />
            <div
              className="w-10 h-10 rounded-lg border-2 border-black"
              style={{ backgroundColor: allValues?.buttonColor }}
            ></div>
          </div>
          <div className="flex items-end gap-1.5">
            <CustomColorPicker label={"field"} {...register("fieldBg")} />
            <div
              className="w-10 h-10 rounded-lg border-2 border-black"
              style={{ backgroundColor: allValues?.fieldBg }}
            ></div>
          </div>
          <div className="flex items-end gap-1.5">
            <CustomColorPicker label={"label"} {...register("label")} />
            <div
              className="w-10 h-10 rounded-lg border-2 border-black"
              style={{ backgroundColor: allValues?.label }}
            ></div>
          </div>
        </div>
        <div className="my-3 flex gap-2">
          <CustomButton
            type="submit"
            label="Apply"
            variant="text"
            width="w-40"
          />
          <CustomButton
            type="button"
            handleClick={saveTheme}
            label="Save"
            variant="text"
            width="w-40"
          />
          <CustomButton
            type="button"
            handleClick={resetTheme}
            label="Reset"
            variant="text"
            width="w-40"
          />
        </div>
      </form>
    </main>
  );
};

export default WhiteLableForm;
