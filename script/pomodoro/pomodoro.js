let pomodoro = 0;
let tempos = [1500000,300000,1500000,300000,1500000,300000,1500000,1800000];
let i = 0;
// [1500000,300000,1500000,300000,1500000,300000,1500000,1800000];

function timer(){
    if(tempos[i] != 0){
        tempos[i] -= 1000;
        show(tempos[i], showPomodoroMV, showPomodoroSV)
    }else{
        console.log('estou no else')
        clearInterval(pomodoro);
        pomodoro = 0;
        i++;
        if(i == 0 || i == 2 || i == 4 || i == 6){
            showP(showPomodoroMV, showPomodoroSV, "25", "0");
            textEstudar.style.display = "inline-block";
            textDescansar.style.display = "none";
        }else if(i == 1 || i == 3|| i == 5){
            showP(showPomodoroMV, showPomodoroSV, "5", "0");
            textEstudar.style.display = "none";
            textDescansar.style.display = "inline-block";
        }else{
            showP(showPomodoroMV, showPomodoroSV, "30", "0");
            textEstudar.style.display = "none";
            textDescansar.style.display = "inline-block";
        }
        // setTimeout(()=>{
        if(i < 8){
            setTimeout(()=>{
                pomodoro = setInterval(timer,80)
            },5000)
        }else{
            btnPomodoroPause.style.display = "none";
            btnPomodoroStop.style.display = "none";
            btnPomodoroReset.style.display = "inline-block";
        }
        // },5000)
    }
}

function show(timer, minuto, segundo){
    let d = new Date(timer);
    let mm = d.getMinutes();
    let ss = d.getSeconds();
    minuto.textContent = `${mm < 10 ? '0' + mm : mm}`;
    segundo.textContent = `${ss < 10 ? '0' + ss : ss}`;
}
function showP(minuto, segundo, mm, ss){
    minuto.textContent = `${mm < 10 ? '0' + mm : mm}`;
    segundo.textContent = `${ss < 10 ? '0' + ss : ss}`;
}
// BOTÕES FUNÇÕES
function star(btnPomodoroIniciar, btnPomodoroPause, btnPomodoroStop){
    pomodoro = setInterval(timer,1000);
    btnPomodoroIniciar.style.display = "none";
    btnPomodoroPause.style.display = "inline-block";
    btnPomodoroStop.style.display = "inline-block";
}
function pause(btnPomodoroIniciar, btnPomodoroPause, btnPomodoroStop){
    clearInterval(pomodoro);
    pomodoro = 0;
    btnPomodoroIniciar.style.display = "inline-block";
    btnPomodoroPause.style.display = "none";
    btnPomodoroStop.style.display = "inline-block";
}
function stop(btnPomodoroIniciar, btnPomodoroPause, btnPomodoroStop){
    clearInterval(pomodoro);
    pomodoro = 0;
    textEstudar.style.display = "inline-block";
    textDescansar.style.display = "none";
    i = 0;
    tempos = [1500000,300000,1500000,300000,1500000,300000,1500000,1800000];
    showP(showPomodoroMV, showPomodoroSV, "25", "0")
    btnPomodoroIniciar.style.display = "inline-block";
    btnPomodoroPause.style.display = "none";
    btnPomodoroStop.style.display = "none";
}
function reset(btnPomodoroIniciar, btnPomodoroPause, btnPomodoroStop, btnPomodoroReset){
    clearInterval(pomodoro);
    pomodoro = 0;
    textEstudar.style.display = "inline-block";
    textDescansar.style.display = "none";
    i = 0;
    tempos = [1500000,300000,1500000,300000,1500000,300000,1500000,1800000];
    showP(showPomodoroMV, showPomodoroSV, "25", "0")
    btnPomodoroIniciar.style.display = "inline-block";
    btnPomodoroPause.style.display = "none";
    btnPomodoroStop.style.display = "none";
    btnPomodoroReset.style.display = "none";
}