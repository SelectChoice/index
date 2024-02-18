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
import { Diapers } from "./routes/Diapers";
import { BabyCars } from "./routes/BabyCar";
import { MelioCarbon } from "./routes/BabyCarList/MelioCarbon";

import { TopHeader } from "./components/TopHeader";
import { Home } from "./components/MainPage";


function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <Flex> */}
        {/* Githubpageにあげるときはbasename={process.env.PUBLIC_URL}が必要 */}
        {/* <BrowserRouter> */}
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <TopHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/baby" element={<Baby />} />
            <Route path="/baby/diaper" element={<Diapers />} />
            <Route path="/baby/babycar" element={<BabyCars />} />
            <Route path="/baby/babycar/meliocarbon" element={<MelioCarbon />} />
          </Routes>
        </BrowserRouter>
      {/* </Flex> */}
    </ChakraProvider>

  );
}

export default App;
