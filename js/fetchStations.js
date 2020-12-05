function fetchStations(input) {
    fetch("https://opendata-download-metobs.smhi.se/api/version/latest/parameter/1.json")
    .then(response => {
        return response.json();
    })
    .then(object =>{
        let x = 0;
        while (x < object.station.length){
            const {name, latitude, longitude} = object.station[x];
            if(name === input ) {
                fetchStation(longitude,latitude);
            }
            x++;
        };
    });
};

function fetchStation(lon,lat){
    fetch(`https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${lon}/lat/${lat}/data.json`)
    .then(response => {
        return response.json();
    }).then(object => {
        let x = 0;
        while (x < object.timeSeries.length){
            console.log(object);    
         x++;
        };
    });
};
