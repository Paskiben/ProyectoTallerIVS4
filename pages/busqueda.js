import Fuse from "fuse.js";
import { useRouter } from "next/router.js";
import instancias from "../public/data/instancias.json";
import { Text } from "@chakra-ui/react";

export default function buscar() {

    let asign = useRouter().query.asignatura ?? "";
    let profe = useRouter().query.profesor ?? "";


    if (profe == "NA") profe = "";
    if (asign == "NA") asign = "";
    if (profe == "" && asign == "") return <Text h="100vh" color="white" bgColor="blackAlpha.900">esperando</Text>

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
    );


    let allResultsArray = [];
    for (let R of results) allResultsArray.push(R.item);
    return <Text h="100vh" color="white" bgColor="blackAlpha.900">{JSON.stringify(allResultsArray)}</Text>;
}