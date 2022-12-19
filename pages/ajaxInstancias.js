import React, { useEffect } from "react";
import { Input, VStack, Button, Flex, Text, HStack, Checkbox } from "@chakra-ui/react";

function deshabilitarEdicionPeriodos() {
    document.getElementById("entradaDuracion").disabled = !document.getElementById("entradaDuracion").disabled;
}

export default function Test() {

    function cambiar() {
        document.getElementById("resultadosDeBusqueda").setAttribute("src",
            "busqueda?profesor=" +
            (document.getElementById("entradaProfesor").value == "" ? "NA" : document.getElementById("entradaProfesor").value) +
            "&asignatura=" +
            (document.getElementById("entradaAsignatura").value == "" ? "NA" : document.getElementById("entradaAsignatura").value));
    }

    return (


        <VStack h="100vh" bgColor={"blackAlpha.900"}>
            <Text w="full" textAlign="center" color="white" bgGradient="linear(to-r, #e33e2e, #f7c21c)">Agregar instancia</Text>
            <Input color="white" id="entradaProfesor" placeholder="Responsable" onChange={cambiar} />
            <Input color="white" id="entradaAsignatura" placeholder="Asignatura" onChange={cambiar} />

            <HStack>
                <Text color="white" >Recomendar:</Text>
                <Checkbox id="entradaAutocompletar" defaultChecked="true"></Checkbox>
            </HStack>

            <HStack>
                <Text color="white">Permanente:</Text>
                <Checkbox id="entradaPermanencia" onChange={deshabilitarEdicionPeriodos} defaultChecked="true"></Checkbox>
            </HStack>

            <Input disabled color="white" id="entradaDuracion" placeholder="Duracion (en periodos)" />
            <Button>Crear instancia</Button>

            <>ㅤ</>

            <VStack w="full" key="RecomTitleStack" bgColor="blue.400">
                <Text key="RecomTitleText">Recomendaciones</Text></VStack>
            <Flex w="full" h="40vh" as="iframe" id="resultadosDeBusqueda" src="busqueda?profesor=NA&asignatura=NA&function=buscar"></Flex>
        </VStack >

    )
}