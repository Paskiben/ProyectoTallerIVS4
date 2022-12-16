import Head from "next/head";
import Link from "next/link";
import { Flex, HStack, Text, Divider, Image, Grid, GridItem, Select, AspectRatio} from "@chakra-ui/react";
import { useState } from "react";
import Script from "next/script";

export default function Nueve(){
    const [value, setValue] = useState("9101");


    return (
        
        <>
            <Head>
                <title>9000</title>
            </Head>
            <Flex as="topbar" bgGradient="linear(to-r, #e33e2e, #f7c21c)" h="5vh">
            </Flex>
            <Grid
                as="content"
                h="100vh"
                w="full"
                bg="#161818"
                alignItems="center"
                padding="3vh"


                templateColumns="repeat(5,1fr)"
                gap={4}
            >
            <GridItem colSpan={1} height="full" border="0px" borderColor="white" >
                    <Select id="salas" selectedoptioncolor="yellow" color="black" bg="white" colorScheme={"purple"} borderColor={"orange"} 
                            onChange={(e) => {
                            setValue(e.target.value);
                                }}>
                        <option value="9101" selected>9101</option>
                        <option value="9102">9102</option>
                        <option value="9103">9103</option>
                        <option value="9104">9104</option>
                    </Select>
            </GridItem>
            <GridItem colSpan={4} align="center" >
                <Text color ="white"> Horario sala {value}</Text>
                
                <iframe
                        src={"showschedule?sala="+value+"&edificio=9000"}
                        id="Schedule"
                        allowTransparency="true"
                        frameborder="0px"
                        width="90%"
                        height="500">
                </iframe>
                
            </GridItem>
            </Grid>
            <HStack as="footer" h="15vh" bg="#161818" alignItems="center" border="0px">
                <Image src="./images/KS.png" w="25vh" />
                <Divider orientation="vertical" color="white"></Divider>
                <Link
                    href={{
                        pathname: "https://www.uach.cl/inicio-uach",
                    }}
                >
                    <a target="_blank">
                        <Image src="https://cdn.discordapp.com/attachments/1022221381850632395/1034842785032970320/Logoblancopng.png" w="25vh" />
                    </a>
                </Link>

            </HStack>
        </>
      );
};