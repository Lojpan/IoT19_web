



function getTrainTimes() {
    const departurediv = document.getElementById('departures');

    const uriTrains = 'https://cors-anywhere.herokuapp.com/http://api.sl.se/api2/realtimedeparturesV4.json?key=2ce7e7eb4aac48a294cd444f4417607c&siteid=9294&timewindow=30';
    fetch(uriTrains)
        .then((resp) => resp.json())
        .then(function (data) {
            console.log(data)
            let departuresMetros = data.ResponseData.Metros; 
            departurediv.innerHTML = "";
            return departuresMetros.map(function (departure) {
                let divtag = document.createElement('div');
        
                divtag.innerHTML = `${departure.DisplayTime + " " + departure.Destination}`;
                departurediv.appendChild(divtag);
            })
        })
        .catch(function (error) {
            console.log(error);
        });
}



function getForecast() {

    const divForecast = document.getElementById('divForecast');
    const uriForecast = 'https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/16.158/lat/58.5812/data.json';

    fetch(uriForecast)
        .then((resp) => resp.json())
        .then(function (data) {
            console.log(data)
            let forecast = data.timeSeries[0].parameters;
            let divtag = document.createElement('div');
         

            // The Weathersymbol API presents a number between 1-28, this loop matches that number with an image from an array stored locally
            for (i = 0; i < 28; i++) {  

                if (forecast[18].values[0] == i) {
                    
                    var img = new Image();
                    var div = document.getElementById('divWeatherSymbol');
                    img.onload = function () {
                        div.innerHTML += '<img src="' + img.src + '" />';
                    };

                    img.src = imgArray[i];

                    break;
                }
            }
        })

        .catch(function (error) {
            console.log(error);
        });
}



// Array with the Images needed for getForecast()
var imgArray = ['weatherSymbols/1.png', 'weatherSymbols/2.png', 'weatherSymbols/3.png', 'weatherSymbols/4.png', 'weatherSymbols/5.png',
    'weatherSymbols/6.png', 'weatherSymbols/7.png', 'weatherSymbols/8.png', 'weatherSymbols/9.png', 'weatherSymbols/10.png', 'weatherSymbols/11.png'
    , 'weatherSymbols/12.png', 'weatherSymbols/13.png', 'weatherSymbols/14.png', 'weatherSymbols/15.png', 'weatherSymbols/16.png', 'weatherSymbols/17.png'
    , 'weatherSymbols/18.png', 'weatherSymbols/19.png', 'weatherSymbols/20.png', 'weatherSymbols/21.png', 'weatherSymbols/22.png', 'weatherSymbols/23.png'
    , 'weatherSymbols/24.png', 'weatherSymbols/25.png', 'weatherSymbols/26.png', 'weatherSymbols/27.png'];
