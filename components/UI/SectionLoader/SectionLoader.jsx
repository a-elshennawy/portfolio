import { InfinitySpin } from "react-loader-spinner";
import "./SectionLoader.css";

function SectionLoader() {
  return (
    <>
      <div className="sectionLoader text-center">
        <InfinitySpin width="200" color="#fff" />
      </div>
    </>
  );
}
export default SectionLoader;
