import { Flex, HStack, Text, Divider, Image, Grid, GridItem, Select, Input, Button } from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect } from "react";
import useRouter from "next/router.js"
import Head from "next/head";
import Script from "next/script";
import Fuse from "fuse.js";
import instancias from "../public/data/instancias.json"

function buscar(profe, asign){
    var fusej = []

    for(let elem in instancias) {
        if(elem != "instanciasTotales" && instancias[elem].autofill) 
        fusej.push(instancias[elem]);
    }
    

    const fuse = new Fuse(fusej,{
        keys:[
            "responsable",
            "asignatura"
        ]
    })
    if(profe != "" || asign != ""){
        const results = fuse.search(
            ( 
                profe != "" && asign != ""?
                {
                    $and:[
                    {"responsable":profe},
                    {"asignatura":asign}
                    ]
                }
                :
                ( profe == ""?
                    {
                        $and:[
                            {"asignatura":asign}
                        ]
                    }
                    :
                    {
                        $and:[
                            {"responsable":profe}
                        ]
                    }
                )
            )
        );
        console.log(results);
    }
}

export default function Test() {
    useEffect(()=>{
        document.getElementById("Texto").setAttribute("onChange","buscar((document.getElementById('Texto').value), '')")
    })
    return (
        <>
            <input id="Texto" placeholder="results"/> 
        </>
            
    )
}