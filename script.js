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
// Function to display the list of games in the UI
function displayGames(games) {
    gameList.innerHTML = ''; // Clear any previous results

    // Loop through the array of games returned by the API
    games.forEach(game => {
        // Create a new card for each game
        const card = document.createElement('div');
        card.className = 'card'; // Add the 'card' class for styling
        
        // Set the card's inner HTML to display game details
        card.innerHTML = `
            <img src="${game.background_image}" alt="${game.name}"> <!-- Game image -->
            <h2>${game.name}</h2> <!-- Game title -->
            <p>Release Date: ${game.released || 'N/A'}</p> <!-- Release date or fallback -->
            <p>Rating: ${game.rating || 'N/A'} / 5</p> <!-- Game rating or fallback -->
            <p>Platforms: ${
                game.platforms ? 
                game.platforms.map(p => p.platform.name).join(', ') : 'N/A'
            }</p> <!-- List of platforms or fallback -->
            <a href="${game.metacritic_url || game.website}" target="_blank">More Details</a>
            <!-- Link to more details (Metacritic or official website) -->
        `;
        
        // Append the card to the game list container
        gameList.appendChild(card);
    });
}
