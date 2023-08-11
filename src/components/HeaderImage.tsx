import React from "react";
import Image from "next/image";
import backgroundImage from "../../public/galleryBg.jpg";
import { motion } from "framer-motion";

interface HeaderImageProps {
  img: string;
}

function HeaderImage({ img }: HeaderImageProps) {
  return (
    <>
      <div>
        <div
          style={{ height: "60vh", width: "100vw" }}
          className=" relative bgColor-2 flex flex-col justify-center items-center"
        >
          <Image
            alt="Background Image"
            src={backgroundImage}
            placeholder="blur"
            fill
            loading="eager"
            priority
            quality={60}
            style={{
              objectFit: "cover",
              filter: "brightness(85%)",
            }}
            className="rounded"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className=" absolute flex flex-col justify-center items-center"
          >
            <Image
              src={`/${img}.svg`}
              priority
              alt="Page Title"
              width={460}
              height={300}
            />
          </motion.div>
          <div className=" absolute flex flex-col justify-center items-center">
            <Image
              src="/clayt.svg"
              priority
              alt="Clayt Logo"
              width={240}
              height={30}
            />
            <h3 className=" text-white" style={{ letterSpacing: "0.2rem" }}>
              HANDMADE POLYMER CLAY
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderImage;
