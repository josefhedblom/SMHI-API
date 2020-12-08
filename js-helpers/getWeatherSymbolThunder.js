function getWeatherSymbolThunder(num){
    if (thunderSymbol.includes(num)) {
        return "<i style='font-size:24px' class='fas'>&#xf0e7;</i>";
    } else {
        return "---";
    };
};