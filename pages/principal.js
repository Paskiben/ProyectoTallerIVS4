import { Button, Flex, HStack, Stack, Text, Divider, Image, Grid, GridItem, Select, VStack, } from "@chakra-ui/react";
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
    window.location.href = "edificio?edificio=" + document.getElementById("selectEdificio").value;
}

export default function Principal() {

    return (
        <>
            <section class="contenedor-fondo-animado">
                <div class="animacion">
                    <span class="uno"></span>
                    <span class="dos"></span>
                    <span class="tres"></span>
                    <span class="cuatro"></span>
                    <span class="uno"></span>
                    <span class="dos"></span>
                    <span class="tres"></span>
                    <span class="cuatro"></span>
                    <span class="uno"></span>
                    <span class="dos"></span>
                    <span class="tres"></span>
                    <span class="cuatro"></span>
                </div>
                <div>

                    <Grid
                        as="content"
                        h="full"
                        w="full"
                        alignItems="center"
                        templateColumns></Grid>

                    <VStack bgColor="#161818" h="50vh">
                        <Text fontSize={"30px"} color="white" align={"center"}>Glassroom CUBE</Text>
                        <Example />
                    </VStack>

                    <HStack as="footer" h="35vh" bg="#161818" alignItems="center" border="0px">

                        <Text color="white" fontSize={"3vh"}>Ir a edificio:</Text>
                        <HStack h="30vh" w="50vh" bgColor="#161818">
                            <Select id="selectEdificio" color="gray">
                                {opciones()}
                            </Select>
                            <Button onClick={irEdificio} bgColor="orange" color="white">Ir</Button>
                        </HStack>
                    </HStack>

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
                </div>
            </section>
        </>
    )

}