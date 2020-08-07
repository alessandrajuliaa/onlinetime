let timesForaDeOrdem = [
    {
        time: "Pikena EC",
        escudo: "https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_168/escudo/56/04/20/0026488d9e-b3f1-4af9-8e16-c83535cc325620200802230420",
        nome: "Alessandra",
        foto: "https://graph.facebook.com/v2.9/627919133965987/picture?width=100&height=100",
        pontuacoes: [0],
        total: function(){
            let pontos = 0;
            for(pontuacao of this.pontuacoes){
                pontos += pontuacao;
            }
            return pontos;
        }
    },
    {
        time: "Diarréia2019",
        escudo: "https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_140/escudo/c0/57/50/009e833de9-eb78-4ab1-8773-3ab6dfe156c020190424235750",
        nome: "Leandro",
        foto: "https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/placeholder/perfil.png",
        pontuacoes: [0],
        total: function(){
            let pontos = 0;
            for(pontuacao of this.pontuacoes){
                pontos += pontuacao;
            }
            return pontos;
        }
    },
    {
        time: "Real City AFC",
        escudo: "https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_166/escudo/81/53/28/00a4bc1f3d-8a6b-4941-92a1-2e7100c5848120200727215328",
        nome: "Filipe",
        foto: "https://graph.facebook.com/v2.9/489635107831559/picture?width=100&height=100",
        pontuacoes: [0],
        total: function(){
            let pontos = 0;
            for(pontuacao of this.pontuacoes){
                pontos += pontuacao;
            }
            return pontos;
        }
    },
    {
        time: "azulão esporte clube 5 estrelas",
        escudo: "https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_163/escudo/1e/08/27/0075db0069-33e0-4fce-96ea-436fe54dca1e20200721200827",
        nome: "Paulo Henrique",
        foto: "https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/placeholder/perfil.png",
        pontuacoes: [0],
        total: function(){
            let pontos = 0;
            for(pontuacao of this.pontuacoes){
                pontos += pontuacao;
            }
            return pontos;
        }
    }
];
let timesEmOrdem = [];
//Função principal
function criaEOrdena() {

    //Cria o array de pessoas
    
    //Adiciona as 3 pessoas no array de pessoas
    for (time of timesForaDeOrdem) {
        timesEmOrdem.push(time);
    }
    //Imprime o array desordenado
    console.log(timesEmOrdem);

    //Ordena as pessoas de acordo com a idade da pessoa.
    timesEmOrdem.sort(ordenar);
    timesEmOrdem.reverse();
}

function ordenar(a, b){
    return a.total() - b.total();
}

function imprimirArray(id, array) {
    console.log(array)
}

criaEOrdena();

let interval = setInterval(()=>{
    let div = document.querySelector('.rank');
    if(div){
        clearInterval(interval);
        
        for(timeCartola of timesEmOrdem){
            let divTime = document.createElement('div');
            divTime.innerHTML = `<div class="escudoNome d-flex">
                                    <div class="imgs d-flex align-items-end">
                                        <div class="escudo" style="background-image: url(${timeCartola.escudo});"></div>
                                        <div class="img-foto" style="background-image: url(${timeCartola.foto});"></div>
                                    </div>
                                    <div class="imgs d-flex flex-column justify-content-between ml-2">
                                        <p class="font-weight-bold py-0 m-0">${timeCartola.time}</p>
                                        <p class="font-weight-bold py-0 m-0">${timeCartola.nome}</p>
                                    </div>
                                </div>
                                <div class="pontosPosicao d-flex">
                                    <div class="pontos mr-5 px-1">
                                        <p class="font-weight-bold p-0 m-0">${timeCartola.total()} pts</p>
                                    </div>
                                    <div class="posicao ml-5 px-3">
                                        <p class="font-weight-bold p-0 m-0">${(timesEmOrdem.indexOf(timeCartola)+1)}º</p>
                                    </div>
                                </div>`
            divTime.classList.add("principal", "d-flex", "justify-content-between", "align-items-center", "p-2", "mb-3", "shadow");
            div.appendChild(divTime);
        }
    }
}, 1000);