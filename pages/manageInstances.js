import Head from "next/head";
import Link from "next/link";
import { Input, Checkbox, Flex, HStack, VStack, Text, Divider, Image } from "@chakra-ui/react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { IoArrowUndoOutline } from "react-icons/io5";


function volver() {
    window.location.href = "/";
}
function openKumblesoftWeb() {
    window.location.href = "https://github.com/Paskiben/ProyectoTaller";
}

function deshabilitarEdicionPeriodos() { }
function agregar() {

    var id = document.getElementById("inputId").value;
    if (id == "") {
        alert("Por favor ingrese el id de la instancia a editar.");
        return;
    }
    var data = JSON.parse(localStorage.getItem('instancias'));
    if (data[id]) {
        var responsable = document.getElementById("entradaProfesor").value;
        var asignatura = document.getElementById("entradaAsignatura").value;
        var autofill = document.getElementById("entradaAutocompletar").checked;
        var permanente = document.getElementById("entradaPermanencia").checked;
        var duracion = document.getElementById("entradaDuracion").value;
        if (responsable != "") {
            data[id].responsable = responsable;
        }
        else {
            alert("Por favor ingrese un responsable.");
            return;
        }
        if (asignatura != "") {
            data[id].asignatura = asignatura;
        }
        else {
            alert("Por favor ingrese una asignatura.");
            return;
        }
        if (permanente) {
            data[id].permanente = -1;
        } else {
            if (duracion !== undefined) {
                data[id].permanente = duracion;
            } else {
                data[id].permanente = 0;
            }
        }
        data[id].autofill = autofill;

        localStorage.setItem('instancias', JSON.stringify(data))
        alert("Edicion completada exitosamente.");
        window.location.reload();
    }
    else {
        alert("ID no encontrado");
    }
}

function borrar() {

    var id = document.getElementById("inputId").value;
    if (id == "") {
        alert("Por favor ingrese el ID de la instancia a eliminar.");
        return;
    };
    var data = JSON.parse(localStorage.getItem('instancias'));
    alert(`Se eliminara la instancia de id ${id} si existe...`);
    delete data[id];
    localStorage.setItem('instancias', JSON.stringify(data));
    window.location.reload();
}
function actualizarBotonBorrar() {
    document.getElementById("botonBorrar").innerHTML = "Borrar instancia " +
        document.getElementById("inputId").value;
    document.getElementById("botonEditar").innerHTML = "Editar instancia " +
        document.getElementById("inputId").value;
    if (document.getElementById("inputId").value == "") {
        document.getElementById("botonEditar").disabled = true;
        document.getElementById("botonBorrar").disabled = true;
        return;
    }
    document.getElementById("botonBorrar").disabled = false;
    document.getElementById("botonEditar").disabled = false;
}

export default function manageInstances() {

    function cambiar() {
        document.getElementById("resultadosDeBusqueda").setAttribute("src",
            "busqueda?profesor=" +
            (document.getElementById("entradaProfesor").value == "" ? "NA" : document.getElementById("entradaProfesor").value) +
            "&asignatura=" +
            (document.getElementById("entradaAsignatura").value == "" ? "NA" : document.getElementById("entradaAsignatura").value) +
            "&dia=" +
            1 +
            "&periodo=" +
            1 +
            "&edificio=" +
            1 +
            "&sala=" +
            1 +
            "&modo=showOnly"
        );
    }

    return (

        <>
            <Head>
                <title>Modificar Instancias</title>
            </Head>
            <Flex bgGradient="linear(to-r, #e33e2e, #f7c21c)" h="5vh">
                <ButtonGroup w={'120px'} h={'32px'} className="volver" bg={"#161818"} borderBottomRadius="10px" >
                    <Button onClick={volver} w={'120px'} h={'32px'} leftIcon={<IoArrowUndoOutline />} colorScheme='black' variant='solid'>
                        Volver
                    </Button>
                </ButtonGroup>

            </Flex>


            <VStack paddingX="5vh" bgColor={"blackAlpha.900"} h="80vh">
                <Text color="white" fontSize={30} textAlign="center" w="full">Administrador de instancias</Text>
                <HStack>
                    <Text id="textId" color="orange" fontSize={"20px"}>ID:</Text>
                    <Input id="inputId" onChange={actualizarBotonBorrar} color={"orange"} placeholder="-" w="5vh" />
                </HStack>
                <Input w="80%" color="white" id="entradaProfesor" placeholder="Responsable" onChange={cambiar} />
                <Input w="80%" color="white" id="entradaAsignatura" placeholder="Asignatura" onChange={cambiar} />

                <HStack>
                    <Text color="white">Recomendar:</Text>
                    <Checkbox id="entradaAutocompletar" defaultChecked="true"></Checkbox>
                </HStack>

                <HStack>
                    <Text color="white">Permanente:</Text>
                    <Checkbox id="entradaPermanencia" onChange={deshabilitarEdicionPeriodos} defaultChecked="true"></Checkbox>
                </HStack>

                <Input disabled={true} w="80%" color="white" id="entradaDuracion" placeholder="Duracion (en periodos)" />
                <Button id="botonEditar" bgColor="blue.500" color="white" onClick={agregar}>Editar instancia</Button>
                <Button id="botonBorrar" bgColor="red.500" color="white" onClick={borrar} >Borrar instancia</Button>

                <Flex w="full" h="40vh" as="iframe" id="resultadosDeBusqueda" src="busqueda?profesor=NA&asignatura=NA&function=buscar&modo=showOnly"></Flex>
            </VStack>



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
}