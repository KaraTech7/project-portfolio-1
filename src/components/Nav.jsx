import { Box, Button, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import styled from "@emotion/styled";
import { Text, useColorModeValue } from "@chakra-ui/react";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;
    position: absolute;
    left: 4px;
    top: 17px;
    > svg {
      transition: 200ms ease;
    }

    &:hover > svg {
      transform: rotate(20deg);
    }
  `;
  return (
    <>
      <Box position="absolute" top="4" right="4">
        <Button size="sm" onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Box>

      <LogoBox>
        {/* <FootprintIcon /> */}
        <Text
          color={useColorModeValue("gray.800", "whiteAlpha.900")}
          fontFamily='M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
          ml={3}
        >
          KARA
        </Text>
      </LogoBox>
    </>
  );
}
