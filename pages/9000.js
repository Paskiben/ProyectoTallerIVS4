import Head from "next/head";
import Link from "next/link";
import { Flex, HStack, Text, Divider, Image, Grid, GridItem, Select, AspectRatio } from "@chakra-ui/react";
import { useEffect } from "react";
import { useRouter } from "next/router.js"
import { Button, ButtonGroup } from '@chakra-ui/react'
import { IoArrowUndoOutline } from "react-icons/io5";
import Script from "next/script";


export async function Salas(edificio) {
    if (edificio == undefined) return;
    let salas = await (await fetch("data/" + edificio + ".json")).json();
    for (let sala in salas)
        document.getElementById("salas").innerHTML += `<option key='${sala}' value='${sala}'>${sala}</option>`;
}

function openKumblesoftWeb() {
    window.location.href = "https://github.com/Paskiben/ProyectoTaller";
}

export default function Nueve() {

    var edificio = useRouter().query.edificio;
    if (edificio != undefined) Salas(edificio);

    function iframegen() {
        let value = document.getElementById("salas").value;
        console.log(value);
        document.getElementById("frameplace").innerHTML =
            `<iframe width="100%" height="100%" src="showschedule?sala=${value}&edificio=${edificio}" id="Schedule"></iframe>`;
        document.getElementById("ajaxInstancias").setAttribute("src",
            "./ajaxInstancias?edificio=" + edificio + "&sala=" + value);

        toLocal();
    }

    async function toLocal() {

        let sala = document.getElementById("salas").value;
        if (sala == undefined || edificio == undefined) return;

        const info = await (await fetch('./data/instancias.json')).json();
        const data = (await (await fetch('./data/' + edificio + '.json')).json())[sala];

        if (!localStorage.getItem(sala))
            localStorage.setItem(sala, JSON.stringify(data));

        if (!localStorage.getItem('instancias'))
            localStorage.setItem('instancias', JSON.stringify(info));

    }

    function volver() {
        window.location.href = "/";
    }

    useEffect(() => {
        setTimeout(async () => {
            iframegen();
        }, 400)
    });


    return (

        <>
            <Script>{toLocal()}</Script>
            <Head>
                <title>{edificio}</title>
            </Head>
            <Flex bgGradient="linear(to-r, #e33e2e, #f7c21c)" h="5vh">
                <ButtonGroup w={'120px'} h={'32px'} className="volver" bg={"#161818"} borderBottomRadius="10px" >
                    <Button onClick={volver} w={'120px'} h={'32px'} leftIcon={<IoArrowUndoOutline />} colorScheme='black' variant='solid'>
                        Volver
                    </Button>
                </ButtonGroup>
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

                <GridItem id="frameplace" colSpan={4} align="center" h="full">
                </GridItem>

                <GridItem colSpan={1} height="full" border="0px" borderColor="white" >
                    <Select bgColor="blackAlpha.900" color="gray" marginBottom="2vh" onChange={iframegen} id="salas" colorScheme={"purple"} borderColor={"orange"}>
                    </Select>
                    <Flex id="ajaxInstancias" w="full" h="full" as="iframe" src={"./ajaxInstancias?edificio=" + edificio + "&sala=" + 9101}></Flex>
                </GridItem>

            </Grid>

            <HStack as="footer" h="15vh" bg="blackAlpha.900" alignItems="center" border="0px">
                <Image src="./images/KS.png" w="25vh" onClick={openKumblesoftWeb} />
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