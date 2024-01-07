import { Box, Button } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { Category } from "../organisms/Category";

// import images
import OmutsuImg from "../images/omutsuirasutoya.png";
import BabycarImg from "../images/babycarirasutoya.png";

// import Youtube from "react-youtube";

const babyItems = [
    {
        id: 0,
        imageName: OmutsuImg,
        categoryName: "Diapers",
        path: "/omutsu"
    },
    {
        id: 1,
        imageName: BabycarImg,
        categoryName: "Baby Car",
        path: "/babycar"
    },
];

export const Baby = () => {
    const navigate = useNavigate();

    return (
        <>
            <Box textAlign="center" fontSize="lg" mt="100px">
                BABY Goods
            </Box>

            {babyItems.map((item) => (
                <Category
                    id={item.id}
                    imageName={item.imageName}
                    categoryName={item.categoryName}
                    onClick={() => navigate(item.path)}
                />
              ))}

            {/* <Box w="20vw" m="20px">
            {babyItems.map((item) => (
                <label>
                    <Box mt="10px" ml="10px">
                        <Button colorScheme="blue" variant="ghost" onClick={() => navigate(item.path)}>
                            {item.categoryName}
                        </Button>
                    </Box>
                </label>
              ))}
            </Box> */}
            
            {/* <Youtube videoId="Ypx_A6No600" /> */}
        </>
    )
}