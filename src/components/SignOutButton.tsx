import { Button } from "@chakra-ui/react";
import { useAuth } from "context/auth";
import { localStorageManage } from "utils";

type Props = {};

const SignOutButton = (props: Props) => {
  const { setUserStatus } = useAuth();
  const onSignOut = () => {
    localStorageManage(false);
    setUserStatus(false, "");
  };
  return <Button onClick={onSignOut}>SignOut</Button>;
};

export default SignOutButton;
