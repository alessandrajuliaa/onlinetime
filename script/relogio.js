// FUNÇÕES GERAIS
function showH(hora, minuto, segundo, hh, mm, ss){
    hora.innerHTML = `${hh}`;
    minuto.innerHTML = `${mm}`;
    segundo.innerHTML = `${ss}`;
}
// RELÓGIO FUNÇÕES
document.querySelector('.btnMenu').addEventListener('click', ()=>{
    document.querySelector('.divMenu').style.display = "flex"
    document.querySelector('body').style.overflow = 'hidden';
})
document.querySelector('.btnClose').addEventListener('click', ()=>{
    document.querySelector('.divMenu').style.display = "none"
    document.querySelector('body').style.overflow = 'auto';
})
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