import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Grid,
} from "@chakra-ui/react";
import { SelectBox } from "./SelectBox";
import { LANGUAGES, SORT_BY } from "../constants";
import { DatePicker } from "./DateTimePicker";

export const SearchAccordion = ({
  setLanguage,
  setSortBy,
  sortBy,
  language,
  setSelectedDates,
  selectedDates,
}) => {
  return (
    <Accordion allowMultiple w="full">
      <AccordionItem borderTop="0">
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Advanced Search
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Grid
            my="10"
            templateColumns={{
              lg: "repeat(3, 1fr)",
              md: "repeat(2, 1fr)",
              sm: "repeat(1, 1fr)",
            }}
            gap={6}
          >
            <SelectBox
              label="Language"
              options={LANGUAGES}
              setValue={setLanguage}
              value={language}
            />
            <SelectBox
              label="Sort By"
              options={SORT_BY}
              setValue={setSortBy}
              value={sortBy}
            />
            <DatePicker
              selectedDates={selectedDates}
              setSelectedDates={setSelectedDates}
            />
          </Grid>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
