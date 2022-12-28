
//let delay = -0.4;

// CRIANDO FUNÇÃO:
function createCard(project, preview, link){
    //delay = delay + 0.4;
    return `
    
    <div class="card" style="width: 18rem;">
      <a href="${link}" target="__blank__"> <!--link imbutido na imagem--!>
        <img src="/assets/${preview}.svg" class="card-img" alt="Projeto " width="200">
      </a>
      <div class="card-body">
        <p class="card-text">${project}</p>
      </div>
    </div>
    `
}

// CHAMANDO FUNÇÃO:
document.querySelector("#cards").innerHTML = 
// os intens estanos na seguinte ordem: ( PROJETO, PREVIEW, LINK )
createCard("Calendario da Copa", "calendario", "https://github.com/Icaro5654/Calendario-da-Copa.git") + 

createCard("Inteligencia Artificial", "IA", "https://github.com/Icaro5654/Sentimentos_com_IA.git") + 

createCard("Em breve", "surpresa", "#")