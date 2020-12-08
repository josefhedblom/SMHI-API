function getWeatherSymbolSun(num){
    if (sunSymbol.includes(num)) {
        return "<i style='font-size:24px' class='fas'>&#xf185;</i>";
    } else {
        return "---";
    };
};