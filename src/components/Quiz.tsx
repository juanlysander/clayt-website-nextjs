import React, { useState } from "react";
import { Web3Button, useContract, useContractRead } from "@thirdweb-dev/react";
import { CAT_QUIZ_CONTRACT_ADDRESS } from "../data/addresses";
import Spinner from "./Spinner";
import { Skeleton } from "@nextui-org/react";

export default function Quiz() {
  const { contract: catQuizContract } = useContract(CAT_QUIZ_CONTRACT_ADDRESS);

  const { data: quiz, isLoading: isQuizLoading } = useContractRead(
    catQuizContract,
    "getQuiz"
  );

  const [answerIndex, setAnswerIndex] = useState<number>();

  return (
    <div className=" w-max">
      {!isQuizLoading ? (
        <div>
          <h2 className=" mb-7 text-2xl textColor">{quiz[0]}</h2>
          {quiz[1].map((answer: string, index: number) => (
            <div
              key={index}
              onClick={() => setAnswerIndex(index)}
              style={{
                backgroundColor: answerIndex === index ? "#97593B" : "#e6ccb2",
                color: answerIndex === index ? "#ffffff" : "#97593B",
                transition: "all 0.1s ease-in-out",
              }}
              className=" px-4 py-1 my-2 mx-0 h-14 rounded-md cursor-pointer border-none flex justify-start items-center hover"
            >
              <p>{answer}</p>
            </div>
          ))}
          <Web3Button
            contractAddress={CAT_QUIZ_CONTRACT_ADDRESS}
            theme="light"
            style={{
              backgroundColor: "#97593B",
              marginTop: "20px",
              border: "none",
              fontSize: "0.9rem",
              outline: "none",
              color: "white",
              width: "160px",
              height: "44px",
            }}
            action={(contract) =>
              contract.call("answerQuestion", [answerIndex])
            }
          >
            Check Answer
          </Web3Button>
        </div>
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
  );
}
