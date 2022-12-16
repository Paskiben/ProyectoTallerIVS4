
export async function getSchedule(edificio,id){
    let M = await (await fetch(`data/${edificio}.json`)).json();
    console.log(M);
    console.log(M[id]);

    let periodos = M[id].horario;
    for (let i=0; i<7; i++) for (let j=1; j<7; j++) 
    document.getElementById(`${i*10 + j}`).innerHTML=
        periodos[j-1][i]!=0?`${(await leerInstancia(periodos[j-1][i]))["asignatura"]}`:
        '-';
    return true;
}

export async function leerInstancia(numero){
    let data = await (await fetch(`data/instancias.JSON`)).json();

    console.log(data[numero])
    return data[numero];
}