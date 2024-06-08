const resultsContainer = document.getElementById('results');
let allClothes = []; 

function displayClothes(clothesToDisplay) {
  resultsContainer.innerHTML = '';
  clothesToDisplay.forEach(item => {
    const card = document.createElement('div');
    card.className = 'col-md-4';
    card.innerHTML = `
      <div class="card">
        <img src="${item.image}" class="card-img-top" alt="${item.name}">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.description}</p>
        </div>
      </div>
    `;
    resultsContainer.appendChild(card);
  });
}

function fetchAndDisplayClothes() {
  fetch('data/clothes.json')
    .then(response => response.json())
    .then(clothes => {
      allClothes = clothes; 
      // Store all clothes in the variable
      displayClothes(allClothes); 
      // Display all clothes initially
    })
    .catch(error => console.error('Error fetching clothes:', error));
}

document.getElementById('searchBar').addEventListener('input', function() {
  const query = this.value.toLowerCase();
  if (query.length > 3) {
    const filteredClothes = allClothes.filter(item => item.name.toLowerCase().includes(query));
    displayClothes(filteredClothes);
  } else {
  }
});

// Initial display of all clothes
fetchAndDisplayClothes();
