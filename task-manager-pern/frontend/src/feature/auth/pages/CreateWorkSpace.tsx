import AuthLayout from "../../../layout/authLayout/AuthLayout";
import WorkSpaceForm from "../authComponent/WorkSpaceForm";

const CreateWorkSpace = () => {
  return (
    <AuthLayout>
      <div className="w-full h-auto m-10">
        <div className="bg-white w-md h-auto min-h-100 rounded-lg shadow-lg">
            <WorkSpaceForm/>
        </div>
      </div>
    </AuthLayout>
  );
};

export default CreateWorkSpace;
