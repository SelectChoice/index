import { Box, Button } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { DiaperDiscription } from "../organisms/DiaperDiscription";

import PampersImg from "../images/pampers.jpg";
import MoonyImg from "../images/moony.jpg";


import Youtube from "react-youtube";
import ReactPlayer from "react-player";

const diaperItems = [
    {
        id: 0,
        imageName: PampersImg,
        productName: "Pampers",
        path: "/"
    },
    {
        id: 1,
        imageName: MoonyImg,
        productName: "Moony",
        path: "/"
    },
];


export const Diapers = () => {
    const navigate = useNavigate();

    return (
        <>
            <Box textAlign="center" fontSize="lg" mt="100px">
                Diapers Products
            </Box>
            <ReactPlayer url={"https://www.youtube.com/watch?v=i1LUeyn9Kng"} width={"260px"} height={"146.25px"}/>
            {/* <Youtube videoId="i1LUeyn9Kng" /> */}

            {diaperItems.map((item) => (
                <DiaperDiscription
                    id={item.id}
                    imageName={item.imageName}
                    productName={item.productName}
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