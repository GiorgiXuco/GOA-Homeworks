const guineaPigsContainer = document.getElementById('guineaPigsContainer');
const genderFilter = document.getElementById('genderFilter');
const priceFilter = document.getElementById('priceFilter');

let guineaPigs = [];

async function fetchGuineaPigs() {
    const response = await fetch('guineaPigs.json'); // ლოკალური JSON
    guineaPigs = await response.json();
    renderGuineaPigs();
}

function renderGuineaPigs() {
    const gender = genderFilter.value;
    const maxPrice = parseFloat(priceFilter.value);

    guineaPigsContainer.innerHTML = '';

    const filtered = guineaPigs.filter(pig => {
        const genderMatch = gender === '' || pig.gender === gender;
        const priceMatch = isNaN(maxPrice) || pig.price <= maxPrice;
        return genderMatch && priceMatch;
    });

    filtered.forEach(pig => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
      <img src="${pig.image}" alt="${pig.name}" />
      <h3>${pig.name}</h3>
      <p>Gender: ${pig.gender}</p>
      <p>Age: ${pig.age} months</p>
      <p>Price: ${pig.price} ₾</p>
    `;
        guineaPigsContainer.appendChild(card);
    });
}

genderFilter.addEventListener('change', renderGuineaPigs);
priceFilter.addEventListener('input', renderGuineaPigs);

fetchGuineaPigs();

