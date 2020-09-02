// BOTÕES
document.querySelector('.btn-iniciar').addEventListener('click', ()=>{
    star(btnPomodoroIniciar, btnPomodoroPause, btnPomodoroStop);
    console.log("start");
})
document.querySelector('.btn-pause').addEventListener('click', ()=>{
    pause(btnPomodoroIniciar, btnPomodoroPause, btnPomodoroStop);
    console.log("pause");
})
document.querySelector('.btn-parar').addEventListener('click', ()=>{
    stop(btnPomodoroIniciar, btnPomodoroPause, btnPomodoroStop);
    console.log("stop");
})
document.querySelector('.btn-resetar').addEventListener('click', ()=>{
    reset(btnPomodoroIniciar, btnPomodoroPause, btnPomodoroStop, btnPomodoroReset);
    console.log("resetou");
})

let showPomodoroMV = document.querySelector('.spanPomodoroMV');
let showPomodoroSV = document.querySelector('.spanPomodoroSV');

let btnPomodoroIniciar = document.querySelector('.btn-iniciar');
let btnPomodoroPause = document.querySelector('.btn-pause');
let btnPomodoroStop = document.querySelector('.btn-parar');
let btnPomodoroReset = document.querySelector('.btn-resetar');

let textEstudar = document.querySelector('.estudar');
let textDescansar = document.querySelector('.descansar');