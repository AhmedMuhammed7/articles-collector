import React from "react";
import { Box, Image, Link as ChakraLink, Text, VStack } from "@chakra-ui/react";
import { formatDate } from "../utils";

export const ArticleCard = ({ title, image, date, url }) => {
  const fitTitle = title.length > 50 ? `${title.slice(0, 50)}...` : title;
  return (
    <ChakraLink
      href={url}
      borderRadius="md"
      borderWidth="1px"
      p="25"
      transitionDuration="200ms"
      _hover={{
        boxShadow: "0 0 10px -8px black",
      }}
      target="_blank"
    >
      <VStack spacing="7">
        <Box>
          <Image
            src={image ? image : "/default_image.png"}
            alt={title}
            layout="fill"
            borderRadius="md"
          />
        </Box>
        <Text color="gray.500" fontWeight="medium" fontSize="sm">
          {formatDate(date)}
        </Text>
        <Text color="gray.800" fontWeight="medium" fontSize="xl" align="center">
          {fitTitle}
        </Text>
      </VStack>
    </ChakraLink>
  );
};
