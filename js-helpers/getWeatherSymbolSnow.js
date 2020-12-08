function getWeatherSymbolSnow(num) {
    if (snowSymbol.includes(num)) {
        return "<i style='font-size:24px' class='fas'>&#xf2dc;</i>";
    } else {
        return "---";
    }
};