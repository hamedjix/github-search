import { FormLabel, Select } from "@chakra-ui/react";
import React from "react";

type Props = {};

const LanguageFilter = (props: Props) => {
  return (
    <>
      <FormLabel>Programming Language:</FormLabel>
      <Select width={200} placeholder="Select country">
        <option>Python</option>
        <option>Typescript</option>
      </Select>
    </>
  );
};

export default LanguageFilter;
