let container = document.querySelector('.container');
function createElements(object,x){
    const {parameters, name, values, validTime} = object.timeSeries[x];

    if(validTime.includes("T12:00:00Z")) {
        let time                  = document.createElement('h5');
        let temperatur            = document.createElement('li');
        let windSpeed             = document.createElement('li');
        let airPressure           = document.createElement('li');
        let thunderPrediction     = document.createElement('li');
        let precipitation         = document.createElement('li');
        let weatherSymbol         = document.createElement('li');
        let ul                    = document.createElement('ul');
        let weatherDiv            = document.createElement('div');
        let timeDiv               = document.createElement('div');
        let parametersDiv         = document.createElement('div');

        weatherDiv.setAttribute('class','weather');
        timeDiv.setAttribute('class', 'time');
        parametersDiv.setAttribute('class','parameters');
        
        time.innerHTML                    = validTime.replace(("T12:00:00Z"),'');
        temperatur.innerHTML              = parseInt(parameters[1].values);
        windSpeed.innerHTML               = parseInt(parameters[4].values);
        airPressure.innerHTML             = parseFloat(parameters[0].values);
        thunderPrediction.innerHTML       = parseFloat(parameters[6].values);
        precipitation.innerHTML           = parseFloat(parameters[16].values);
        weatherSymbol.innerHTML           = getWeatherSymbol(parseFloat(parameters[18].values));

        //Append li to ul
        ul.appendChild(temperatur);
        ul.appendChild(windSpeed);
        ul.appendChild(airPressure);
        ul.appendChild(thunderPrediction);
        ul.appendChild(precipitation);
        ul.appendChild(weatherSymbol);

        //Append ul to parametersDiv
        parametersDiv.appendChild(ul);

        //Append h5 to timeDiv
        timeDiv.appendChild(time);

        //Append parametersDiv & timeDive to weatherDive
        weatherDiv.appendChild(timeDiv);
        weatherDiv.appendChild(parametersDiv);

        //Append weatherDive to container
        container.appendChild(weatherDiv);
    }
}