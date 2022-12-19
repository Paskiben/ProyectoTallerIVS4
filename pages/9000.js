import Head from "next/head";
import Link from "next/link";
import { Flex, HStack, Text, Divider, Image, Grid, GridItem, Select, AspectRatio } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router.js"

export async function Salas(edificio) {
    if (edificio == undefined) return;
    let salas = await (await fetch("data/" + edificio + ".json")).json();
    for (let sala in salas)
        document.getElementById("salas").innerHTML += `<option key='${sala}' value='${sala}'>${sala}</option>`;
}


export default function Nueve() {

    let edificio = useRouter().query.edificio;
    if (edificio != undefined) Salas(edificio);

    function iframegen() {
        let value = document.getElementById("salas").value;
        document.getElementById("frameplace").innerHTML =
            `<iframe width="100%" height="100%" src="showschedule?sala=${value}&edificio=${edificio}" id="Schedule"></iframe>`
    }

    useEffect(() => { setTimeout(async () => { iframegen() }, 500) });

    return (

        <>
            <Head>
                <title>{edificio}</title>
            </Head>
            <Flex bgGradient="linear(to-r, #e33e2e, #f7c21c)" h="5vh">
                <Link href={"/test"}>
                    <a className="volver">
                        Volver
                    </a>
                </Link>
            </Flex>
            <Grid
                h="80vh"
                w="full"
                bg="blackAlpha.900"
                alignItems="center"
                padding="2vh"

                templateColumns="repeat(5,1fr)"
                gap={4}
            >

                <GridItem id="frameplace" colSpan={4} align="center" h="full" >
                </GridItem>

                <GridItem colSpan={1} height="full" border="0px" borderColor="white" >
                    <Select marginBottom="5vh" onChange={iframegen} id="salas" selectedoptioncolor="yellow" color="blackAlpha.900" bg="white" colorScheme={"purple"} borderColor={"orange"}>
                    </Select>
                    <Flex w="full" h="full" as="iframe" src="./ajaxInstancias"></Flex>
                </GridItem>

            </Grid>
            <HStack as="footer" h="15vh" bg="blackAlpha.900" alignItems="center" border="0px">
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