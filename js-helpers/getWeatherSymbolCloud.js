function getWeatherSymbolCloud(num){
    if (cloudSymbol.includes(num)) {
        return "<i style='font-size:24px' class='fas'>&#xf6c4;</i>";
    } else {
        return "---";
    };
};

