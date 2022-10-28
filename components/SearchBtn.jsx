import React from "react";
import { IconButton } from "@chakra-ui/react";
import { HiSearch } from "react-icons/hi";

export const SearchBtn = ({ loading }) => {
  return (
    <IconButton
      colorScheme="blue"
      aria-label="Search database"
      icon={<HiSearch />}
      size="lg"
      type="submit"
      isLoading={loading}
    />
  );
};
