import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { NextApiRequest, NextApiResponse } from "next";
import { CAT_NFT_CONTRACT_ADDRESS, CAT_QUIZ_CONTRACT_ADDRESS } from "../../data/addresses";

export default async function server(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { claimerAddress } = JSON.parse(req.body);

    if(!process.env.PRIVATE_KEY) {
      throw new Error("Missing Private key environment variable");
    }

    const sdk = ThirdwebSDK.fromPrivateKey(
      process.env.PRIVATE_KEY,
      "mumbai",
    )

    const quizContract = await sdk.getContract(
      CAT_QUIZ_CONTRACT_ADDRESS
    )

    const nftContract = await sdk.getContract(
      CAT_NFT_CONTRACT_ADDRESS,
      "nft-collection"
    )

    const isCorrect = await quizContract.call(
      "isCorrect",
      [claimerAddress]
    )
    if(!isCorrect) {
      res.status(400).json({error: "You did not answer correctly" })
    }

    const isClaimed = (await nftContract.balanceOf(claimerAddress)).gt(0);
    if(isClaimed) {
      res.status(400).json({error: "You already claimed your NFT" })
    }

    const payload = {
      to: claimerAddress,
    }

    const signedPayload = await nftContract.erc721.signature.generate(payload);

    res.status(200).json({
      signedPayload: JSON.parse(JSON.stringify(signedPayload)),
    })

  } catch (error) {
    res.status(500).json({ statusCode: 500, message: `Server error ${error}`});
  }  
}