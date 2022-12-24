import { Button, HStack, Text, Divider, Image, Grid, Select, VStack, } from "@chakra-ui/react";
import Link from "next/link";
import Example from "./slide";

function openKumblesoftWeb() {
    window.location.href = "https://github.com/Paskiben/ProyectoTaller";
}

export function opciones() {
    let opciones = [];
    for (let num of [2, 3, 4, 6, 7, 8, 9, 10, 11, 13, 14])
        opciones.push(<option key={num} value={num + "000"}>{num + "000"}</option>);
    opciones.push(<option key={"gimnasio"} value="Gimnasio">Gimnasio</option>)
    return opciones;
}


export function irEdificio() {
    window.location.href = "edificio?edificio=" + document.getElementById("selectEdificio").value;
}

export default function Principal() {

    return (
        <>
            <section className="contenedor-fondo-animado">
                <div className="animacion">
                    <span className="uno"></span>
                    <span className="dos"></span>
                    <span className="tres"></span>
                    <span className="cuatro"></span>
                    <span className="uno"></span>
                    <span className="dos"></span>
                    <span className="tres"></span>
                    <span className="cuatro"></span>
                    <span className="uno"></span>
                    <span className="dos"></span>
                    <span className="tres"></span>
                    <span className="cuatro"></span>
                </div>
                <div>

                    <Grid
                        as="content"
                        h="full"
                        w="full"
                        alignItems="center"
                        templateColumns></Grid>

                    <VStack bgColor="#161818" h="50vh">
                        <Text fontSize={"3vh"} color="white" align={"center"}>Glassroom CUBE</Text>
                        <Example />
                    </VStack>

                    <HStack as="footer" h="30vh" bg="#161818" alignItems="center" border="0px">

                        <Text color="white" fontSize={"3vh"}>Ir a edificio:</Text>
                        <HStack h="30vh" w="50vh" bgColor="#161818">
                            <Select id="selectEdificio" color="gray">
                                {opciones()}
                            </Select>
                            <Button onClick={irEdificio} bgColor="orange" color="white">Ir</Button>
                        </HStack>
                    </HStack>
                    <HStack as="footer" h="5vh" border="0px">
                        <Button color="white" bgColor="blue.400" onClick={() => { window.location.href = "/manageInstances" }}>Mantenedor de instancias</Button>
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