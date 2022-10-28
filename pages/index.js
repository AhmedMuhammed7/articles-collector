import React, { useState } from "react";
import { Container } from "@chakra-ui/react";
import { Form } from "../components/Form.jsx";
import { SearchResults } from "../components/SearchResults.jsx";
import { ErrorAlert } from "../components/ErrorAlert.jsx";
import { PaginationBar } from "../components/Pagination/Pagination.jsx";

export default function Home() {
  const [searchResult, setSearchResult] = useState([]);
  const [totalCount,setTotalCount] = useState(10)
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState("");
  return (
    <Container maxW="6xl">
      <main>
        <Form
          setSearchResult={setSearchResult}
          setError={setError}
          setTotalCount={setTotalCount}
        />
      </main>
      {error ? (
        <ErrorAlert error={error} />
      ) : (
        <SearchResults
          searchResult={searchResult}
          totalCount={totalCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </Container>
  );
}
