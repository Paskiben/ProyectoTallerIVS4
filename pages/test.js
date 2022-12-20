import { Flex, HStack, Text, Divider, Image, Grid, GridItem, Select, } from "@chakra-ui/react";
import Link from "next/link";
import useRouter from "next/router.js"
import Head from "next/head";
import Example from "./slide";



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
            <Flex bgGradient="linear(to-r, #e33e2e, #f7c21c)" h="5vh">
            </Flex>

            <Grid

                h="80vh"
                w="full"
                bg="#161818"
                padding="0vh"
            >

                <GridItem height="full">
                    <Example />
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
    )

}