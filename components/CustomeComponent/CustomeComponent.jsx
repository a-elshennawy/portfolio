"use client";
import Image from "next/image";
import "./CustomeComponent.css";
function CustomeComponent({ className, imgSrc, imgWidth, imgHeight, text }) {
  return (
    <>
      <div className={`${className} customeComp text-center`}>
        <Image
          src={imgSrc}
          width={imgWidth}
          height={imgHeight}
          alt="Custom Image"
        />
        <h4 className="mt-1">{text}</h4>
      </div>
    </>
  );
}

export default CustomeComponent;
