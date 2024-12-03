//  RAWG API key 
const apiKey = 'cede35038d3f44ef8e725c5518184473';
// Grab references to the input field, button, and the area where game results will be displayed
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const gameList = document.getElementById('game-list');

// Add a click event listener to the "Search" button
searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim(); // Get the user's search query, removing any extra spaces
    if (query) {
        fetchGames(query); // Call the function to fetch games if there's a valid query
    }
});