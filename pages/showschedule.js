import { Flex, HStack, VStack, Text } from "@chakra-ui/react";

function readScheduleMatrix() {
    let lines = [(<HStack key="bar1" h="12.5%" w="100%" bgColor={"blue.400"} px="2%">
            <Text key="Lunes" w="16.6%" textAlign="center" borderRight="2px">Lunes</Text>
            <Text key="Martes" w="16.6%" textAlign="center" borderRight="2px">Martes</Text>
            <Text key="Miercoles" w="16.6%" textAlign="center" borderRight="2px">Miercoles</Text>
            <Text key="Jueves" w="16.6%" textAlign="center" borderRight="2px">Jueves</Text>
            <Text key="Viernes" w="16.6%" textAlign="center" borderRight="2px">Viernes</Text>
            <Text key="Sabado" w="16.6%" textAlign="center">Sabado</Text>
    </HStack>)]


    for (let i = 0; i < 7; i++)
        lines.push(
        <HStack key={i*10} 
        h="12.5%" 
        w="100%" 
        px="2%"
        bgColor={i&1?"gray.900":"black"} 
        color={i&1?"gray.50":"orange"} >
            <Text key={i*10 + 1} w="16.6%" textAlign="center">{i*10 + 1}</Text>
            <Text key={i*10 + 2} w="16.6%" textAlign="center">{i*10 + 2}</Text>
            <Text key={i*10 + 3} w="16.6%" textAlign="center">{i*10 + 3}</Text>
            <Text key={i*10 + 4} w="16.6%" textAlign="center">{i*10 + 4}</Text>
            <Text key={i*10 + 5} w="16.6%" textAlign="center">{i*10 + 5}</Text>
            <Text key={i*10 + 6} w="16.6%" textAlign="center">{i*10 + 6}</Text>
        </HStack>)
    

    return (lines)
}

export default function showschedule() {
    return (
        <>
            <VStack h="100vh" spacing="0px">
                {readScheduleMatrix()}
            </VStack>
        </>
    )
}