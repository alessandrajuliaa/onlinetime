"use strict"

let urlSaoPaulo = "http://worldtimeapi.org/api/timezone/America/Sao_Paulo";
let urlMadri = "http://worldtimeapi.org/api/timezone/Europe/Madrid"
let urlLosAngeles = "http://worldtimeapi.org/api/timezone/America/Los_Angeles"
let urlToquio = "http://worldtimeapi.org/api/timezone/Asia/Tokyo"
let urlSydney = "http://worldtimeapi.org/api/timezone/Australia/Sydney"

let showHoursRelogio = document.querySelector('.spanHora');
let showMinutesRelogio = document.querySelector('.spanMinuto');
let showSecondsRelogio = document.querySelector('.spanSegundo');

let interval = setInterval(() => {
    retornaData(urlSaoPaulo, showHoursRelogio, showMinutesRelogio, showSecondsRelogio);
    // retornaData(urlSaoPaulo, showHoursSP, showMinutesSP, showSecondsSP);
    // retornaData(urlLosAngeles, showHoursLA, showMinutesLA, showSecondsLA);
    // retornaData(urlMadri, showHoursM, showMinutesM, showSecondsM);
    // retornaData(urlToquio, showHoursT, showMinutesT, showSecondsT);
    // retornaData(urlSydney, showHoursS, showMinutesS, showSecondsS);
}, 1000);

