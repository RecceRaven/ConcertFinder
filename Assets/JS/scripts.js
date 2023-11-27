$(document).ready(function() {
    /* Show the search history from localStorage on first page load */
    displaySearchHistory();
    
    /* Event listener for submitting search form directly */
    $('#search-form').on('submit', function(event) {
        event.preventDefault();
        let searchTerm = $('#search-field').val();
        runSearch(searchTerm);
    });

    /* Event listener for clicking on search button */
    $('#search-button').on('click', function(event) {
        let searchTerm = $('#search-field').val();
        runSearch(searchTerm);
    });

    /* Helper function to run the search */
    const runSearch = (searchTerm) => {
        mealSearch(searchTerm);
    };
});

	// TO MAKE THE MAP APPEAR YOU MUST
	// ADD YOUR ACCESS TOKEN FROM
	// https://account.mapbox.com
	//mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
//const map = new mapboxgl.Map({
//container: 'map', // container ID
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
//style: 'mapbox://styles/mapbox/streets-v12', // style URL
//center: [-74.5, 40], // starting position [lng, lat]
//zoom: 9 // starting zoom

