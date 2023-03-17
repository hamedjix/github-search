import {
  Flex,
  Icon,
  Heading,
  HStack,
  Text,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import { useAuth } from "context/auth";
import { IoRocket } from "react-icons/io5";
import SignOutButton from "./SignOutButton";
import ToggleThemeButton from "./ToggleThemeButton";

type Props = {};

const Header = (props: Props) => {
  const { isLoggedIn, user } = useAuth();
  const bg = useColorModeValue("#D2DAFF", "#1A202C");
  return (
    <Box p={5} bg={bg} borderBottom="1px" borderColor="gray.600">
      <Flex align="center" justify="space-between">
        <Flex align={"center"}>
          <Icon boxSize={42} as={IoRocket} />
          <Heading size={"md"}>Search Github Repos</Heading>
        </Flex>
        <HStack>
          {user ? <Text>Hi {user} !</Text> : <></>}
          {isLoggedIn ? <SignOutButton /> : <></>}
          <ToggleThemeButton />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
