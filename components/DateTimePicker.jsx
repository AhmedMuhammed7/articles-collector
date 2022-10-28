import React from "react";
import { RangeDatepicker } from "chakra-dayzed-datepicker";
export const DatePicker = ({ selectedDates, setSelectedDates }) => {
  return (
    <RangeDatepicker
      selectedDates={selectedDates}
      onDateChange={setSelectedDates}
      propsConfigs={{
        dayOfMonthBtnProps: {
          defaultBtnProps: {
            _hover: {
              background: "blue.400",
              color: "white",
            },
          },
          isInRangeBtnProps: {
            color: "white",
            background: "blue.600",
          },
          selectedBtnProps: {
            background: "blue.200",
          },
        },
        
      }}
    />
  );
};
