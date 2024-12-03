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
// Function to fetch games from the RAWG API
function fetchGames(query) {
    // The API URL with the user's search query and API key
    const url = `https://api.rawg.io/api/games?key=${apiKey}&search=${query}`;
    
    // Make a GET request to the API
    fetch(url)
        .then(response => response.json()) // Convert the response to JSON
        .then(data => displayGames(data.results)) // Pass the results to the display function
        .catch(error => console.error('Error fetching games:', error)); // Log any errors to the console
}
