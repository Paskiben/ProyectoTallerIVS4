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

    function ver() {
        let dia = document.getElementById("selectDia").value;
        let periodo = document.getElementById("selectPeriodo").value;
        let instanciasTotales = JSON.parse(localStorage.getItem('instancias'));
        let instancia = JSON.parse(localStorage.getItem(sala)).horario[dia][periodo];
        let info = instanciasTotales[instancia];
        if (info==undefined) {
            alert("Campo vacio:\nPor favor escoja un dia y periodo con informacion valida.");
            return
        }
        let datos = `
            DATOS DE LA INSTANCIA   /-ID: ${info.id}-\\
            """""""""""""""""""""""""""""""""""""""""
            + Asignatura: ${info.asignatura}
            + Responsable: ${info.responsable}
            + Es temporal: ${info.Temp == -1 ? "No, es permanente." : "Si.\n            + Duracion restante: " + info.Temp}
            + Autocompletar: ${info.autofill ? "Si." : "No."} 
        `;
        alert(datos);
    }

    function agregar() {
        let instancias = JSON.parse(localStorage.getItem('instancias'));
        let responsable = document.getElementById("entradaProfesor").value;
        let asignatura = document.getElementById("entradaAsignatura").value;
        let duracion = document.getElementById("entradaDuracion").value;

        if (!responsable || !asignatura) {
            alert("Por favor ingrese responsable y asignatura...");
            return
        }

        if (duracion == "") {
            duracion = -1;
        }
        let autofill = document.getElementById("entradaAutocompletar").checked;
        let iTotal = instancias.instanciasTotales + 1;
        instancias[iTotal] = { id: iTotal, asignatura: asignatura, responsable: responsable, Temp: duracion, autofill: autofill }
        console.log(instancias.iTotal);
        instancias.instanciasTotales = iTotal;
        localStorage.setItem('instancias', JSON.stringify(instancias));

        let horario = JSON.parse(localStorage.getItem(sala));
        let dia = document.getElementById("selectDia").value;
        let periodo = document.getElementById("selectPeriodo").value;
        horario.horario[dia][periodo] = iTotal;
        localStorage.setItem(sala, JSON.stringify(horario));
        setTimeout(async () => { window.top.location.reload() }, 200);
    }

    function borrar() {
        let horario = JSON.parse(localStorage.getItem(sala));
        let dia = document.getElementById("selectDia").value;
        let periodo = document.getElementById("selectPeriodo").value;
        horario.horario[dia][periodo] = 0;
        localStorage.setItem(sala, JSON.stringify(horario));
        setTimeout(async () => { window.top.location.reload() }, 200);
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
                    <option value="6">VII</option>
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
            <Button bgColor="blue.600" color="white" onClick={ver}>Ver seleccion</Button>
            <Button bgColor="red.500" color="white" onClick={borrar}>Borrar seleccion</Button>

            <Text id="matrixData" color="white">{"" + (useRouter().query.dia ?? "") + (useRouter().query.periodo ?? "")}</Text>

            <VStack w="full" key="RecomTitleStack" bgColor="blue.400">
                <Text key="RecomTitleText">Recomendaciones</Text></VStack>
            <Flex w="full" h="40vh" as="iframe" id="resultadosDeBusqueda" src="busqueda?profesor=NA&asignatura=NA&function=buscar"></Flex>
        </VStack >

    )
}