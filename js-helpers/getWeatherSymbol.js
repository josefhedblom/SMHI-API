const cloudSymbol           = [3,4,5,6,7];
const heavyRainSymbol       = [10,18,19,20];
const lightRainSymbol       = [8,9];
const sleetSymbol           = [22,23,24];
const snowSymbol            = [15,16,17,25,26,27];
const sunSymbol             = [1,2];
const highTemperaturSymbol  = [10,18,19,20];
const lowTemperaturSymbol   = [10,18,19,20];
const thunderSymbol         = [11,21];


function getWeatherSymbol(value){
    if(cloudSymbol.includes(value)){
        return getWeatherSymbolCloud(value);
    };
    if(heavyRainSymbol.includes(value)){
        return getWeatherSymbolRainHeavy(value);
    };
    if(lightRainSymbol.includes(value)){
        return getWeatherSymbolRainLight(value);
    };
    if(sleetSymbol.includes(value)){
        return getWeatherSymbolSleet(value);
    };
    if(snowSymbol.includes(value)){
        return getWeatherSymbolSnow(value);
    };
    if(sunSymbol.includes(value)){
        return getWeatherSymbolSun(value);
    };
    if(highTemperaturSymbol.includes(value)){
        return getWeatherSymbolTemperaturHigh(value);
    };
    if(lowTemperaturSymbol.includes(value)){
        return getWeatherSymbolTemperaturLow(value);
    };
    if(thunderSymbol.includes(value)){
        return getWeatherSymbolThunder(value);
    };
};