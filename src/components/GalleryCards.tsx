import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Chip } from "@nextui-org/react";
import { Tooltip } from "@nextui-org/react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

interface GalleryCardsProps {
  img: string;
  height: number;
  title: string;
  description: string;
  chip?: string[];
}

export default function GalleryCards({
  img,
  height,
  title,
  description,
  chip = [],
}: GalleryCardsProps) {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isFavourited, setIsFavourited] = useState<boolean>(false);

  useEffect(() => {
    const storedIsLiked = localStorage.getItem(`isLiked-${img}`);
    const storedIsFavourited = localStorage.getItem(`isFavourited-${img}`);
    setIsLiked(storedIsLiked === "true");
    setIsFavourited(storedIsFavourited === "true");
  }, [img]);

  const handleLikeClick = () => {
    const newIsLiked = !isLiked;
    setIsLiked(newIsLiked);
    localStorage.setItem(`isLiked-${img}`, newIsLiked.toString());
  };

  const handleFavouriteClick = () => {
    const newIsFavourited = !isFavourited;
    setIsFavourited(newIsFavourited);
    localStorage.setItem(`isFavourited-${img}`, newIsFavourited.toString());
  };

  return (
    <>
      <div className=" p-2 shadow-lg rounded-lg bg-white">
        <div className="relative" style={{ height: `${height}px` }}>
          <Image
            src={`/${img}.jpg`}
            alt="Custom Order Image"
            fill
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNc5MdgDAADrwElB9bogwAAAABJRU5ErkJggg=="
            sizes="100%"
            quality={60}
            style={{
              objectFit: "cover",
              filter: "brightness(88%)",
            }}
            className="rounded"
          />
        </div>
        <h2 className=" mt-2 text-xl font-normal textColor">{title}</h2>
        <p className=" mt-1 mb-3 text-sm font-thin textColor">{description}</p>
        <div className=" flex flex-wrap gap-2">
          {chip.map((chipItem, index) => (
            <Chip key={index} size="sm" className=" textColor">
              {chipItem}
            </Chip>
          ))}
        </div>
        <div className=" w-full flex justify-end items-center gap-2 mt-5">
          {isFavourited ? (
            <Tooltip
              showArrow={true}
              content="Unfavourite"
              classNames={{ base: "textColor" }}
            >
              <div onClick={handleFavouriteClick}>
                <FavoriteIcon
                  className="text-red-500 cursor-pointer"
                  style={{ fontSize: "18px" }}
                />
              </div>
            </Tooltip>
          ) : (
            <Tooltip
              showArrow={true}
              content="Favourite"
              classNames={{ base: "textColor" }}
            >
              <div onClick={handleFavouriteClick}>
                <FavoriteBorderOutlinedIcon
                  className="text-gray-400 cursor-pointer"
                  style={{ fontSize: "18px" }}
                />
              </div>
            </Tooltip>
          )}
          {isLiked ? (
            <Tooltip
              showArrow={true}
              content="Dislike"
              classNames={{ base: "textColor" }}
            >
              <div onClick={handleLikeClick}>
                <ThumbUpIcon
                  className="text-blue-500 cursor-pointer"
                  style={{ fontSize: "18px" }}
                />
              </div>
            </Tooltip>
          ) : (
            <Tooltip
              showArrow={true}
              content="Like"
              classNames={{ base: "textColor" }}
            >
              <div onClick={handleLikeClick}>
                <ThumbUpOutlinedIcon
                  className="text-gray-400 cursor-pointer"
                  style={{ fontSize: "18px" }}
                />
              </div>
            </Tooltip>
          )}
        </div>
      </div>
    </>
  );
}
