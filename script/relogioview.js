"use strict"

// curl "http://worldtimeapi.org/api/ip"

let urlLocal = "http://worldtimeapi.org/api/ip";
let urlSaoPaulo = "http://worldtimeapi.org/api/timezone/America/Sao_Paulo";
// let urlSaoPaulo = "http://worldtimeapi.org/api/timezone/America/Sao_Paulo";
let urlMadri = "http://worldtimeapi.org/api/timezone/Europe/Madrid"
let urlLisboa = "http://worldtimeapi.org/api/timezone/Europe/Lisbon"
let urlLosAngeles = "http://worldtimeapi.org/api/timezone/America/Los_Angeles"
let urlToquio = "http://worldtimeapi.org/api/timezone/Asia/Tokyo"
let urlSydney = "http://worldtimeapi.org/api/timezone/Australia/Sydney";

let showHoursRelogio = document.querySelector('.spanHora');
let showMinutesRelogio = document.querySelector('.spanMinuto');
let showSecondsRelogio = document.querySelector('.spanSegundo');

let showHoursRelogioSP = document.querySelector('.spanHoraSP');
let showMinutesRelogioSP = document.querySelector('.spanMinutoSP');
// let showSecondsRelogioSP = document.querySelector('.spanSegundoSP');

let showHoursRelogioLA = document.querySelector('.spanHoraLA');
let showMinutesRelogioLA = document.querySelector('.spanMinutoLA');
// let showSecondsRelogioLA = document.querySelector('.spanSegundoLA');

let showHoursRelogioM = document.querySelector('.spanHoraM');
let showMinutesRelogioM = document.querySelector('.spanMinutoM');
// let showSecondsRelogioM = document.querySelector('.spanSegundoM');

let showHoursRelogioT = document.querySelector('.spanHoraT');
let showMinutesRelogioT = document.querySelector('.spanMinutoT');
// let showSecondsRelogioT = document.querySelector('.spanSegundoT');

let showHoursRelogioS = document.querySelector('.spanHoraS');
let showMinutesRelogioS = document.querySelector('.spanMinutoS');
// let showSecondsRelogioS = document.querySelector('.spanSegundoS');

let showHoursRelogioL = document.querySelector('.spanHoraL');
let showMinutesRelogioL = document.querySelector('.spanMinutoL');

// retornaData(urlSaoPaulo, showHoursRelogio, showMinutesRelogio, showSecondsRelogio);

let interval = setInterval(() => {
    showH(urlLocal, showHoursRelogio, showMinutesRelogio, showSecondsRelogio);
    showHM(urlSaoPaulo, showHoursRelogioSP, showMinutesRelogioSP);
    showHM(urlLosAngeles, showHoursRelogioLA, showMinutesRelogioLA);
    showHM(urlMadri, showHoursRelogioM, showMinutesRelogioM);
    showHM(urlToquio, showHoursRelogioT, showMinutesRelogioT);
    showHM(urlSydney, showHoursRelogioS, showMinutesRelogioS);
    showHM(urlLisboa, showHoursRelogioL, showMinutesRelogioL);
}, 1000);