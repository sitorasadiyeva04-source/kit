// Переменные для элементов страницы
let timeDirection = true;
let ratingDirection = true;

let cardContainer = document.getElementById('list');
let searchBox = document.getElementById('search');
let filterBox = document.getElementById('filter');
let timeBtn = document.getElementById('sortTime');
let ratingBtn = document.getElementById('sortRating');
let loadText = document.getElementById('loading');
let countText = document.getElementById('counter');
let errorText = document.getElementById('error');
let emptyText = document.getElementById('empty');

// 30 рецептов с проверенными фотографиями
let recipesList = [
    { name: "Сливочные макароны с сыром", cuisine: "Italian", prepTimeMinutes: 10, cookTimeMinutes: 15, caloriesPerServing: 450, rating: 4.8, difficulty: "Easy", image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281298?w=400" },
    { name: "Ароматный куриный суп", cuisine: "American", prepTimeMinutes: 15, cookTimeMinutes: 30, caloriesPerServing: 320, rating: 4.6, difficulty: "Easy", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400" },
    { name: "Пицца Пепперони", cuisine: "Italian", prepTimeMinutes: 20, cookTimeMinutes: 15, caloriesPerServing: 600, rating: 4.9, difficulty: "Medium", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400" },
    { name: "Сладкая овсяная каша", cuisine: "British", prepTimeMinutes: 5, cookTimeMinutes: 10, caloriesPerServing: 250, rating: 4.5, difficulty: "Easy", image: "https://images.unsplash.com/photo-1584776296944-ab6fb5763805?w=400" },
    { name: "Освежающий греческий салат", cuisine: "Greek", prepTimeMinutes: 15, cookTimeMinutes: 0, caloriesPerServing: 200, rating: 4.7, difficulty: "Easy", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400" },
    { name: "Сочный стейк из говядины", cuisine: "American", prepTimeMinutes: 10, cookTimeMinutes: 12, caloriesPerServing: 550, rating: 4.9, difficulty: "Medium", image: "https://images.unsplash.com/photo-1558030006-450675393462?w=400" },
    { name: "Домашняя лазанья", cuisine: "Italian", prepTimeMinutes: 30, cookTimeMinutes: 45, caloriesPerServing: 700, rating: 4.8, difficulty: "Medium", image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400" },
    { name: "Острая курица карри", cuisine: "Indian", prepTimeMinutes: 20, cookTimeMinutes: 25, caloriesPerServing: 500, rating: 4.7, difficulty: "Medium", image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400" },
    { name: "Большой бургер", cuisine: "American", prepTimeMinutes: 15, cookTimeMinutes: 10, caloriesPerServing: 650, rating: 4.6, difficulty: "Easy", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400" },
    { name: "Пышные блинчики", cuisine: "American", prepTimeMinutes: 10, cookTimeMinutes: 15, caloriesPerServing: 350, rating: 4.8, difficulty: "Easy", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400" },
    { name: "Паста Карбонара", cuisine: "Italian", prepTimeMinutes: 10, cookTimeMinutes: 15, caloriesPerServing: 520, rating: 4.9, difficulty: "Easy", image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400" },
    { name: "Салат Цезарь", cuisine: "American", prepTimeMinutes: 20, cookTimeMinutes: 10, caloriesPerServing: 400, rating: 4.7, difficulty: "Easy", image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400" },
    { name: "Мексиканские тако", cuisine: "Mexican", prepTimeMinutes: 15, cookTimeMinutes: 15, caloriesPerServing: 480, rating: 4.6, difficulty: "Medium", image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400" },
    { name: "Сырный крем-суп", cuisine: "American", prepTimeMinutes: 15, cookTimeMinutes: 20, caloriesPerServing: 300, rating: 4.5, difficulty: "Easy", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400" },
    { name: "Рыба на гриле", cuisine: "Mediterranean", prepTimeMinutes: 10, cookTimeMinutes: 15, caloriesPerServing: 350, rating: 4.8, difficulty: "Easy", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400" },
    { name: "Тайский Пад Тай", cuisine: "Thai", prepTimeMinutes: 20, cookTimeMinutes: 15, caloriesPerServing: 460, rating: 4.7, difficulty: "Medium", image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400" },
    { name: "Шоколадный брауни", cuisine: "American", prepTimeMinutes: 15, cookTimeMinutes: 25, caloriesPerServing: 450, rating: 4.9, difficulty: "Easy", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400" },
    { name: "Куриные крылышки барбекю", cuisine: "American", prepTimeMinutes: 15, cookTimeMinutes: 30, caloriesPerServing: 550, rating: 4.6, difficulty: "Medium", image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400" },
    { name: "Овощное рагу", cuisine: "French", prepTimeMinutes: 20, cookTimeMinutes: 40, caloriesPerServing: 220, rating: 4.5, difficulty: "Easy", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400" },
    { name: "Французский луковый суп", cuisine: "French", prepTimeMinutes: 15, cookTimeMinutes: 45, caloriesPerServing: 340, rating: 4.7, difficulty: "Medium", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400" },
    { name: "Спагетти Болоньезе", cuisine: "Italian", prepTimeMinutes: 15, cookTimeMinutes: 30, caloriesPerServing: 580, rating: 4.8, difficulty: "Easy", image: "https://images.unsplash.com/photo-1633337474564-1d9478ca442c?w=400" },
    { name: "Роллы Филадельфия", cuisine: "Japanese", prepTimeMinutes: 40, cookTimeMinutes: 0, caloriesPerServing: 380, rating: 4.9, difficulty: "Medium", image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400" },
    { name: "Куриный шашлык", cuisine: "Middle Eastern", prepTimeMinutes: 30, cookTimeMinutes: 20, caloriesPerServing: 420, rating: 4.7, difficulty: "Easy", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400" },
    { name: "Томатный суп", cuisine: "Italian", prepTimeMinutes: 10, cookTimeMinutes: 25, caloriesPerServing: 260, rating: 4.6, difficulty: "Easy", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400" },
    { name: "Куриные наггетсы", cuisine: "American", prepTimeMinutes: 15, cookTimeMinutes: 15, caloriesPerServing: 450, rating: 4.5, difficulty: "Easy", image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=400" },
    { name: "Мясные тефтели", cuisine: "Swedish", prepTimeMinutes: 20, cookTimeMinutes: 25, caloriesPerServing: 510, rating: 4.8, difficulty: "Medium", image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400" },
    { name: "Картофель фри", cuisine: "Belgian", prepTimeMinutes: 15, cookTimeMinutes: 20, caloriesPerServing: 360, rating: 4.4, difficulty: "Easy", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400" },
    { name: "Японский рамен", cuisine: "Japanese", prepTimeMinutes: 20, cookTimeMinutes: 30, caloriesPerServing: 530, rating: 4.9, difficulty: "Medium", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400" },
    { name: "Клубничный чизкейк", cuisine: "American", prepTimeMinutes: 30, cookTimeMinutes: 0, caloriesPerServing: 480, rating: 4.9, difficulty: "Medium", image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400" },
    { name: "Креветки с соусом", cuisine: "Mediterranean", prepTimeMinutes: 10, cookTimeMinutes: 10, caloriesPerServing: 290, rating: 4.8, difficulty: "Easy", image: "https://images.unsplash.com/photo-1565680314427-a55bb3b8d7e4?w=400" }
];

function showCards(arr) {
    cardContainer.innerHTML = '';
    if (loadText) loadText.style.display = 'none';
    if (countText) countText.innerText = "Показано карточек: " + arr.length;

    if (arr.length === 0) {
        if (emptyText) emptyText.style.display = 'block';
        return;
    } else {
        if (emptyText) emptyText.style.display = 'none';
    }

    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        let totalTime = item.prepTimeMinutes + item.cookTimeMinutes;
        let safeFallback = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400";

        cardContainer.innerHTML += `
            <div class="card">
                <img src="${item.image}" alt="${item.name}" onerror="this.src='${safeFallback}'">
                <div>
                    <h3>${item.name}</h3>
                    <p>Кухня: ${item.cuisine}</p>
                    <p>Время: ${totalTime} мин</p>
                    <p>Калории: ${item.caloriesPerServing}</p>
                    <p>Рейтинг: ${item.rating}</p>
                </div>
            </div>
        `;
    }
}

if (searchBox) {
    searchBox.oninput = function() {
        let text = searchBox.value.toLowerCase();
        let result = [];
        for (let i = 0; i < recipesList.length; i++) {
            if (recipesList[i].name.toLowerCase().includes(text)) {
                result.push(recipesList[i]);
            }
        }
        showCards(result);
    };
}

if (filterBox) {
    filterBox.onchange = function() {
        let val = filterBox.value;
        if (val === 'All') {
            showCards(recipesList);
        } else {
            let result = [];
            for (let i = 0; i < recipesList.length; i++) {
                if (recipesList[i].difficulty === val) {
                    result.push(recipesList[i]);
                }
            }
            showCards(result);
        }
    };
}

if (timeBtn) {
    timeBtn.onclick = function() {
        recipesList.sort(function(a, b) {
            let t1 = a.prepTimeMinutes + a.cookTimeMinutes;
            let t2 = b.prepTimeMinutes + b.cookTimeMinutes;
            return timeDirection ? t1 - t2 : t2 - t1;
        });
        timeDirection = !timeDirection;
        showCards(recipesList);
    };
}

if (ratingBtn) {
    ratingBtn.onclick = function() {
        recipesList.sort(function(a, b) {
            return ratingDirection ? a.rating - b.rating : b.rating - a.rating;
        });
        ratingDirection = !ratingDirection;
        showCards(recipesList);
    };
}

showCards(recipesList);