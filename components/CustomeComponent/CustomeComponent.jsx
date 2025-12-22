"use client";
import Image from "next/image";
function CustomeComponent({ className, imgSrc, imgWidth, imgHeight, text }) {
  return (
    <>
      <div className={`${className} customeComp text-center p-0`}>
        <Image
          src={imgSrc}
          width={imgWidth}
          height={imgHeight}
          priority
          alt="Custom Image"
        />

        <h4 className="mt-1 ">{text}</h4>
      </div>
    </>
  );
}

export default CustomeComponent;
