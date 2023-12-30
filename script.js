let dishes = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
]



document.addEventListener("DOMContentLoaded", function () {
    const menuContainer = document.querySelector('.menu-container');
    const rate1Checkbox = document.getElementById('rate1');
    const rate2Checkbox = document.getElementById('rate2');

    function showRecipes(filterType, ratingFilter) {
        menuContainer.innerHTML = '';

        dishes.forEach(dish => {
            if ((!filterType || dish.type === filterType) && (!ratingFilter || (ratingFilter === '4+' && dish.rating >= 4) || (ratingFilter === 'below4' && dish.rating < 4))) {
                const menuItem = document.createElement('div');
                menuItem.innerHTML = `
                    <img src="${dish.imageSrc}" alt="${dish.name}">
                    <div>
                        <p>${dish.type}</p>
                        <span class="menu-details">
                            <h3>${dish.name}</h3>
                            <p>${dish.rating}</p>
                        </span>
                        <span>
                            <h3>${dish.time}</h3>
                            <i class="far fa-heart"></i>
                            <i class="far fa-comment"></i>
                        </span>
                    </div>
                `;

                menuContainer.appendChild(menuItem);
                
            }
        });
    }

    function showRecipesByRating() {
        const ratingFilter = rate1Checkbox.checked ? '4+' : (rate2Checkbox.checked ? 'below4' : null);

        showRecipes(null, ratingFilter);
    }

    showRecipes();

    // Event listener for rating checkboxes
    rate1Checkbox.addEventListener('change', showRecipesByRating);
    rate2Checkbox.addEventListener('change', showRecipesByRating);

    const allRecipesBtn = document.querySelector('#allRecipesBtn');
    allRecipesBtn.addEventListener('click', function () {
        showRecipes();
    });

    const vegRecipesBtn = document.querySelector('#vegRecipesBtn');
    vegRecipesBtn.addEventListener('click', function () {
        showRecipes('veg');
    });

    const nonVegRecipesBtn = document.querySelector('#nonVegRecipesBtn');
    nonVegRecipesBtn.addEventListener('click', function () {
        showRecipes('non-veg');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const homeIcon = document.getElementById('home');
    const navList = document.querySelector('.nav-list');

    homeIcon.addEventListener('click', function () {
        navList.style.display = (navList.style.display === 'none' || navList.style.display === '') ? 'block' : 'none';
        navList.style.display.flexDirection = "column";

    });

});

