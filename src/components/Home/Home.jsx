import Header from "./Header/Header";
import Samples from "./Samples/Samples";
import UpBtn from "../UpBtn/UpBtn";
import ProgressBar from "../ProgressBar/ProgressBar";

export default function Home() {
  return (
    <>
      <ProgressBar />
      <Header />
      <Samples />
      <UpBtn />
    </>
  );
}
