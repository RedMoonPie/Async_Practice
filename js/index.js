

const cardsContent = document.getElementById('cards-container');
const API = 'https://rickandmortyapi.com/api/character/';

const CardForPage = 20;
const apiPage = '?page=:page';
const characters = [];

const getData = async (id_number) =>{
    try {
        
        const data = await fetchData(API)
        
                        
         //   const card = GenerateCard(data);
           // cardsContent.appendChild(card)
           const character = await fetchData(`${API}${data.results[id_number].id}`)
         //  results.map(character => {
             const card = GenerateCard(character);
             cardsContent.appendChild(card);
        //   });


    } catch (error) {
        console.error(error)
    }



}

const startApi = () => {
    for (let i = 0; i < CardForPage; i++) {
        getData(i);
        
    }
}

startApi();