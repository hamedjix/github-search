import { Flex, Icon, Heading, Card, HStack, Text } from "@chakra-ui/react";
import { useAuth } from "context/auth";
import { IoRocket } from "react-icons/io5";
import SignOutButton from "./SignOutButton";
import ToggleThemeButton from "./ToggleThemeButton";

type Props = {};

const Header = (props: Props) => {
  const { isLoggedIn, user, setUserStatus } = useAuth();
  return (
    <Card p={5}>
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
    </Card>
  );
};

export default Header;
