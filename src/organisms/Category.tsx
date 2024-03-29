import { Box, Stack, Text, Image } from "@chakra-ui/react";
import { memo, FC } from "react";

import { useNavigate } from "react-router-dom";

type Props = {
  id: number;
  imageName: any; //.pngから取っている画像の名前
  categoryName: string; //どのカテゴリーかを示す。オムツとかベビーカーとか
  path: string;
//   onClick?: () => void;
};

// memo化する
export const Category: FC<Props> = memo((props) => {
  const navigate = useNavigate();

  const { id, imageName, categoryName, path } = props;
  return (
    <Box
      w="260px"
      h="260px"
      bg="w"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={() => navigate(path)}
    >
      <Stack textAlign="center">
        <Image
          borderRadius="full"
          boxSize="160px"
          src={imageName}
          alt={categoryName}
          m="auto"
        />
        <Text fontSize="lg" fontWeight="bold">
          {categoryName}
        </Text>
        {/* <Text fontSize="sm" color="gray">
          {fullName}
        </Text> */}
      </Stack>
    </Box>
  );
});
