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
  include('./js-helpers/getWeatherSymbol.js');
  include('./js-helpers/getWeatherSymbolCloud.js');
  include('./js-helpers/getWeatherSymbolRainHeavy.js');
  include('./js-helpers/getWeatherSymbolRainLight.js');
  include('./js-helpers/getWeatherSymbolSleet.js');
  include('./js-helpers/getWeatherSymbolSnow.js');
  include('./js-helpers/getWeatherSymbolSun.js');
  include('./js-helpers/getWeatherSymbolTemperaturLow.js');
  include('./js-helpers/getWeatherSymbolTemperaturHigh.js');
  include('./js-helpers/getWeatherSymbolThunder.js');

let inputField  = document.getElementById('locationInput');
let inputButton = document.getElementById('locationBtn');

inputButton.addEventListener('click', () => {
    let input = capitalizeFirstLetter(inputField.value);
    fetchStations(input);
});