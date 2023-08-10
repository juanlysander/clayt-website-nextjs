import {
  useAddress,
  useContract,
  useContractRead,
} from "@thirdweb-dev/react";
import { CAT_QUIZ_CONTRACT_ADDRESS } from "../data/addresses";
import Navbar from "../components/Navbar";
import Quiz from "../components/Quiz";
import ClaimNft from "../components/ClaimNft";
import NftRender from "../components/NftRender";
import React from "react";
import { Skeleton, Spinner } from "@nextui-org/react";

const Sigdrop = () => {
  const userAddress = useAddress();

  const { contract: catQuizContract } = useContract(CAT_QUIZ_CONTRACT_ADDRESS);

  const { data: hasAnswered, isLoading: isAnsweredLoading } = useContractRead(
    catQuizContract,
    "hasAnswered",
    [userAddress]
  );

  const { data: isCorrect, isLoading: isCorrectLoading } = useContractRead(
    catQuizContract,
    "isCorrect",
    [userAddress]
  );

  return (
    <>
      <Navbar />
      <div
        className="flex justify-center items-center w-screen gap-20"
        style={{ height: "calc(100vh - 64px)" }}
      >
        <NftRender />
        {/* QUIZ SECTION */}
        {userAddress ? (
          <div>
            {!isAnsweredLoading ? (
              !hasAnswered ? (
                <>
                  <Quiz />
                </>
              ) : (
                !isCorrectLoading &&
                (isCorrect ? (
                  <>
                    <ClaimNft />
                  </>
                ) : (
                  <div className=" flex flex-col items-center">
                    <h1>Sorry!</h1>
                    <p className=" mb-1">You have answered incorrectly.</p>
                    <p className=" mb-1">
                      You are not eligible to claim this NFT.
                    </p>
                  </div>
                ))
              )
            ) : (
              <div className="w-96">
                <Skeleton className=" mb-7 w-full text-2xl rounded-lg bgColorSkeleton">
                  <div className="h-8 rounded-lg bgColor-3"></div>
                </Skeleton>
                <Skeleton className=" px-4 py-1 my-2 mx-0 rounded-lg bgColorSkeleton">
                  <div className="h-14 rounded-lg bgColor-3"></div>
                </Skeleton>
                <Skeleton className=" px-4 py-1 my-2 mx-0 rounded-lg bgColorSkeleton">
                  <div className="h-14 rounded-lg bgColor-3"></div>
                </Skeleton>
                <Skeleton className=" px-4 py-1 my-2 mx-0 rounded-lg bgColorSkeleton">
                  <div className="h-14 rounded-lg bgColor-3"></div>
                </Skeleton>
                <Skeleton className=" px-4 py-1 mt-2 mb-5 mx-0 rounded-lg bgColorSkeleton">
                  <div className="h-14 rounded-lg bgColor-3"></div>
                </Skeleton>
                <Skeleton className=" h-11 w-40 px-4 py-1 my-2 mx-0 rounded-lg bgColorSkeleton">
                  <div className="rounded-lg bgColor-3"></div>
                </Skeleton>
              </div>
            )}
          </div>
        ) : (
          <div className=" flex flex-col justify-center items-center w-2/6">
            <Spinner size="lg" color="warning"/>
            <h2 className=" mt-5 text-sm font-extralight textColor">Please connect your wallet</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default Sigdrop;
