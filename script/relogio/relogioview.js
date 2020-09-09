"use strict"

let urlLocal = "http://worldtimeapi.org/api/ip";
let urlSaoPaulo = "http://worldtimeapi.org/api/timezone/America/Sao_Paulo";
let urlMadri = "http://worldtimeapi.org/api/timezone/Europe/Madrid"
let urlLisboa = "http://worldtimeapi.org/api/timezone/Europe/Lisbon"
let urlLosAngeles = "http://worldtimeapi.org/api/timezone/America/Los_Angeles"
let urlToquio = "http://worldtimeapi.org/api/timezone/Asia/Tokyo"
let urlSydney = "http://worldtimeapi.org/api/timezone/Australia/Sydney";

let showHoursLocal = document.querySelector('#spanHora');
let showMinutesLocal = document.querySelector('#spanMinuto');
let showSecondsLocal = document.querySelector('#spanSegundo');

let showHoursSP = document.querySelector('.spanHoraSP');
let showMinutesSP = document.querySelector('.spanMinutoSP');
let showDataSP = document.querySelector('.dataSP');

let showHoursLA = document.querySelector('.spanHoraLA');
let showMinutesLA = document.querySelector('.spanMinutoLA');
let showDataLa = document.querySelector('.dataLA');

let showHoursM = document.querySelector('.spanHoraM');
let showMinutesM = document.querySelector('.spanMinutoM');
let showDataM = document.querySelector('.dataM');

let showHoursT = document.querySelector('.spanHoraT');
let showMinutesT = document.querySelector('.spanMinutoT');
let showDataT = document.querySelector('.dataT');

let showHoursS = document.querySelector('.spanHoraS');
let showMinutesS = document.querySelector('.spanMinutoS');
let showDataS = document.querySelector('.dataS');

let showHoursL = document.querySelector('.spanHoraL');
let showMinutesL = document.querySelector('.spanMinutoL');
let showDataL = document.querySelector('.dataL');

let interval = setInterval(() => {
    showH(urlLocal, showHoursLocal, showMinutesLocal, showSecondsLocal);
    showHM(urlSaoPaulo, showHoursSP, showMinutesSP, showDataSP);
    showHM(urlLosAngeles, showHoursLA, showMinutesLA, showDataLa);
    showHM(urlMadri, showHoursM, showMinutesM, showDataM);
    showHM(urlToquio, showHoursT, showMinutesT, showDataT);
    showHM(urlSydney, showHoursS, showMinutesS, showDataS);
    showHM(urlLisboa, showHoursL, showMinutesL, showDataL);
}, 1000);