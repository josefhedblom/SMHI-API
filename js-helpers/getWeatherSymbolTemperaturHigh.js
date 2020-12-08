function getWeatherSymbolTemperaturHigh(num){
    if (highTemperaturSymbol.includes(num)) {
        return "<i style='font-size:24px' class='fas'>&#xf769;</i>";
    } else {
        return "---";
    }
};

