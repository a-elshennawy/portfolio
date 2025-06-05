import { RotateLoader } from "react-spinners";

export default function LoadingSpinner() {
  return (
    <div className="loader-container">
      <RotateLoader
        color="#0040ff"
        loading={true}
        size={15}
        speedMultiplier={1}
      />
    </div>
  );
}
