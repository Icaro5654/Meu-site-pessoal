
//let delay = -0.4;

function createCard(project, preview){
    //delay = delay + 0.4;
    return `
    <div class="card" style="width: 18rem;">
    <img src="/img/${preview}.png" class="card-img" alt="Projeto " width="200">
    <div class="card-body">
  <p class="card-text">${project}</p>
    </div>
</div>
    `
}

document.querySelector("#cards").innerHTML = 

createCard("Em breve", "Icaro2") + createCard("Em breve", "Icaro2") + createCard("Em breve", "Icaro2")