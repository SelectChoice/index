import { Flex, Heading, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import LogoImage from "../images/logoTop.png";

export const TopHeader = () => {
    const navigate = useNavigate();

    return (
    <>
        <Flex as="header" position="fixed" bg="gray.100" top={0} width="full" height="100px" shadow="sm" py={4} px={8} > 
            <Image sizes="100px" objectFit="cover" src={LogoImage} alt="SelectxChoice Logo" _hover={{ cursor: "pointer", opacity: 0.8 }} onClick={() => navigate("/")}/>
            {/* <Heading size="lg" px={4} py={4} textAlign="center">Select x Choice</Heading> */}
        </Flex>
    </>
    )
}