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


    var [value, setValue] = useState("9101");

    let edificio = useRouter().query.edificio;
    if (edificio != undefined) Salas(edificio);

    function iframegen() {
        value = document.getElementById("salas").value;
        document.getElementById("frameplace").innerHTML = `<iframe src="showschedule?sala=${value}&edificio=${edificio}" id="Schedule" width="90%" height="500"></iframe>`
    }

    useEffect(() => { setTimeout(async () => { iframegen() }, 500) });

    return (

        <>
            <Head>
                <title>Edificio</title>
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
                bg="#161818"
                alignItems="center"
                padding="3vh"

                templateColumns="repeat(5,1fr)"
                gap={4}
            >
                <GridItem colSpan={1} height="full" border="0px" borderColor="white" >
                    <Select onChange={iframegen} id="salas" selectedoptioncolor="yellow" color="black" bg="white" colorScheme={"purple"} borderColor={"orange"}>
                    </Select>
                </GridItem>
                <GridItem colSpan={4} align="center" >
                    <Text color="white"> Horario sala </Text>
                    <div id="frameplace"></div>
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