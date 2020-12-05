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
                console.log(longitude,latitude);
            }
            x++;
        };
    });
};

