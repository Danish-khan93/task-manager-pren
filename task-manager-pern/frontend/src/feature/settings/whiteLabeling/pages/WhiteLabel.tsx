import { CustomText } from "../../../../component";
import WhiteLableForm from "../component/WhiteLableForm";

const WhiteLabel = () => {
  return (
    <main className="my-5">
      <section>
        <CustomText variant="h2">White Labeling</CustomText>
      </section>

      <WhiteLableForm />
    </main>
  );
};

export default WhiteLabel;
