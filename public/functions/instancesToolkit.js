import useRouter from 'next/router.js';
let edificio = useRouter().query.edificio;
import M from `../public/data/${edificio}.json`;

export async function getSchedule(id) {
    let periodos = M[id].horario;
    for (let i = 0; i < 7; i++) for (let j = 1; j < 7; j++)
        document.getElementById(`${i * 10 + j}`).innerHTML =
            periodos[j - 1][i] != 0 ? `${(await leerInstancia(periodos[j - 1][i]))["asignatura"]}` :
                '-';
    return true;
}

export async function leerInstancia(numero) {
    return M[numero];
}