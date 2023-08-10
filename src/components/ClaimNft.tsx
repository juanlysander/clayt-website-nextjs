import { CAT_NFT_CONTRACT_ADDRESS } from "../data/addresses";
import { Web3Button, useAddress, useContract } from "@thirdweb-dev/react";
import NftAddressClipboard from "./NftAddressClipboard";
import React from "react";
import { Snippet } from "@nextui-org/react";


export default function ClaimNft() {
  const address = useAddress();

  const { contract: nftContract } = useContract(CAT_NFT_CONTRACT_ADDRESS);

  const mintWithSignature = async () => {
    try {
      const signedPayloadRes = await fetch(`/api/server`, {
        method: "POST",
        body: JSON.stringify({
          claimerAddress: address,
        }),
      });

      const json = await signedPayloadRes.json();

      if (!signedPayloadRes.ok) {
        alert(json.error);
      }

      const signedPayload = json.signedPayload;

      const prize = await nftContract?.erc721.signature.mint(signedPayload);

      alert("NFT has been claimed");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" flex items-center flex-col min-w-max w-full">
      <h1 className="m-1">Congratulations!</h1>
      <p className=" mb-5 mt-0">You have answered correctly.</p>
      <Web3Button
        contractAddress={CAT_NFT_CONTRACT_ADDRESS}
        action={() => mintWithSignature()}
        style={{
          backgroundColor: "#97593B",
          color: "white",
          marginBottom: "100px",
          outline: "none",
        }}
        theme="light"
      >
        Claim NFT
      </Web3Button>
      <NftAddressClipboard />
    </div>
  );
}
