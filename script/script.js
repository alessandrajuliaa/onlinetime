function show(minuto, segundo, mm, ss){
    minuto.innerHTML = `${mm < 10 ? '0' + mm : mm}`;
    segundo.innerHTML = `${ss < 10 ? '0' + ss : ss}`;
}

let showCronometroM = document.querySelector('.spanCronometroMinuto');
let showCronometroS = document.querySelector('.spanCronometroSegundo');
let btnCronometroIniciar = document.querySelector('.btn-iniciar');


let pomodoro = 0;
let vinteCinco = 1500000;
let cinco = 300000;
let trinta = 1800000;

function playPomodoro(){
    // do{
        vinteCinco -= 1000;
        // pomodoro = setInterval(timerPomodoro, 1000)
        let d = new Date(vinteCinco);
        let mm = d.getMinutes();
        let ss = d.getSeconds();
        show(showCronometroM, showCronometroS, mm, ss)
        // console.log(mm + " " + `${ ss}`)   
    // }while(vinteCinco != 0);
    
}
function timerPomodoro(){
    if(mm == 25){
        mm--;
    }else{
        ss--;
        if(ss == 0){
            mm--;
        }
    }
    
    show(showCronometroM, showCronometroS, mm, ss);
}
document.querySelector('.btn-iniciar').addEventListener('click', ()=>{
    pomodoro = setInterval(playPomodoro, 10)
})

