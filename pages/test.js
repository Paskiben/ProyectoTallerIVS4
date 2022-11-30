import { Flex, HStack, Text, Divider, Image, Grid, GridItem, Select, } from "@chakra-ui/react";
import Link from "next/link";

import Head from "next/head";

export default function Test() {

    const bgColor = "#161818";


    return (
        <>
            <Head>
                <title>Edificios</title>
                <link rel="icon" href="/kumble.ico" />
            </Head>
            <Flex as="topbar" bgGradient="linear(to-r, #e33e2e, #f7c21c)" h="5vh">
            </Flex>

            <Grid
                as="content"
                h="80vh"
                w="full"
                bg="#161818"
                alignItems="center"
                padding="3vh"


                templateRows="repeat(1,1fr)"
                templateColumns="repeat(2,1fr)"
                gap={4}
            >

                <GridItem colSpan={1} height="full">
                    <Text color="red">

                    </Text>
                </GridItem>

                <GridItem colSpan={1} height="full" border="0px" borderColor="white" >
                    <Select selectedoptioncolor="yellow" color="white" bg="black" colorScheme={"purple"} borderColor={"red"}>
                        <option className="numeros" value="6000" >6000</option>
                        <option className="numeros" value="9000">9000</option>
                        <option className="numeros" value="11000">11000</option>
                        <option className="numeros" value="2000">2000</option>
                        <option className="numeros" value="10000">1000</option>
                        <option className="numeros" value="4000">4000</option>
                        <option className="numeros" value="14000">14000</option>
                    </Select>
                </GridItem>

                <div id="scroll">
                    <div id="edificios">
                        <Link
                            href={{
                                pathname: "/buildings",
                            }}
                        >
                            <a>
                                <img id="hola" src="/images/9k.jpg" alt="" />
                            </a>
                        </Link>

                        <Link
                            href={{
                                pathname: "/buildings",
                            }}
                        >
                            <a>
                                <img id="img2" src="/images/8k.jpg" alt="" />
                            </a>
                        </Link>

                    </div>

                    <div id="edificios">
                        <a href="https://www.google.com/">
                            <img id="hola" src="/images/7k.jpeg" alt="" />
                        </a>
                        <a href="https://www.youtube.com/">
                            <img id="img2" src="/images/2k.jpg" alt="" />
                        </a>
                    </div>

                    <div id="edificios">
                        <a href="https://www.google.com/">
                            <img id="hola" src="/images/9k.jpg" alt="" />
                        </a>
                        <a href="https://www.youtube.com/">
                            <img id="img2" src="/images/10k.jpg" alt="" />
                        </a>
                    </div>

                    <div id="edificios">
                        <a href="https://www.google.com/">
                            <img id="hola" src="/images/4k.jpeg" alt="" />
                        </a>
                        <a href="https://www.youtube.com/">
                            <img id="img2" src="/images/11k.jpeg" alt="" />
                        </a>
                    </div>

                    <div id="edificios">
                        <a href="https://www.google.com/">
                            <img id="hola" src="/images/6k.jpeg" alt="" />
                        </a>
                        <a href="https://www.youtube.com/">
                            <img id="img2" src="/images/13k.jpeg" alt="" />
                        </a>
                    </div>

                    <div id="edificios">
                        <a href="https://www.google.com/">
                            <img id="hola" src="/images/3k.jpeg" alt="" />
                        </a>
                        <a href="https://www.youtube.com/">
                            <img id="img2" src="/images/gym.jpeg" alt="" />
                        </a>
                    </div>

                    <div id="edificios">
                        <a href="https://www.google.com/">
                            <img id="hola" src="/images/14k.jpg" alt="" />
                        </a>

                    </div>


                </div>
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
    )

}