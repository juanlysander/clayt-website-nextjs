import React, { useState, useRef, useEffect } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Link from "next/link";

export default function NftMenu() {
  const [isActive, setIsActive] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as HTMLElement)
    ) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <div
        className="flex justify-center items-center h-14 pe-5 text-white hover:text-orange-200 transition-all cursor-pointer"
        onClick={() => setIsActive(!isActive)}
      >
        <p className="text-base font-thin">NFT</p>
        <ArrowDropDownIcon className="text-white" />
      </div>
      <div
        className="absolute rounded bgColor-6 right-0"
        style={
          isActive
            ? {
                top: "125%",
                transition: "all 0.1s",
                zIndex: 1,
              }
            : {
                top: "125%",
                transition: "all 0.1s",
                opacity: "0",
                visibility: "hidden",
                zIndex: 1,
                scale: "94%",
              }
        }
      >
        <div className="px-0 py-2 w-48">
          <div className="px-4 py-2 min-h-max text-white flex flex-col justify-center items-start gap-2 h-10 border-b border-b-yellow-800 mb-2">
            <p className=" font-semibold text-lg">Menu</p>
          </div>
          <div className="px-4 py-0 cursor-pointer text-slate-200  hover:text-orange-200 transition-all flex justify-start items-center gap-2 h-8">
            <Link href="/NFT">
              <p className=" font-thin">Mint NFT</p>
            </Link>
          </div>
          <div className="px-4 py-0 cursor-pointer text-slate-200  hover:text-orange-200 transition-all flex justify-start items-center gap-2 h-8">
            <p className=" font-thin">My NFT Collection</p>
          </div>
          <div className="px-4 py-0 cursor-pointer text-slate-200  hover:text-orange-200 transition-all flex justify-start items-center gap-2 h-8">
            <p className=" font-thin">NFT Ownership</p>
          </div>
        </div>
      </div>
    </div>
  );
}
