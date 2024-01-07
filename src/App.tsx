import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Image,
  Flex,
  Button,
  Icon,
  Heading,
  Center,
} from "@chakra-ui/react"

import { TopHeader } from "./components/TopHeader";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <TopHeader />
      <Flex w="100vW" h="100wh">
        TEST
      </Flex>
    </ChakraProvider>
  );
}

export default App;
