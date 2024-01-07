import { Box, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

// import Youtube from "react-youtube";

const babyItems = [
    {
        name: "Diapers",
        path: "diapers"
    },
    {
        name: "Baggies",
        path: "baggies"
    },
    {
        name: "Strings",
        path: "strings"
    }
  ];

export const Baby = () => {
    const navigate = useNavigate();

    return (
        <>
            <Box textAlign="center" fontSize="lg" mt="100px">
                BABY Goods
            </Box>
            <Box w="20vw" m="20px">
            {babyItems.map((item) => (
                <label>
                    <Box mt="10px" ml="10px">
                        <Button colorScheme="blue" variant="ghost" onClick={() => navigate(item.path)}>
                            {item.name}
                        </Button>
                    </Box>
                </label>
              ))}
            </Box>
            
            {/* <Youtube videoId="Ypx_A6No600" /> */}
        </>
    )
}