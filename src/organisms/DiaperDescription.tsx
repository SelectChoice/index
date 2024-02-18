import { Box, Stack, Text, Image } from "@chakra-ui/react";
import { memo, FC } from "react";

type Props = {
  id: number;
  imageName: any; //.pngから取っている画像の名前
  productName: string; //商品名
  brandName: string;
  // onClick: (videoUrl: string) => void; //onClickがなくてもOKなので?
};

// memo化する
export const DiaperDescription: FC<Props> = memo((props) => {
  const { id, imageName, productName, brandName } = props;
  return (
    <Box
      w="260px"
      h="260px"
      bg="w"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
    >
      <Stack textAlign="center">
        <Image
          borderRadius="full"
          boxSize="160px"
          src={imageName}
          alt={productName}
          m="auto"
        />
        <Text fontSize="lg" fontWeight="bold">
          商品名: {productName}
        </Text>
        <Text fontSize="lg" fontWeight="bold">
          ブランド名: {brandName}
        </Text>
        {/* <Text fontSize="sm" color="gray">
          {fullName}
        </Text> */}
      </Stack>
    </Box>
  );
});
