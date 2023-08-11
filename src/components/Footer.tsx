import React from "react";

export default function Footer() {
  return (
    <>
      <div className="w-screen flex justify-center align-middle py-3 h-10 bgColor-6">
        <p className="text-white text-xs">
          &copy; {new Date().getFullYear()} Clayt.id. All rights reserved.
        </p>
      </div>
    </>
  );
}
