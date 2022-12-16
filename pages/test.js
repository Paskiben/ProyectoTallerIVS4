import { Flex, HStack, Text, Divider, Image, Grid, GridItem, Select, } from "@chakra-ui/react";
import Link from "next/link";

import Head from "next/head";

export default function Test() {

    const bgColor = "#161818";

    function nav(value) {
        if (value != "") {
            location.href = value
        };
    }
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


                <select name="seleccion" onchange="document.location=seleccion.value">
                    <option selected>Selecciona una opción</option>
                    <option value="https://www.google.com/">Opcion1</option>
                    <option value="https://www.google.com/">Opcion2</option>
                    <option value="https://www.google.com/">Opcion3</option>
                </select>


                <div id="scroll">
                    <div id="edificios">
                        <Link
                            href={{
                                pathname: "/9000",
                            }}
                        >
                            <a>
                                <img id="hola" src="/images/9k.jpg" alt="" />
                            </a>
                        </Link>

                        <Link
                            href={{
                                pathname: "/8000",
                            }}
                        >
                            <a>
                                <img id="img2" src="/images/8k.jpg" alt="" />
                            </a>
                        </Link>

                    </div>

                    <div id="edificios">
                        <Link href={{
                            pathname: "/7000",
                        }}>
                        <a>
                            <img id="hola" src="/images/7k.jpeg" alt="" />
                        </a>
                        </Link>
                        <Link href={{
                            pathname:"/2000"
                        }}>
                            <a>
                            <img id="img2" src="/images/2k.jpg" alt="" />
                            </a>
                        </Link>
                    </div>

                    <div id="edificios">
                        <Link href={{
                            pathname:"/10000"
                        }}>
                            <a>
                            <img id="img2" src="/images/10k.jpg" alt="" />
                            </a>
                        </Link>
                        <Link href={{
                            pathname:"/4000"
                        }}> 
                            <a>
                                <img id="hola" src="/images/4k.jpeg" alt="" />
                            </a>
                        </Link>
                    </div>

                    <div id="edificios">
                        
                        <Link href={{
                            pathname:"/11000"
                        }}>
                            <a>
                            <img id="img2" src="/images/11k.jpeg" alt="" />
                            </a>
                        </Link>
                        <Link href={{
                            pathname:"/6000"
                        }}>
                            <a>
                            <img id="hola" src="/images/6k.jpeg" alt="" />
                            </a>
                        </Link>
                    </div>

                    <div id="edificios">
                        
                        <Link href={{
                            pathname:"/13000"
                        }}>
                            <a>
                            <img id="img2" src="/images/13k.jpeg" alt="" />
                            </a>
                        </Link>
                        <Link href={{
                            pathname:"/3000"
                        }}>
                            <a>
                            <img id="hola" src="/images/3k.jpeg" alt="" />
                            </a>
                        </Link>
                    </div>

                    <div id="edificios">
                        
                        <Link href={{
                            pathname:"/gym"
                        }}>
                            <a>
                            <img id="img2" src="/images/gym.jpeg" alt="" />
                            </a>
                        </Link>
                        <Link href={{
                            pathname:"/14000"
                        }}> 
                            <a>
                            <img id="hola" src="/images/14k.jpg" alt="" />
                            </a>
                        </Link>
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