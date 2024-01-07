import { Flex, Box, Button, Icon, Input } from "@chakra-ui/react";
import { FaBaby, FaBath } from "react-icons/fa";
import { FaTent, FaPencil } from "react-icons/fa6";
import { GiForkKnifeSpoon } from "react-icons/gi";
// import { useNavigate } from "react-router-dom";

const useIcons = [
    {
        name: "Baby",
        icon: FaBaby,
        path: "/baby"
    },
    {
        name: "Bath",
        icon: FaBath,
        path: "/bath"
    },
    {
        name: "Tent",
        icon: FaTent,
        path: "/outdoor"
    },
    {
        name: "Pencil",
        icon: FaPencil,
        path: "/stationary"
    },
    {
        name: "kitchen",
        icon: GiForkKnifeSpoon,
        path: "/kitchen"
    }
  ];

export const MainIcons = () => {
    // const navigate = useNavigate();
    // icon
    return (
        <>
        <Input placeholder='Future Function' mt={2} mb={2} ml={2} />
        {useIcons.map((item) => (
            <>
                    {/* <Button variant="ghost" onClick={() => navigate(item.path)}> */}
            <Icon as={item.icon} w={20} h={20} ml={2} mr={10}/>
                    {/* Show name */}
            </>
        ))}
        </>
    )
}