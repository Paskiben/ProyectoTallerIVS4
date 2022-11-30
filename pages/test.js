import { Flex, HStack, Text, Divider, Image, Grid, GridItem, Select, } from "@chakra-ui/react";
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
                        <img id="hola" src="/images/9k.jpg" alt="" />
                        <img id="img2" src="/images/10k.jpg" alt="" />

                    </div>

                    <div id="edificios">

                    </div>
                    <div id="edificios">
                        <img id="hola" src="/images/9k.jpg" alt="" />
                        <img id="img2" src="/images/10k.jpg" alt="" />
                    </div>

                    <div id="edificios">
                        <img id="hola" src="/images/9k.jpg" alt="" />
                        <img id="img2" src="/images/10k.jpg" alt="" />
                    </div>

                </div>
            </Grid>


            <HStack as="footer" h="15vh" bg="#161818" alignItems="center" border="0px">
                <Image src="./images/KS.png" w="25vh" />
                <Divider orientation="vertical" color="white"></Divider>
                <Image src="https://cdn.discordapp.com/attachments/1022221381850632395/1034842785032970320/Logoblancopng.png" w="25vh" />
            </HStack>
        </>
    )

}