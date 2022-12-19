import Fuse from "fuse.js";
import { useRouter } from "next/router.js";
import instancias from "../public/data/instancias.json";
import { Text, Input, Button, VStack, Checkbox, HStack } from "@chakra-ui/react";

export function guardarRecomendacion() {
    console.log("Hola")
}

export default function buscar() {

    let asign = useRouter().query.asignatura ?? "";
    let profe = useRouter().query.profesor ?? "";


    if (profe == "NA") profe = "";
    if (asign == "NA") asign = "";
    if (profe == "" && asign == "") return <VStack h="100vh" bgColor="blackAlpha.900">
        <Text textAlign="center" color="white">
            Para ver recomendaciones, escriba algo en el recuadro de profesor o asignatura
        </Text>
    </VStack>

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
                <Text key={elem.id + "Text"} color="white" bgGradient="linear(to-r, #e33e2e, #f7c21c)" w="full" textAlign="center">Opcion {++i}</Text>
                <Input key={elem.id + "Input1"} disabled color="white" id="Texto1" value={elem.responsable} />
                <Input key={elem.id + "Input2"} disabled color="white" id="Texto2" value={elem.asignatura} />

                <HStack>
                    <Text color="white">Permanente:</Text>
                    <Checkbox defaultChecked={elem.Temp == -1} disabled></Checkbox>
                </HStack>

                <Input key={elem.id + "Input3"} disabled color="white" id="Texto2" value={elem.Temp == -1 ? "permanente" : elem.Temp} />
                <Button key={elem.id + "Button"} onClick={guardarRecomendacion} >Usar opcion {i}</Button>
            </VStack>
        )
    }

    if (results.length == 1) outElems.push(<VStack key="sizeAdapter" h="50vh" bgColor="blackAlpha.900"></VStack>)
    return (outElems)

}