const loadMeatData = (foodName) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeatData(data))
}

const displayMeatData = meals =>{
    const mealContainer = document.getElementById('cards');
    const mealsAll = meals.meals;
    mealContainer.innerText = '';
    
    for(const meal of mealsAll){
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.classList.add('w-96');
        cardDiv.classList.add('bg-base-100');
        cardDiv.classList.add('shadow-xl');
        
        
        cardDiv.innerHTML=`
        <figure><img src="${meal.strMealThumb}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${meal.strMeal}</h2>
          <p>${meal.strTags}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
        `;
        mealContainer.appendChild(cardDiv);
        // console.log(meal.strTags);
    }

    
    
    
}

const searchMeal = search =>{
    const searchText = document.getElementById('search-field').value;
    // searchText.value = '';
    // console.log(searchText)
    loadMeatData(searchText);

    
    
}





loadMeatData('pizza');