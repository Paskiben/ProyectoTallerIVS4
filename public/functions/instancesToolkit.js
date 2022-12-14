
export async function getSchedule(edificio,id){
    let M = await (await fetch(`data/${edificio}.json`)).json();
    console.log(M);
    console.log(M[id]);

    let periodos = M[id].horario;
    for (let i=0; i<7; i++) for (let j=1; j<7; j++) document.getElementById(`${i*10 + j}`).innerHTML=periodos[j-1][i]!=0?`${periodos[j-1][i]}`:'-';
    return true;
}

export async function leerInstancia(numero){
    let data = await fetch(`data/instancias.JSON`).json;
    let datosSala = data[numero];
    console.log(datosSala);

    return;
}