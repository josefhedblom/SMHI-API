let inputField  = document.getElementById('locationInput');
let inputButton = document.getElementById('locationBtn');

inputButton.addEventListener('click', () => {
    let input = capitalizeFirstLetter(inputField.value);
    fetchStations(input);
});