

const searchBtn = () =>{
    let inputFiled = document.getElementById('inputFlied');
   
    let searchButtonValue = document.getElementById('searchButton').value;
    searchButtonValue = inputFiled.value
    inputFiled.value ='';

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchButtonValue}`)
    .then(Response => Response.json())
    .then(data => displayData(data.drinks) )
    .catch(err => console.log(err,'error'))
    
}
const displayData = (coctails) =>{
const coctailsDiv = document.getElementById('coctails');
coctails.forEach(coctail =>{
    const createADiv = document.createElement('div');
    createADiv.innerHTML =`
    <div class="col ">
      <div class="card ">
        <img src="${coctail.strDrinkThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">'${coctail.strDrink}'</h5>
          <p class="card-text">'${coctail.strInstructions}'</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
`;
coctailsDiv.appendChild(createADiv);
})

    
}
