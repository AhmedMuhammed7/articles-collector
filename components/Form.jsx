import React, { useState } from "react";
import { Heading, HStack, VStack } from "@chakra-ui/react";
import { SearchInput } from "./Input.jsx";
import { SearchBtn } from "./SearchBtn.jsx";
import { getArticles } from "../apis";
import { useRouter } from "next/router";
import { SearchAccordion as Accordion } from "./SearchAccordion.jsx";

export const Form = ({ setSearchResult, setError }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [language, setLanguage] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedDates, setSelectedDates] = useState([]);
  console.log(selectedDates);
  const router = useRouter();
  const { page } = router.query;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery) {
      router.push("/?page=1");
      setLoading(true);
      getArticles({ searchQuery, page, language, sortBy, selectedDates }).then(
        ({ articles, status, message }) => {
          if (status === "ok") {
            setSearchResult(articles);
            setError("");
          }
          if (status === "error") setError(message);
          setLoading(false);
        }
      );
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing="16" my="20">
        <Heading as="h1" color="gray.600" textAlign="center" lineHeight="1.5">
          Search For any article. <br /> Customize Your Search result.
        </Heading>
        <HStack w="full">
          <SearchInput
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <SearchBtn loading={loading} />
        </HStack>
        <Accordion
          setLanguage={setLanguage}
          setSortBy={setSortBy}
          sortBy={sortBy}
          language={language}
          selectedDates={selectedDates}
          setSelectedDates={setSelectedDates}
        />
      </VStack>
    </form>
  );
};
