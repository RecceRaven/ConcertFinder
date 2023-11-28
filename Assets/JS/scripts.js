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

mapboxgl.accessToken = 'pk.eyJ1IjoiandhdHNvbmNvZGVzIiwiYSI6ImNscGhoNzdmMTAyNjUycW9oYjhjcjN6ZmMifQ.5dF1EeA8M509DfFEV1Uf6g';

const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/light-v11',
center: [-96, 37.8],
zoom: 3
});



