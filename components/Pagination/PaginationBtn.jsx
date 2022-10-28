import React from "react";
import { Button } from "@chakra-ui/react";

export const PaginationBtn = ({
  label,
  isActive,
  setCurrentPage,
  currentPage,
}) => {
  const handleClick = () => {
    setCurrentPage(label);
  };
  return (
    <Button
      colorScheme={isActive ? "blue" : "gray"}
      type="button"
      onClick={handleClick}
    >
      {" "}
      {label}
    </Button>
  );
};
