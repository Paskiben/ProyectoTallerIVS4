import {Flex, HStack, Text, Divider, Image, Grid, GridItem, Select} from "@chakra-ui/react";


export default function Test() {

    const bgColor = "#161818";

    return ( 
    <>
        <Flex as="topbar" bgGradient="linear(to-r, #e33e2e, #f7c21c)" h="5vh">
        </Flex>

        <Grid 
        as="content" 
        h="80vh" 
        w="full" 
        bg="#161818" 
        alignItems="center"
        padding="3vh"
        
        templateRows="repeat(1,1fr)"
        templateColumns="repeat(2,1fr)"
        gap={4}
        >
            <GridItem colSpan={1} height="full">
                <Text color="white">
                    
                </Text>
            </GridItem>

            <GridItem colSpan={1} height="full" border="0px" borderColor="white">
                <Select color="white" bg="black">
                    <option value="6000">6000</option>
                    <option value="9000">9000</option>
                    <option value="11000">11000</option>
                    <option value="2000">2000</option>
                    <option value="10000">1000</option>
                    <option value="4000">4000</option>
                    <option value="14000">14000</option>
                </Select>
            </GridItem>
            
        </Grid>
        
        <HStack as="footer" h="15vh" bg="#161818" alignItems="center" border="0px">
            <Image src="./images/KS.png" w="25vh"/>
            <Divider orientation="vertical" color="white"></Divider>
            <Image src="https://cdn.discordapp.com/attachments/1022221381850632395/1034842785032970320/Logoblancopng.png" w="25vh"/>
        </HStack>
    </>
    )

}