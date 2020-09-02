// VARIÁVEIS CRONOMETRO
let hh = 0;
let mm = 0;
let ss = 0;
let cronometro = 0;

function show(hora, minuto, segundo, hh, mm, ss){
    hora.innerHTML = `${hh < 10 || hh == 60 ? '0' + hh : hh}`;
    minuto.innerHTML = `${mm < 10 ? '0' + mm : mm}`;
    segundo.innerHTML = `${ss < 10 ? '0' + ss : ss}`;
}

// CRONOMETRO FUNÇÕES
function star(btnCronometroIniciar, btnCronometroPause, btnCronometroStop){
    cronometro = setInterval(timer, 1000);
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

// MENU FUNÇÕES
document.querySelector('.btnMenu').addEventListener('click', ()=>{
    document.querySelector('.divMenu').style.display = "flex"
    document.querySelector('body').style.overflow = 'hidden';
})
document.querySelector('.btnClose').addEventListener('click', ()=>{
    document.querySelector('.divMenu').style.display = "none"
    document.querySelector('body').style.overflow = 'auto';
})