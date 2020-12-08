function getWeatherSymbolRainHeavy(num){
    if (heavyRainSymbol.includes(num)) {
        return "<i style='font-size:24px' class='fas'>&#xf740;</i>";
    } else {
        return "---";
    }
};

