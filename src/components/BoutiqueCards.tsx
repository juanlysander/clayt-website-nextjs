import React from "react";
import Image from "next/image";
import boutiqueImage1 from "../../public/boutique1.png";
import boutiqueImage2 from "../../public/boutique2.png";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";

function BoutiqueCards() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className=" w-max gap-20 flex"
      >
        <Image
          src={boutiqueImage1}
          alt="NFT Image"
          className="rounded-lg my-32 shadow-lg"
          width={450}
          height={450}
          placeholder="blur"
          quality={85}
        />
        <div className=" my-32 flex flex-col justify-start gap-3">
          <h2 className=" textColor text-4xl font-semibold">
            Artisan Green Marble
          </h2>
          <p className=" textColor mb-5 text-sm tracking-wider leading-6 max-w-md">
            Experience the allure of luxury with our artisan-crafted green
            earrings. Inspired by nature, shows captivating abstract designs and
            the elegance of marble patterns.
          </p>
          <div className="flex justify-between mb-6">
            <div className="w-1/2 flex flex-col gap-2">
              <div className="flex gap-2">
                <p className=" font-bold text-lg">NFT Number:</p>
                <p className=" font-thin text-lg">CLT-AE001</p>
              </div>
              <div className="flex gap-2">
                <p className=" font-bold text-lg">Color</p>
                <p className=" font-thin text-lg">Emerald Green</p>
              </div>
            </div>
            <div className="w-1/2 flex flex-col gap-2">
              <div className="flex gap-2">
                <p className=" font-bold text-lg">Token ID:</p>
                <p className=" font-thin text-lg mr-10">1</p>
              </div>
              <div className="flex gap-2">
                <p className=" font-bold text-lg">Type:</p>
                <p className=" font-thin text-lg">Marble</p>
              </div>
            </div>
          </div>
          <h3 className="mb-20 font-extrabold text-4xl text-emerald-600">
            $ 299.99
          </h3>
          <Button className=" w-40 bgColor-6 text-white font-bold tracking-wide">
            Adopt
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className=" w-max gap-20 flex"
      >
        <Image
          src={boutiqueImage2}
          alt="NFT Image"
          className="rounded-lg my-32 shadow-lg"
          width={450}
          height={450}
          placeholder="blur"
          quality={85}
        />
        <div className=" my-32 flex flex-col justify-start gap-3">
          <h2 className=" textColor text-4xl font-semibold">
            Artisan Husky Keychain
          </h2>
          <p className=" textColor mb-5 text-sm tracking-wider leading-6 max-w-md">
            Capture the playful spirit of a husky in the palm of your hand with
            our exquisite clay husky miniature. Meticulously crafted with clay,
            this miniature masterpiece embodies the husky's charm and energy.
          </p>
          <div className="flex justify-between mb-6">
            <div className="w-1/2 flex flex-col gap-2">
              <div className="flex gap-2">
                <p className=" font-bold text-lg">NFT Number:</p>
                <p className=" font-thin text-lg">CLT-AK001</p>
              </div>
              <div className="flex gap-2">
                <p className=" font-bold text-lg">Color</p>
                <p className=" font-thin text-lg">Gray</p>
              </div>
            </div>
            <div className="w-1/2 flex flex-col gap-2">
              <div className="flex gap-2">
                <p className=" font-bold text-lg">Token ID:</p>
                <p className=" font-thin text-lg mr-10">2</p>
              </div>
              <div className="flex gap-2">
                <p className=" font-bold text-lg">Type:</p>
                <p className=" font-thin text-lg">Miniature</p>
              </div>
            </div>
          </div>
          <h3 className="mb-20 font-extrabold text-4xl text-emerald-600">
            $ 239.99
          </h3>
          <Button className=" w-40 bgColor-6 text-white font-bold tracking-wide">
            Adopt
          </Button>
        </div>
      </motion.div>
    </>
  );
}

export default BoutiqueCards;
