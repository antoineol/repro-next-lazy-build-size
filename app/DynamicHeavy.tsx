"use client";

import { useSandpack } from "@codesandbox/sandpack-react";
import type { FC } from "react";
import { memo } from "react";

console.log("useSandpack", useSandpack);

export const HeavyComp: FC = memo(function HeavyComp() {
  return <>Heavy comp</>;
});

export default HeavyComp;
