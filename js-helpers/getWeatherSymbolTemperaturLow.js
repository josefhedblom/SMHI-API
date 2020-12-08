function getWeatherSymbolTemperaturLow(num){
    if (lowTemperaturSymbol.includes(num)) {
        return "<i style='font-size:24px' class='fas'>&#xf76b;</i>";
    } else {
        return "---";
    }
};

