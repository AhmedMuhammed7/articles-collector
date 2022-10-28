import { Input } from '@chakra-ui/react';
import React from 'react'

export const SearchInput = ({searchQuery,setSearchQuery}) => {
    const handleChange = (e)=> {
        setSearchQuery(e.target.value)
    }
  return (
    <Input
      placeholder="Search for any atricle."
      type="search"
      size="lg"
      onChange={handleChange}
      value={searchQuery}
    />
  );
}
