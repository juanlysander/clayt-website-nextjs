import React, { useState } from "react";
import { Snippet } from "@nextui-org/react";

export default function NftAddressClipboard() {
  const [value, setValue] = useState<string>(
    "0xd85ccD17af5f8Aff1Ee66A80d1bdf617cbc682fF"
  );

  return (
    <>
      <Snippet
        tooltipProps={{
          color: "default",
          content: "Copy this address",
          placement: "right",
          closeDelay: 0,
        }}
      >
        {value}
      </Snippet>
    </>
  );
}
