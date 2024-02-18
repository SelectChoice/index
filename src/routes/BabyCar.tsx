import { Box, Flex } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { BabyCarDescription } from "../organisms/BabyCarDescription";

import MelioImg from "../images/meliocarbon.png";


import Youtube from "react-youtube";
import ReactPlayer from "react-player";

const babycarItems = [
    {
        id: 0,
        imageName: MelioImg,
        productName: "メリオカーボン",
        brandName: "サイベックス",
        link: "meliocarbon"
        // url: "https://www.youtube.com/watch?v=i1LUeyn9Kng"
    },
    {
        id: 1,
        imageName: MelioImg,
        productName: "オルフェオ",
        brandName: "サイベックス",
        link: "orfeo"
        // url: "https://www.youtube.com/watch?v=q2mcPR4NLL0"
    },
    {
        id: 2,
        imageName: MelioImg,
        productName: "ビングル BB3",
        brandName: "ピジョン",
        link: "bingle"
        // url: "https://www.youtube.com/watch?v=q2mcPR4NLL0"
    },
    {
        id: 3,
        imageName: MelioImg,
        productName: "YOYO2 6+",
        brandName: "ベビーゼン",
        link: "yoyo2"
        // url: "https://www.youtube.com/watch?v=q2mcPR4NLL0"
    },
    {
        id: 4,
        imageName: MelioImg,
        productName: "ベビーバギー MA-o",
        brandName: "ジェイ・ティー・シー",
        link: "ma-o"
        // url: "https://www.youtube.com/watch?v=q2mcPR4NLL0"
    },
    {
        id: 5,
        imageName: MelioImg,
        productName: "ホワイトレーベル スゴカルminimo エッグショック DM ",
        brandName: "コンビ",
        link: "sugocalminimo_eggdm"
        // url: "https://www.youtube.com/watch?v=q2mcPR4NLL0"
    },
    {
        id: 6,
        imageName: MelioImg,
        productName: "アイゴワンハンド",
        brandName: "パーリ",
        link: "aigoonehand"
        // url: "https://www.youtube.com/watch?v=q2mcPR4NLL0"
    },
    {
        id: 7,
        imageName: MelioImg,
        productName: "デ・ヨーネ ドッチモオート",
        brandName: "西松屋",
        link: "docchimoauto"
        // url: "https://www.youtube.com/watch?v=q2mcPR4NLL0"
    },
    {
        id: 8,
        imageName: MelioImg,
        productName: "マジカルエアー クッション AD",
        brandName: "アップリカ",
        link: "magical_aircushion_ad"
        // url: "https://www.youtube.com/watch?v=q2mcPR4NLL0"
    },
    {
        id: 9,
        imageName: MelioImg,
        productName: "ラクーナ クッション AF",
        brandName: "アップリカ",
        link: "luxuna_cushion_af"
        // url: "https://www.youtube.com/watch?v=q2mcPR4NLL0"
    },
    {
        id: 10,
        imageName: MelioImg,
        productName: "IXXA",
        brandName: "ヌナ",
        link: "ixxa"
        // url: "https://www.youtube.com/watch?v=q2mcPR4NLL0"
    },        
    {
        id: 11,
        imageName: MelioImg,
        productName: "スゴカルα compact エッグショック AW",
        brandName: "コンビ",
        link: "sugocal_compact_eggaw"
        // url: "https://www.youtube.com/watch?v=q2mcPR4NLL0"
    },    
    {
        id: 12,
        imageName: MelioImg,
        productName: "ホワイトレーベル スゴカルα 4キャス Light エッグショック HT",
        brandName: "コンビ",
        link: "sugocalalpha_light_egght"
        // url: "https://www.youtube.com/watch?v=q2mcPR4NLL0"
    }, 
    {
        id: 13,
        imageName: MelioImg,
        productName: "スゴカルα Light エッグショック AX",
        brandName: "コンビ",
        link: "sugocalalpha_light_eggax"
        // url: "https://www.youtube.com/watch?v=q2mcPR4NLL0"
    }, 
    {
        id: 14,
        imageName: MelioImg,
        productName: "スゴカルエアー エッグショック AM",
        brandName: "コンビ",
        link: "sugocalair_eggam"
        // url: "https://www.youtube.com/watch?v=q2mcPR4NLL0"
    }, 
    {
        id: 15,
        imageName: MelioImg,
        productName: "クルリー",
        brandName: "アップリカ",
        link: "cururee"
        // url: "https://www.youtube.com/watch?v=q2mcPR4NLL0"
    },
    {
        id: 16,
        imageName: MelioImg,
        productName: "Acbee plus AN",
        brandName: "アップリカ",
        link: "acbeeplus_an"
        // url: "https://www.youtube.com/watch?v=q2mcPR4NLL0"
    },
    {
        id: 17,
        imageName: MelioImg,
        productName: "Acbee JM",
        brandName: "アップリカ",
        link: "acbee_jm"
        // url: "https://www.youtube.com/watch?v=q2mcPR4NLL0"
    }, 
    {
        id: 18,
        imageName: MelioImg,
        productName: "シティライト Rアップ",
        brandName: "グレコ",
        link: "citilite_r_up"
        // url: "https://www.youtube.com/watch?v=q2mcPR4NLL0"
    },
    {
        id: 19,
        imageName: MelioImg,
        productName: "J is for Jeep スポーツ スタンダード",
        brandName: "ジープ",
        link: "jeep_sports_standard"
        // url: "https://www.youtube.com/watch?v=q2mcPR4NLL0"
    },
    {
        id: 20,
        imageName: MelioImg,
        productName: "ランフィRB3",
        brandName: "ピジョン",
        link: "runfee_rb3"
        // url: "https://www.youtube.com/watch?v=q2mcPR4NLL0"
    },
    {
        id: 21,
        imageName: MelioImg,
        productName: "オプティア クッション グレイス",
        brandName: "アップリカ",
        link: "optia_cushion_grace"
        // url: "https://www.youtube.com/watch?v=q2mcPR4NLL0"
    },
    {
        id: 22,
        imageName: MelioImg,
        productName: "ホワイトレーベル スゴカルα 4キャス Light エッグショック HS",
        brandName: "コンビ",
        link: "sugocalalpha_light_eggahs"
        // url: "https://www.youtube.com/watch?v=q2mcPR4NLL0"
    },
    {
        id: 23,
        imageName: MelioImg,
        productName: "バギーfanロングプラス",
        brandName: "西松屋",
        link: "buggyfanlongplus"
        // url: "https://www.youtube.com/watch?v=q2mcPR4NLL0"
    },
    {
        id: 24,
        imageName: MelioImg,
        productName: "Age エッグショック AK",
        brandName: "コンビ",
        link: "age_eggak"
        // url: "https://www.youtube.com/watch?v=q2mcPR4NLL0"
    },
    {
        id: 25,
        imageName: MelioImg,
        productName: "ホワイトレーベル ラベリタ エッグショック AL",
        brandName: "コンビ",
        link: "laverita_eggal"
        // url: "https://www.youtube.com/watch?v=q2mcPR4NLL0"
    },
    {
        id: 26,
        imageName: MelioImg,
        productName: "デ・ヨーネ レジェ e",
        brandName: "西松屋",
        link: "leger_e"
        // url: "https://www.youtube.com/watch?v=q2mcPR4NLL0"
    },
    {
        id: 27,
        imageName: MelioImg,
        productName: "スートプラス・SB2+",
        brandName: "ピジョン",
        link: "suuuto_sb2"
        // url: "https://www.youtube.com/watch?v=q2mcPR4NLL0"
    },
    {
        id: 28,
        imageName: MelioImg,
        productName: "ノートアール NB0-R",
        brandName: "ピジョン",
        link: "nautr_nb0-r"
        // url: "https://www.youtube.com/watch?v=q2mcPR4NLL0"
    },
    {
        id: 29,
        imageName: MelioImg,
        productName: "クイッド2",
        brandName: "イングリッシーナ",
        link: "quid2"
        // url: "https://www.youtube.com/watch?v=q2mcPR4NLL0"
    },
    {
        id: 30,
        imageName: MelioImg,
        productName: "ウィザード",
        brandName: "パーリ",
        link: "wizard"
        // url: "https://www.youtube.com/watch?v=q2mcPR4NLL0"
    },
    {
        id: 31,
        imageName: MelioImg,
        productName: "Acbee plus AO",
        brandName: "コンビ",
        link: "acbeeplus_a0"
        // url: "https://www.youtube.com/watch?v=q2mcPR4NLL0"
    },
    {
        id: 32,
        imageName: MelioImg,
        productName: "ビー6",
        brandName: "バガブー",
        link: "bee6"
        // url: "https://www.youtube.com/watch?v=q2mcPR4NLL0"
    },
    {
        id: 33,
        imageName: MelioImg,
        productName: "ルーチェフリー",
        brandName: "アップリカ",
        link: "lucefree"
        // url: "https://www.youtube.com/watch?v=q2mcPR4NLL0"
    },
    {
        id: 34,
        imageName: MelioImg,
        productName: "シティミニ",
        brandName: "ベビージョガー",
        link: "citymini"
        // url: "https://www.youtube.com/watch?v=q2mcPR4NLL0"
    },
    {
        id: 35,
        imageName: MelioImg,
        productName: "スゴカルSwitch plus エッグショック ロッタ シレナ AS",
        brandName: "コンビ",
        link: "sugocalplus_eggas"
        // url: "https://www.youtube.com/watch?v=q2mcPR4NLL0"
    },
    {
        id: 36,
        imageName: MelioImg,
        productName: "ホワイトレーベル スゴカルα 4キャス compact エッグショック HS",
        brandName: "sugocalplus_egghs",
        link: "sugocalplus_compact_egghs"
        // url: "https://www.youtube.com/watch?v=q2mcPR4NLL0"
    },
    {
        id: 37,
        imageName: MelioImg,
        productName: "リベル (2024)",
        brandName: "サイベックス",
        link: "libelle-2024"
        // url: "https://www.youtube.com/watch?v=q2mcPR4NLL0"
    },
];


export const BabyCars = () => {
    const navigate = useNavigate();

    //新しいタブで開く
    const onClickNewWindow = (videoUrl: string) => {
        window.open(videoUrl, '_blank');
    }

    return (
        <>
            <Box textAlign="center" fontSize="lg" mt="100px">
                BabyCar Products
            </Box>
            <ReactPlayer url={"https://www.youtube.com/watch?v=smI829OZDDE"} width={"300px"} height={"168.75px"}/>
            {/* <Youtube videoId="i1LUeyn9Kng" /> */}

            {babycarItems.map((item) => (
                <Flex onClick={() => navigate(item.link)}>
                    <BabyCarDescription
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