import { Center, HStack } from "@chakra-ui/react";
import React from "react";
import { usePagination } from "../../hooks/usePagination";
import { NavigationBtn } from "./NavigationBtn.jsx";
const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    console.log('اه')
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <Center>
      <HStack margin="5">
        <NavigationBtn direction="left" />
        <NavigationBtn direction="right" />
      </HStack>
    </Center>
  );
};

export default Pagination;