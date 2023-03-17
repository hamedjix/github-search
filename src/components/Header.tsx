import {
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Select,
  Icon,
  Heading,
  Card,
} from "@chakra-ui/react";
import { IoRocket } from "react-icons/io5";
import LanguageFilter from "./LanguageFilter";
import ToggleThemeButton from "./ToggleThemeButton";

type Props = {};

const Header = (props: Props) => {
  return (
    <Card p={5}>
      <Flex align="center" justify="space-between">
        <Flex align={"center"}>
          <Icon boxSize={50} as={IoRocket} />
          <Heading size={"lg"}>Search Github Repos</Heading>
        </Flex>
        <ToggleThemeButton />
      </Flex>
      <Divider my={3} />
      <FormControl
        w={"100%"}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <LanguageFilter />
        <Flex align={"center"}>
          <Button type="submit">Search</Button>
        </Flex>
      </FormControl>
    </Card>
  );
};

export default Header;
