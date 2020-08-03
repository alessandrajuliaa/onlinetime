let url = "http://worldtimeapi.org/api/timezone/America/Sao_Paulo";

let showHours = document.querySelector('.containerHora');
let milisegundos = 0;

// fetch(url)
//     .then((res) =>{
//         return res.json()
//     }).then((data)=>{
//         console.log(data.datetime);
//         console.log(data.utc_datetime);
//         console.log(data.unixtime);
//         h = data.unixtime;
//     })
let interval = setInterval(() => {
    fetch(url)
    .then((res) =>{
        return res.json()
    }).then((data)=>{
        milisegundos = (data.unixtime * 1000);
    })
let horaAtual = new Date(milisegundos)
let horas = horaAtual.getUTCHours
let minutos = horaAtual.getUTCMinutes
let segundos = horaAtual.getUTCSeconds
showHours.innerHTML = `${horaAtual.getHours() < 10 ? '0' + horaAtual.getHours() : horaAtual.getHours()}:${horaAtual.getMinutes() < 10 ? '0' + horaAtual.getMinutes() : horaAtual.getMinutes()}:${horaAtual.getSeconds() < 10 ? '0' + horaAtual.getSeconds() : horaAtual.getSeconds()}`;
}, 1000);