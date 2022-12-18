
//let delay = -0.4;

// CRIANDO FUNÇÃO:
function createCard(project, preview, link){
    //delay = delay + 0.4;
    return `
    <div class="card" style="width: 18rem;">
      <a href="${link}" target="__blank__"> <!--link imbutido na imagem--!>
        <img src="/img/${preview}.png" class="card-img" alt="Projeto " width="200">
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
createCard("Em breve", "surpresa", "https://github.com/Icaro5654/Calendario-da-Copa.git") + 

createCard("Em breve", "surpresa", "#") + 

createCard("Em breve", "surpresa", "#")