import { Grid, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { ArticleCard } from "./ArticleCard.jsx";

export const SearchResults = ({
  searchResult = [],
}) => {
  const renderResult = () =>
    searchResult.length ? (
      searchResult.map(({ title, url, urlToImage, publishedAt }, index) => (
        <ArticleCard
          key={`${title}${index}`}
          title={title}
          image={urlToImage}
          date={publishedAt}
          url={url}
        />
      ))
    ) : (
      <Text color="gray.500" align="center" width="full">
        No search results.
      </Text>
    );
  return (
    <VStack>
      <Grid
        my="10"
        templateColumns={
          searchResult.length
            ? {
                lg: "repeat(3, 1fr)",
                md: "repeat(2, 1fr)",
                sm: "repeat(1, 1fr)",
              }
            : "1fr"
        }
        gap={6}
      >
        {renderResult()}
      </Grid>
    </VStack>
  );
};
