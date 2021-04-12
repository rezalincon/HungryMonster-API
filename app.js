const search = document.getElementById('search');
const searchButton = document.getElementById('src-btn');

searchButton.addEventListener('click', () =>{
    const item = search.value;
    getFood(item)
})
    

const getFood = item => {
    
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`)
        .then(response => response.json())
        .then(data => updateUi(data));
}
    



   // fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${item}`)
    //.then (res => res.json())
    //.then(data => console.log(data))


const updateUi = items =>{
 /// const names = items.map (s => s.strMeal);
  const meal = items.meals;
  
  
  
  
     const itemsDiv = document.getElementById('display');
         for(let i=0; i < meal.length; i++){
           const food = meal[i];
        console.log(food.strMeal);
        const foodDiv = document.createElement('div');
            foodDiv.className="displayFood";
        const foodInfo = `
        <img class="fimg" src="${food.strMealThumb}">
        <p class="fname">${food.strMeal} </p>
        <button type="button" class="btn btn-danger">Details</button>
        
        `
        foodDiv.innerHTML = foodInfo;
        itemsDiv.appendChild(foodDiv);
    }
}