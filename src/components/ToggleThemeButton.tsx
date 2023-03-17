import { Box, Button, useColorMode, Icon } from "@chakra-ui/react";
import { IoMoon, IoSunny } from "react-icons/io5";

const ToggleThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <Button onClick={toggleColorMode}>
        <Icon as={colorMode === "light" ? IoMoon : IoSunny} />
      </Button>
    </Box>
  );
};

export default ToggleThemeButton;
