import { Flex, useColorModeValue } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const bg = useColorModeValue("#EEF1FF", "#1A202C");
  return (
    <Flex direction="column" minH="100vh" bg={bg}>
      <Header />
      {children}
    </Flex>
  );
};

export default Layout;
