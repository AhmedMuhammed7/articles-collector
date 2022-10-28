import { Select } from "@chakra-ui/react";
import React from "react";

export const SelectBox = ({
  label: selectLabel = "",
  options = [],
  value,
  setValue,
}) => {
  const handleSelect = (e) => {
    setValue(e.target.value);
  };
  const renderOptions = () =>
    options.map(({ option, label }) => (
      <option key={option} value={option}>
        {label}
      </option>
    ));
  return (
    <Select
      placeholder={selectLabel}
      textTransform="capitalize"
      onChange={handleSelect}
      value={value}
    >
      {renderOptions()}
    </Select>
  );
};
