// VARIÁVEIS CRONOMETRO
let hh = 0;
let mm = 0;
let ss = 0;
let cronometro = 0;

// FUNÇÕES GERAIS
function showH(hora, minuto, segundo, hh, mm, ss){
    hora.innerHTML = `${hh}`;
    minuto.innerHTML = `${mm}`;
    segundo.innerHTML = `${ss}`;
}
function show(hora, minuto, segundo, hh, mm, ss){
    hora.innerHTML = `${hh < 10 ? '0' + hh : hh}`;
    minuto.innerHTML = `${mm < 10 ? '0' + mm : mm}`;
    segundo.innerHTML = `${ss < 10 ? '0' + ss : ss}`;
}
// RELÓGIO FUNÇÕES

// let urls = new Array(
//     {url: "http://worldtimeapi.org/api/timezone/Europe/Madrid", 
//     hora: showHoursRelogio, 
//     minuto: showMinutesRelogio, 
//     segundo: showSecondsRelogio
//     },
//     {url: "http://worldtimeapi.org/api/timezone/America/Sao_Paulo", 
//     hora: showHoursRelogioSP, 
//     minuto: showMinutesRelogioSP, 
//     segundo: showSecondsRelogioSP
//     },
//     {url: "http://worldtimeapi.org/api/timezone/Europe/Madrid", 
//     hora: showHoursRelogioLA, 
//     minuto: showMinutesRelogioLA, 
//     segundo: showSecondsRelogioLA
//     }, 
             
// );

function retornaData(url, showHours, showMinutes, showSeconds){
    fetch(url)
    .then((res) =>{
        return res.json()
    }).then((data)=>{
        let horaAtual = data.datetime;
        let hh = horaAtual.slice(11,13);
        let mm = horaAtual.slice(14,16);
        let ss = horaAtual.slice(17,19);
        showH(showHours, showMinutes, showSeconds, hh, mm, ss);
    }) 
}

// CRONOMETRO FUNÇÕES
function star(btnCronometroIniciar, btnCronometroPause, btnCronometroStop){
    cronometro = setInterval(timer, 10);
    btnCronometroIniciar.style.display = "none";
    btnCronometroPause.style.display = "inline-block";
    btnCronometroStop.style.display = "inline-block";
}
function pause(btnCronometroIniciar, btnCronometroPause, btnCronometroStop){
    clearInterval(cronometro);
    btnCronometroIniciar.style.display = "inline-block";
    btnCronometroPause.style.display = "none";
    btnCronometroStop.style.display = "inline-block";
}
function stop(btnCronometroIniciar, btnCronometroPause, btnCronometroStop){
    clearInterval(cronometro);
    cronometro = 0;
    show(showCronometroH, showCronometroM, showCronometroS, 0, 0, 0);
    hh = 0;
    mm = 0;
    ss = 0;
    btnCronometroIniciar.style.display = "inline-block";
    btnCronometroPause.style.display = "none";
    btnCronometroStop.style.display = "none";
}
function timer(){
    ss++;
    if(ss == 60){
        ss=0;
        mm++;
        if(mm == 60){
            mm=0;
            hh++;
            if(hh == 24){
                hh=0;
            }
        }
    }
    show(showCronometroH, showCronometroM, showCronometroS, hh, mm, ss);
}