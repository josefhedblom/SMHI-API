function include(file) { 
  
    var script  = document.createElement('script'); 
    script.src  = file; 
    script.type = 'text/javascript'; 
    script.defer = true; 
    
    document.getElementsByTagName('head').item(0).appendChild(script); 
    
  } 
  
  include('./js/fetchStations.js');
  include('./js/createElement.js');
  include('./js-helpers/capitalizeFirstLetter.js');

let inputField  = document.getElementById('locationInput');
let inputButton = document.getElementById('locationBtn');

inputButton.addEventListener('click', () => {
    let input = capitalizeFirstLetter(inputField.value);
    fetchStations(input);
});