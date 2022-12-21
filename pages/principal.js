import { Button, Flex, HStack, Text, Divider, Image, Grid, GridItem, Select, VStack, } from "@chakra-ui/react";
import Link from "next/link";
import Head from "next/head";
import Example from "./slide";

function openKumblesoftWeb() {
    window.location.href = "https://github.com/Paskiben/ProyectoTaller";
}

export function opciones() {
    let opciones = [];
    for (let num of [2, 3, 4, 6, 7, 8, 9, 10, 11, 13, 14])
        opciones.push(<option value={num + "000"}>{num + "000"}</option>);
    opciones.push(<option value="Gimnasio">Gimnasio</option>)
    return opciones;
}


export function irEdificio() {
    window.location.href = "9000?edificio=" + document.getElementById("selectEdificio").value;
}

export default function Principal() {

    return (
        <>
            <Head>
                <title>Glassroom</title>
                <link rel="icon" href="/kumble.ico" />
            </Head>
            <Flex bgGradient="linear(to-r, #e33e2e, #f7c21c)" h="5vh">
                <Image src="cooltext425965679077952.png"></Image>
            </Flex>

            <VStack bgColor="#161818" h="80vh">
                <Text color="white" fontSize={"30"}>Ir a edificio:</Text>
                <HStack>
                    <Select id="selectEdificio" color="gray">
                        {opciones()}
                    </Select>
                    <Button onClick={irEdificio} bgColor="orange" color="white">Ir</Button>
                </HStack>
                <Text color="white" fontSize="30">Por imagenes:</Text>
                <Example />
            </VStack>


            <HStack as="footer" h="15vh" bg="#161818" alignItems="center" border="0px">
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
    )

}