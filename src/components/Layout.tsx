import { Box, Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      {children}
    </Flex>
  );
};

export default Layout;
