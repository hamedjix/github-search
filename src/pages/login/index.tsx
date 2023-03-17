import React from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Tag,
  Text,
} from "@chakra-ui/react";
import { useAuth } from "context/auth";
import { localStorageManage } from "utils";

type Props = {};

const Login = (props: Props) => {
  const { setUserStatus } = useAuth();

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      name: HTMLInputElement;
    };
    localStorageManage(true);
    setUserStatus(true, formElements.name.value);
  };
  return (
    <Flex
      width="full"
      align="center"
      justifyContent="center"
      flex="1"
      direction="column"
    >
      <Box
        p={8}
        maxWidth="500px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <Box textAlign="center">
          <Heading>Login</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form onSubmit={onFormSubmit}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input name="name" type="text" placeholder="Enter Your Name" />
            </FormControl>
            <FormControl mt={6} isRequired>
              <FormLabel>Password</FormLabel>
              <Input name="password" type="password" placeholder="*******" />
            </FormControl>
            <Button
              type="submit"
              colorScheme="teal"
              variant="outline"
              width="full"
              mt={4}
            >
              Sign In
            </Button>
          </form>
        </Box>
      </Box>
      <Tag position="absolute" bottom={5} colorScheme="blue">
        <Text>Note : use Your Name with any Password, I Let You Enter!</Text>
      </Tag>
    </Flex>
  );
};

export default Login;
