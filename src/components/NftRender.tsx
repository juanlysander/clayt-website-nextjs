import { CAT_NFT_CONTRACT_ADDRESS } from "../data/addresses";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import NextImage from "next/image";
import {Image} from "@nextui-org/react";

export default function NftRender() {
  const { contract } = useContract(CAT_NFT_CONTRACT_ADDRESS);

  const { data: totalMinted, isLoading: isLoadingTotalMinted } =
    useContractRead(contract, "totalMinted");

  const { data: totalSupply, isLoading: isLoadingTotalSupply } =
    useContractRead(contract, "nextTokenIdToMint");

  return (
    <>
      <div
        className=" p-5 rounded-lg max-w-xs bgColor-6"
      >
        <Image
          as={NextImage}
          src="/nft.png"
          alt="NFT Image"
          className="rounded-lg mb-3"
          width={288}
          height={288}
          isZoomed
          loading="lazy"
          quality={100}
        />
        <h2 className=" text-2xl text-white mb-2 font-semibold">
          Purr-fectly Clayt Cats
        </h2>
        <p className=" text-sm text-white mb-3">
          Have you ever seen a cat so cute, you wished you could squish it into
          a pocket-sized, clay-crafted masterpiece? Well, your feline fantasies
          just came to life in this whimsical limited NFT!
        </p>
        <div className=" text-sm text-white mb-2">
          <strong>Type:</strong> Cat
        </div>
        <div className=" text-sm text-white mb-2">
          <strong>Rarity:</strong> Rare
        </div>
        <div className=" text-sm text-white mb-2">
          <strong>Total Supply Left:</strong> {totalSupply - totalMinted}
        </div>
      </div>
    </>
  );
}
