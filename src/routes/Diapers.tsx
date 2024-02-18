import { Box, Flex } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { DiaperDescription } from "../organisms/DiaperDescription";

import PampersImg from "../images/pampers.jpg";
import MoonyImg from "../images/moony.jpg";


import Youtube from "react-youtube";
import ReactPlayer from "react-player";

const diaperItems = [
    {
        id: 0,
        imageName: PampersImg,
        productName: "Pampers",
        brandName: "P&G",
        url: "https://www.youtube.com/watch?v=i1LUeyn9Kng"
    },
    {
        id: 1,
        imageName: MoonyImg,
        productName: "Moony",
        brandName: "ユニ・チャーム",
        url: "https://www.youtube.com/watch?v=q2mcPR4NLL0"
    },
];


export const Diapers = () => {
    const navigate = useNavigate();

    //新しいタブで開く
    const onClickNewWindow = (videoUrl: string) => {
        window.open(videoUrl, '_blank');
    }

    return (
        <>
            <Box textAlign="center" fontSize="lg" mt="100px">
                Diapers Products
            </Box>
            <ReactPlayer url={"https://www.youtube.com/watch?v=i1LUeyn9Kng"} width={"260px"} height={"146.25px"}/>
            {/* <Youtube videoId="i1LUeyn9Kng" /> */}

            {diaperItems.map((item) => (
                <Flex onClick={() => onClickNewWindow(`diapers/${item.url}`)}>
                    <DiaperDescription
                        id={item.id}
                        imageName={item.imageName}
                        productName={item.productName}
                        brandName={item.brandName}
                    />
                </Flex>
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