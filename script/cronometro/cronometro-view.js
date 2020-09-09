// VIEW CRONÔMETRO
document.querySelector('.btn-iniciar').addEventListener('click', ()=>{
    star(btnCronometroIniciar, btnCronometroPause, btnCronometroStop);
})
document.querySelector('.btn-pause').addEventListener('click', ()=>{
    pause(btnCronometroIniciar, btnCronometroPause, btnCronometroStop);
})
document.querySelector('.btn-parar').addEventListener('click', ()=>{
    stop(btnCronometroIniciar, btnCronometroPause, btnCronometroStop);
})

let showCronometroH = document.querySelector('#spanCronometroHora');
let showCronometroM = document.querySelector('#spanCronometroMinuto');
let showCronometroS = document.querySelector('#spanCronometroSegundo');
let btnCronometroIniciar = document.querySelector('.btn-iniciar');
let btnCronometroPause = document.querySelector('.btn-pause');
let btnCronometroStop = document.querySelector('.btn-parar');