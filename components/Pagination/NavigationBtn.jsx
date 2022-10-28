import React from "react";
import { Button } from "@chakra-ui/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
export const NavigationBtn = ({ direction }) => {
  const props =
    direction === "left"
      ? { leftIcon: <BsChevronLeft />, colorScheme: "blue" }
      : { rightIcon: <BsChevronRight />, colorScheme: "blue" };
  return <Button {...props}></Button>;
};
