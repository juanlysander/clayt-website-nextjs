import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import NftMenu from "./NftMenu";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <>
      <div className="w-screen flex justify-center align-middle py-0 h-16 bgColor-6">
        <div className=" px-5 max-w-screen-2xl w-full flex justify-between align-middle">
          <Image
            src="/clayt.svg"
            priority
            alt="clayt logo"
            width={120}
            height={30}
          />
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <Link
              href="/"
              className="flex flex-col gap-1 justify-center text-white hover:text-orange-200 transition-all items-center h-14 pe-5"
            >
              <p className=" text-base font-thin">Home</p>
            </Link>
            <Link
              href="/Boutique"
              className="flex flex-col gap-1 justify-center text-white hover:text-orange-200 transition-all items-center h-14 pe-5"
            >
              <p className=" text-base font-thin">Boutique</p>
            </Link>
            <Link
              href="/Gallery"
              className="flex flex-col gap-1 justify-center text-white hover:text-orange-200 transition-all items-center h-14 pe-5"
            >
              <p className=" text-base font-thin">Gallery</p>
            </Link>
            <Link
              href="/Contact"
              className="flex flex-col gap-1 justify-center text-white hover:text-orange-200 transition-all items-center h-14 pe-5"
            >
              <p className=" text-base font-thin">Contact</p>
            </Link>

            <NftMenu />
            <ConnectWallet
              theme="light"
              style={{
                backgroundColor: "#fff",
                color: "#97593B",
                border: "none",
                fontSize: "0.8rem",
                outline: "none",
                borderRadius: "5px",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
