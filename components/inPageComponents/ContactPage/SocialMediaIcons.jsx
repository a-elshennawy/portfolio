import Image from "next/image";
import useMobile from "@/hooks/useMobile";
import { motion } from "motion/react";

function SocialMediaIcons() {
  const { isMobile } = useMobile();
  const socialItems = [
    {
      imgSrc: "/icons/socialIcons/github.png",
      link: "https://github.com/a-elshennawy",
    },
    {
      imgSrc: "/icons/socialIcons/linkedin.png",
      link: "https://www.linkedin.com/in/shennawyz",
    },
    {
      imgSrc: "/icons/socialIcons/whatsapp.png",
      link: "https://wa.me/201033926177",
    },
  ];
  return (
    <>
      <div className="row justify-content-center align-items-center gap-4 m-0 mb-5">
        {socialItems.map((item, index) => (
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="col-1 p-0 m-0 socialIcon"
          >
            <Image
              src={item.imgSrc}
              alt="Social Media Icon"
              width={isMobile ? 50 : 80}
              height={isMobile ? 50 : 80}
              quality={85}
              priority
              loading="eager"
            />
          </motion.a>
        ))}
      </div>
    </>
  );
}

export default SocialMediaIcons;
