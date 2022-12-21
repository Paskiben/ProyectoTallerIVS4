import { HStack, VStack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router.js";

let edificio;
let sala;


function readScheduleMatrix(sala) {
    let lines = [(<HStack key="bar1" h="12.5%" w="100%" bgGradient="linear(to-t, #e14e2e, #f7c21c)" px="2%">
        <Text w="6%" color="black" id='indicadorDatosRecibidos'>{sala}</Text>
        <Text key="Lunes" w="15.6%" textAlign="center" borderRight="2px">Lunes</Text>
        <Text key="Martes" w="15.6%" textAlign="center" borderRight="2px">Martes</Text>
        <Text key="Miercoles" w="15.6%" textAlign="center" borderRight="2px">Miercoles</Text>
        <Text key="Jueves" w="15.6%" textAlign="center" borderRight="2px">Jueves</Text>
        <Text key="Viernes" w="15.6%" textAlign="center" borderRight="2px">Viernes</Text>
        <Text key="Sabado" w="15.6%" textAlign="center">Sabado</Text>
    </HStack>)]

    let periodoRomano = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];


    for (let i = 0; i < 7; i++)
        lines.push(
            <HStack key={i * 10}
                h="12.5%"
                w="100%"
                px="2%"
                bgColor={i & 1 ? "gray.900" : "black"}
                color={i & 1 ? "gray.50" : "gray.400"}>
                <Text key={i * 10 + 7} color="gray" id={"p" + i} w="6%" borderRight="2px">{periodoRomano[i]}</Text>
                <Text key={i * 10 + 1} id={i * 10 + 1} w="16.6%" textAlign="center">-</Text>
                <Text key={i * 10 + 2} id={i * 10 + 2} w="16.6%" textAlign="center">-</Text>
                <Text key={i * 10 + 3} id={i * 10 + 3} w="16.6%" textAlign="center">-</Text>
                <Text key={i * 10 + 4} id={i * 10 + 4} w="16.6%" textAlign="center">-</Text>
                <Text key={i * 10 + 5} id={i * 10 + 5} w="16.6%" textAlign="center">-</Text>
                <Text key={i * 10 + 6} id={i * 10 + 6} w="16.6%" textAlign="center">-</Text>
            </HStack>)


    return (lines)
}

export default function showschedule() {

    sala = useRouter().query.sala;
    edificio = useRouter().query.edificio;



    function obtenerDatos(sala, edificio) {
        var data = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem(sala)) : null;
        var info = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('instancias')) : null;


        if (data !== null) {
            console.log('data/' + edificio + '.json');
            console.log(data, info);
            console.log(edificio, sala)
            let i = 0, j = 0;
            for (let dia of data.horario) {
                i++; j = 0;
                for (let clase of dia) {
                    document.getElementById(i + 10 * j).innerHTML =
                        clase == 0 ? '-' : info[clase].asignatura;
                    document.getElementById(i + 10 * j++).value = info[clase];
                }
            }
        }
    }

    /*useEffect(() => {
        console.log(sala, edificio);
        obtenerDatos(sala, edificio);
    }, [])
    */
    setTimeout(async () => { obtenerDatos(sala, edificio) }, 250);

    if (edificio == undefined) return;

    return (
        <>
            <VStack id="frameHorario" h="100vh" spacing="0px">
                {readScheduleMatrix(sala)}
            </VStack>

        </>
    )


}