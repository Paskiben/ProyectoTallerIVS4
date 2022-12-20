import Fuse from "fuse.js";
import { useRouter } from "next/router.js";
import instancias from "../public/data/instancias.json";
import { Text, Input, Button, VStack, Checkbox, HStack } from "@chakra-ui/react";


export default function buscar() {

    var asign = useRouter().query.asignatura ?? "";
    var profe = useRouter().query.profesor ?? "";

    var edificio = useRouter().query.edificio;
    var sala = useRouter().query.sala;
    var dia = useRouter().query.dia;
    var periodo = useRouter().query.periodo;



    if (profe == "NA") profe = "";
    if (asign == "NA") asign = "";
    if (profe == "" && asign == "") return <VStack h="100vh" bgColor="blackAlpha.900">
        <Text textAlign="center" color="white">
            Para ver recomendaciones, escriba algo en el recuadro de profesor o asignatura
        </Text>
    </VStack>


    function guardarRecomendacion() {
        console.log(dia, periodo, edificio, sala, document.getElementById("1Input1").value, document.getElementById("1Input2").value,
            document.getElementById("1Permanente").checked, document.getElementById("1Duracion").value
        )
    }

    let fusej = [];
    for (let elem in instancias)
        if (elem != "instanciasTotales" && instancias[elem].autofill) fusej.push(instancias[elem]);
    const fuse = new Fuse(fusej, {
        keys: ["responsable", "asignatura"]
    })

    const results = fuse.search((
        profe != "" && asign != "" ?
            { $and: [{ "responsable": profe }, { "asignatura": asign }] } :
            (profe == "" ?
                { $and: [{ "asignatura": asign }] } :
                { $and: [{ "responsable": profe }] }
            )
    )
    )

    if (results.length == 0) return (
        <VStack bgColor="blackAlpha.900" h="100vh">
            <Text color="white" textAlign="center">
                No hay buenas recomendaciones...
            </Text>
        </VStack>);

    let allResultsArray = [];
    for (let R of results) allResultsArray.push(R.item);

    let outElems = [];
    let i = 0;
    for (let elem of allResultsArray) {
        outElems.push(
            <VStack key={elem.id + "Stack"} paddingTop={"4vh"} bgColor={"blackAlpha.900"}>
                <Text key={elem.id + "Text"} id={i + "Text"} color="white" bgGradient="linear(to-r, #e33e2e, #f7c21c)" w="full" textAlign="center">Opcion {++i}</Text>
                <Input key={elem.id + "Input1"} id={i + "Input1"} disabled color="white" value={elem.responsable} />
                <Input key={elem.id + "Input2"} id={i + "Input2"} disabled color="white" value={elem.asignatura} />

                <HStack>
                    <Text color="white">Permanente:</Text>
                    <Checkbox id={i + "Permanente"} defaultChecked={elem.Temp == -1} disabled></Checkbox>
                </HStack>

                <Input key={elem.id + "Input3"} disabled color="white" id={i + "Duracion"} value={elem.Temp == -1 ? "permanente" : elem.Temp} />
                {(i == 1 ? <Button key={elem.id + "Button"} onClick={guardarRecomendacion} bgColor="green" color="white">Usar opcion 1</Button> : <></>)}
            </VStack>
        )
    }

    if (results.length == 1) outElems.push(<VStack key="sizeAdapter" h="50vh" bgColor="blackAlpha.900"></VStack>)
    return (outElems)

}