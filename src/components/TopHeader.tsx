import { Flex, Heading, Image } from "@chakra-ui/react";
import LogoImage from "../images/color_yoko.png";

export const TopHeader = () => (
    <Flex as="header" position="fixed" bg="gray.100" top={0} width="full" height="100px" shadow="sm" py={4} px={8} > 
        <Image sizes="100px" objectFit="cover" src={LogoImage} alt="SelectxChoice Logo"/>
        <Heading size="lg" px={4} py={4} textAlign="center">Select x Choice</Heading>
    </Flex>
)