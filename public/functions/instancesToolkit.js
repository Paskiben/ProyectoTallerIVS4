
export async function getSchedule(edificio, id) {
    let M = await (await fetch(`data/${edificio}.json`)).json();
    let periodos = M[id].horario;
    for (let i = 0; i < 7; i++) for (let j = 1; j < 7; j++)
        document.getElementById(`${i * 10 + j}`).innerHTML =
            periodos[j - 1][i] != 0 ? `${(await leerInstancia(periodos[j - 1][i]))["asignatura"]}` :
                '-';

    return true;
}

export async function leerInstancia(numero) {
    let data = await (await fetch(`data/instancias.JSON`)).json();
    return data[numero];
}

export function buscar(profe, asign){
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