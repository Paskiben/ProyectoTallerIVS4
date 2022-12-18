import React, { useEffect } from "react";
import { Input, VStack, Box, Flex } from "@chakra-ui/react";

export default function Test() {

    function cambiar() {
        document.getElementById("resultadosDeBusqueda").setAttribute("src",
            "busqueda?profesor=" +
            (document.getElementById("Texto1").value == "" ? "NA" : document.getElementById("Texto1").value) +
            "&asignatura=" +
            (document.getElementById("Texto2").value == "" ? "NA" : document.getElementById("Texto2").value));
    }

    return (

        <VStack h="100vh" bgColor={"blackAlpha.900"}>
            <Input color="white" id="Texto1" placeholder="profesor" onChange={cambiar} />
            <Input color="white" id="Texto2" placeholder="asignatura" onChange={cambiar} />
            <Flex as="iframe" id="resultadosDeBusqueda" src="busqueda?profesor=NA&asignatura=NA&function=buscar"></Flex>
        </VStack >

    )
}