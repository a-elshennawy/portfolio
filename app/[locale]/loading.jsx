"use client";
import Image from "next/image";
function Loading() {
  return (
    <>
      <div className="loader text-center">
        <Image
          src="/favicon.png"
          alt="logo"
          width={150}
          height={150}
          priority
          quality={85}
        />
      </div>
    </>
  );
}

export default Loading;
