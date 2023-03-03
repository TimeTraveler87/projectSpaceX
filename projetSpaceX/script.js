onInit();
async function onInit() {
    const planet_text = document.querySelector('#nb_planet');
    const planets = await getData('https://swapi.dev/api/planets');
    planet_text.innerHTML = planets.count;

    const beings_text = document.querySelector('#nb_being');
    const beings = await getData('https://swapi.dev/api/people');
    beings_text.innerHTML = beings.count;

    const ships_text = document.querySelector('#nb_ship');
    const ships = await getData('https://swapi.dev/api/starships');
    ships_text.innerHTML = ships.count;

    // const horloge_text = document.querySelector('#nb_horloge');
    // const horloge = await getData('https://swapi.dev/api');
    // horloge_text.innerHTML = "";

    const planet_menu = document.querySelector('#planet_menu');
    planet_menu.addEventListener('click',()=>{
        window.location.href = "planet_page.html";
    });
};
async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};