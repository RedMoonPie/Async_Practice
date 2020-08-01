const GenerateCard = (Character) => {

    const card = document.createElement('div');
    card.classList.add('card')

    card.innerHTML = `
    <div class="card-photo">
        <img class= "img-photo" src="${Character.image}">
        <span class="origin">${Character.origin.name}</span>
    </div>
    <div class = "card-body">
        <h3>${Character.name}</h3>
        <span class="specie">${Character.species}</span>
        <span class="gender">${Character.gender}</span>
        <span class="starus">${Character.status}</span>
    
    </div>    
    
    `;
    return card;
}
