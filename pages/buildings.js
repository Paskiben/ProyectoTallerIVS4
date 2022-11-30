import { Flex, Grid, GridItem, HStack, VStack } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
export default function buildings() {

    return (

        <>
            <Head>
                <title>Edificios</title>
                <link rel="icon" href="/kumble.ico" />
            </Head>
            <HStack spacing="0px">
                <Flex width="10vw" height="100vh" backgroundColor="black"> Project Glassroom </Flex>

                <VStack width="65vw" height="100vh" backgroundColor="red">
                    <Flex h="20%">
                        <Flex>
                            Vista rapida
                        </Flex>
                    </Flex>
                    <Flex h="80%" w="100%" backgroundColor="brown">
                        Salas
                    </Flex>
                </VStack>

                <VStack width="25vw" height="100vh" backgroundColor="orange">
                    <Flex h="20%"> margin </Flex>
                    <VStack h="60%" w="100%">
                        <Flex h="30%">Buscar por nombre</Flex>
                        <Flex h="30%">Filtrar por asignatura</Flex>
                        <Flex h="30%">Filtrar por docente</Flex>
                    </VStack>
                    <Flex h="20%"> Buscar </Flex>
                </VStack>
            </HStack>
        </>

    )

}