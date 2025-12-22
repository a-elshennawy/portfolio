import Image from "next/image";

function Loader() {
  return (
    <>
      <div className="loader">
        <Image
          src="/favicon.png"
          alt="logo"
          width={100}
          height={100}
          priority
        />
      </div>
    </>
  );
}

export default Loader;
