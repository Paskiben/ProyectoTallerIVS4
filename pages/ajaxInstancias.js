import React, { useEffect } from "react";
import { Select, Input, VStack, Button, Flex, Text, HStack, Checkbox } from "@chakra-ui/react";
import { useRouter } from "next/router.js";

function deshabilitarEdicionPeriodos() {
    document.getElementById("entradaDuracion").disabled = !document.getElementById("entradaDuracion").disabled;
    if (document.getElementById("entradaDuracion").disabled) document.getElementById("entradaDuracion").value = "";
}

export default function Test() {

    var edificio = useRouter().query.edificio;
    var sala = useRouter().query.sala;

    function cambiar() {
        document.getElementById("resultadosDeBusqueda").setAttribute("src",
            "busqueda?profesor=" +
            (document.getElementById("entradaProfesor").value == "" ? "NA" : document.getElementById("entradaProfesor").value) +
            "&asignatura=" +
            (document.getElementById("entradaAsignatura").value == "" ? "NA" : document.getElementById("entradaAsignatura").value) +
            "&dia=" +
            document.getElementById("selectDia").value +
            "&periodo=" +
            document.getElementById("selectPeriodo").value +
            "&edificio=" +
            edificio +
            "&sala=" +
            sala
        );
    }

    function agregar() {
        console.log(document.getElementById("selectDia").value, document.getElementById("selectPeriodo").value
            , edificio, sala, document.getElementById("entradaProfesor").value,
            document.getElementById("entradaAsignatura").value, document.getElementById(
                "entradaAutocompletar").checked, document.getElementById("entradaPermanencia").checked,
            document.getElementById("entradaDuracion").value);
    }


    return (

        <VStack h="100vh" bgColor={"blackAlpha.900"}>
            <Text w="full" textAlign="center" color="white" bgGradient="linear(to-r, #e33e2e, #f7c21c)">Agregar instancia</Text>
            <HStack w="full">
                <Select id="selectDia" onChange={cambiar} borderColor="orange" color="gray">
                    <option value="0">Lunes</option>
                    <option value="1">Martes</option>
                    <option value="2">Miercoles</option>
                    <option value="3">Jueves</option>
                    <option value="4">Viernes</option>
                    <option value="5">Sabado</option>
                </Select>
                <Select id="selectPeriodo" onChange={cambiar} borderColor="orange" color="gray">
                    <option value="0">I</option>
                    <option value="1">II</option>
                    <option value="2">III</option>
                    <option value="3">IV</option>
                    <option value="4">V</option>
                    <option value="5">VI</option>
                    <option value="5">VII</option>
                </Select>
            </HStack>
            <Input color="white" id="entradaProfesor" placeholder="Responsable" onChange={cambiar} />
            <Input color="white" id="entradaAsignatura" placeholder="Asignatura" onChange={cambiar} />

            <HStack>
                <Text color="white">Recomendar:</Text>
                <Checkbox id="entradaAutocompletar" defaultChecked="true"></Checkbox>
            </HStack>

            <HStack>
                <Text color="white">Permanente:</Text>
                <Checkbox id="entradaPermanencia" onChange={deshabilitarEdicionPeriodos} defaultChecked="true"></Checkbox>
            </HStack>

            <Input disabled color="white" id="entradaDuracion" placeholder="Duracion (en periodos)" />
            <Button bgColor="green" color="white" onClick={agregar}>Crear instancia</Button>
            <Button bgColor="red.500" color="white">Borrar seleccion</Button>

            <Text id="matrixData" color="white">{"" + (useRouter().query.dia ?? "") + (useRouter().query.periodo ?? "")}</Text>

            <VStack w="full" key="RecomTitleStack" bgColor="blue.400">
                <Text key="RecomTitleText">Recomendaciones</Text></VStack>
            <Flex w="full" h="40vh" as="iframe" id="resultadosDeBusqueda" src="busqueda?profesor=NA&asignatura=NA&function=buscar"></Flex>
        </VStack >

    )
}