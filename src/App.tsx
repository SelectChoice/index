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

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Baby } from "./routes/Baby";

import { TopHeader } from "./components/TopHeader";
import { Home } from "./components/MainPage";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <TopHeader />
      {/* <Flex> */}
        {/* Githubpageにあげるときはbasename={process.env.PUBLIC_URL}が必要 */}
        <BrowserRouter>
          <Routes>
            <Route path={`/`} element={<Home />} />
            <Route path={`/baby`} element={<Baby />} />
          </Routes>
        </BrowserRouter>
      {/* </Flex> */}
    </ChakraProvider>

  );
}

export default App;
