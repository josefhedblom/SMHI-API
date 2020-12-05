let inputField  = document.getElementById('locationInput');
let inputButton = document.getElementById('locationBtn');

inputButton.addEventListener('click', () => {
    fetchStations(inputField.value);
});