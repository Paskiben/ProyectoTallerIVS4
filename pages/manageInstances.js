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

function cambiar(){}
function deshabilitarEdicionPeriodos(){}
function agregar(){
    var data = JSON.parse(localStorage.getItem('instancias'));
    var id = document.getElementById("inputId").value;
    if (data[id]){
        var responsable= document.getElementById("entradaProfesor").value;
        var asignatura = document.getElementById("entradaAsignatura").value;
        var autofill = document.getElementById("entradaAutocompletar").checked;
        var permanente = document.getElementById("entradaPermanencia").checked;
        var duracion = document.getElementById("entradaDuracion").value;
        if (responsable !== undefined){
            data[id].responsable=responsable;
        }
        if (asignatura !== undefined){
            data[id].asignatura = asignatura;
        }
        if (permanente){
            data[id].permanente=-1;
        }else{
            if(duracion!==undefined){
                data[id].permanente=duracion;
            }else{
                data[id].permanente=0;
            }
        }
        data[id].autofill=autofill;

        localStorage.setItem('instancias',JSON.stringify(data))
    }
}
function ver(){}
function borrar(){
    var data = JSON.parse(localStorage.getItem('instancias'));
    var id = document.getElementById("inputId").value;
    console.log(data);
    delete data[id];
    localStorage.setItem('instancias',JSON.stringify(data))
}
function actualizarBotonBorrar(){
    document.getElementById("botonBorrar").innerHTML="Borrar instancia "+
    document.getElementById("inputId").value;
    document.getElementById("botonEditar").innerHTML="Editar instancia "+
    document.getElementById("inputId").value;
    console.log(document.getElementById("inputId").value);
    if (document.getElementById("inputId").value==""){
        document.getElementById("botonEditar").disabled=true;
        document.getElementById("botonBorrar").disabled=true;
        return;
    }
    document.getElementById("botonBorrar").disabled=false;
    document.getElementById("botonEditar").disabled=false;
}

export default function manageInstances(){

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
            
            <Text bgColor={"blackAlpha.900"} color="white" fontSize={30} textAlign="center" w="full">Administrador de instancias</Text>
            <VStack paddingX="5vh" bgColor={"blackAlpha.900"} h="80vh">
            
                <HStack>
                    <Text id="textId"color="orange" fontSize={"25px"}>ID:</Text>
                    <Input id="inputId"  onChange={actualizarBotonBorrar} color={"orange"} placeholder="-" w="5vh"/>
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

                <Input disabled={true} color="white" id="entradaDuracion" placeholder="Duracion (en periodos)" />
                <Button id="botonEditar" bgColor="green" color="white" onClick={agregar}>Editar instancia</Button>
                <Button id="botonBorrar" bgColor="red.500" color="white" onClick={borrar} >Borrar instancia</Button>

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