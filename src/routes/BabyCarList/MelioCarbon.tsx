import {
    Box,
    Stack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormControl,
    FormLabel,
    Input
} from "@chakra-ui/react";

import { memo, FC } from "react";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";

import { BabyCarDetail } from "../../organisms/BabyCarDetail"

const MelioCarbonDetail = {
    productName: "メリオカーボン",
    brandName: "サイベックス (cybex)",
    type: "A",
    weight: 5.9,
    ages: "1~36ヶ月",
    capacity: 15,
    direction: "両対面",
    wheelType: "シングルタイヤ",
    wheelNum: "四輪",
    angle: "107〜166°",
    descriptionURL: "https://www.youtube.com/watch?v=53RDrEKo_9s",
    vibrationURL: "https://www.youtube.com/watch?v=Kw2fCbCU6RE",
}

export const MelioCarbon = () => {
    // const {productName, brandName, type, weight, ages, capacity, direction, wheelType, wheelNum, angle} = props;

    return (
    <>
        <BabyCarDetail 
            productName={MelioCarbonDetail.productName}
            brandName={MelioCarbonDetail.brandName}
            type={MelioCarbonDetail.type}
            weight={MelioCarbonDetail.weight}
            ages={MelioCarbonDetail.ages}
            capacity={MelioCarbonDetail.capacity}
            direction={MelioCarbonDetail.direction}
            wheelType={MelioCarbonDetail.wheelType}
            wheelNum={MelioCarbonDetail.wheelNum}
            angle={MelioCarbonDetail.angle}
            descriptionURL={MelioCarbonDetail.descriptionURL}
            vibrationURL={MelioCarbonDetail.vibrationURL}

        />
        {/* <Box textAlign="center" fontSize="lg" mt="100px">
            商品説明
        </Box>
        <ReactPlayer url={MelioCarbonDetail.descriptionURL} width={"260px"} height={"146.25px"}/>
        <Box textAlign="center" fontSize="lg" mt="100px">
            振動検証
        </Box>
        <ReactPlayer url={MelioCarbonDetail.vibrationURL} width={"260px"} height={"146.25px"}/>
            
        
        <FormControl ml="10px">
            <FormLabel>名前</FormLabel>
            <Input value={MelioCarbonDetail.productName} isReadOnly />
        </FormControl>
        <FormControl ml="10px">
            <FormLabel>ブランド</FormLabel>
            <Input value={MelioCarbonDetail.brandName} isReadOnly />
        </FormControl>
        <FormControl ml="10px">
            <FormLabel>タイプ</FormLabel>
            <Input value={MelioCarbonDetail.type} isReadOnly />
        </FormControl> */}
    </>
    )
}
