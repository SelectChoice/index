import {
    Box,
    Stack,
    FormControl,
    FormLabel,
    Input
} from "@chakra-ui/react";

import { memo, FC } from "react";
import ReactPlayer from "react-player";

type Props = {
    productName: string;
    brandName: string;
    type: string;
    weight: number;
    ages: string;
    capacity: number;
    direction: string;
    wheelType: string;
    wheelNum: string;
    angle: string;
    descriptionURL: string;
    vibrationURL: string;
}

export const BabyCarDetail: FC<Props> = memo((props) => {
    const {productName, brandName, type, weight, ages, capacity, direction, wheelType, wheelNum, angle, descriptionURL, vibrationURL} = props;

    return (
        <>
        <Box textAlign="center" fontSize="lg" mt="100px">
            商品説明
        </Box>
        <ReactPlayer url={descriptionURL} width={"300px"} height={"168.75px"}/>
        <Box textAlign="center" fontSize="lg" mt="100px">
            振動検証
        </Box>
        <ReactPlayer url={vibrationURL} width={"300px"} height={"168.75px"}/>
            
        
        <FormControl mt="10px" ml="10px">
            <FormLabel>名前</FormLabel>
            <Input value={productName} isReadOnly />
            {/* {/* <Input value={user?.username} isReadOnly /> */}
        </FormControl>
        <FormControl ml="10px">
            <FormLabel>ブランド</FormLabel>
            <Input value={brandName} isReadOnly />
        </FormControl>
        <FormControl ml="10px">
            <FormLabel>タイプ</FormLabel>
            <Input value={type} isReadOnly />
        </FormControl>
        <FormControl ml="10px">
            <FormLabel>重さ</FormLabel>
            <Input value={`${weight} kg`} isReadOnly />
        </FormControl>
        <FormControl ml="10px">
            <FormLabel>対象年齢</FormLabel>
            <Input value={ages} isReadOnly />
        </FormControl>
        <FormControl ml="10px">
            <FormLabel>耐荷重</FormLabel>
            <Input value={`${capacity} kg`} isReadOnly />
        </FormControl>
        <FormControl ml="10px">
            <FormLabel>シート向き</FormLabel>
            <Input value={direction} isReadOnly />
        </FormControl>
        <FormControl ml="10px">
            <FormLabel>タイヤタイプ</FormLabel>
            <Input value={wheelType} isReadOnly />
        </FormControl>
        <FormControl ml="10px">
            <FormLabel>タイヤ数</FormLabel>
            <Input value={wheelNum} isReadOnly />
        </FormControl>
        <FormControl ml="10px">
            <FormLabel>リクライニング</FormLabel>
            <Input value={angle} isReadOnly />
        </FormControl>
    </>
    )

})
