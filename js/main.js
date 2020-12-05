let inputField  = document.getElementById('locationInput');
let inputButton = document.getElementById('locationBtn');

inputButton.addEventListener('click', () => {
    console.log(`${inputField.value}`);
});