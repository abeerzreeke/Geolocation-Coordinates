
const getLocation = () => {

    let x = document.getElementById('demo');

    if (navigator.geolocation) {navigator.geolocation.getCurrentPosition(showPosition);} 
    else {x.innerHTML = 'Geolocation is not supported by this browser.';}

}

const showPosition = (position) => {

    let x = document.getElementById('demo');

    x.innerText = 'Latitude: ' + position.coords.latitude
    + '\n' + ' Longitude: ' + position.coords.longitude;
}

