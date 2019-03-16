window.addEventListener('load', () => {
    let long;
    let lat;

    const result = document.getElementById('error');
    const dailySum = document.getElementById('dailySummary');
    const tempDesc = document.querySelector('.temperature-description');
    const tempDeg = document.querySelector('.temperature-degree');
    const tempSecSpan = document.querySelector('.temperature-section span');
    const locTimeZ = document.querySelector('.location-timezone');
    const iconPic = document.querySelector('.icon');

    const errorCallback = (error) => { // Define callback function for failed attempt
        if(error.code == 1){
            result.innerHTML = "You've decided not to share your position, but it's OK. We won't ask you again.";
        } else if(error.code == 2){
            result.innerHTML = "The network is down or the positioning service can't be reached.";
        } else if(error.code == 3){
            result.innerHTML = "The attempt timed out before it could get the location data.";
        } else{
            result.innerHTML = "Geolocation failed due to unknown error.";
        }
    }

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            // console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `${proxy}https://api.darksky.net/forecast/7402f4a07bff16986afe09fe0e076dbf/${lat},${long}?lang=pl&units=auto`;

            fetch(api)
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                    const { summary, temperature, icon } = data.currently;
                    const sumDay = data.daily.summary;
                    const timeZone = data.timezone;
                    const units = data.flags.units;

                    // DOM elemets
                    dailySum.textContent = sumDay;
                    tempDeg.textContent = temperature;
                    tempDesc.textContent = summary;
                    locTimeZ.textContent = timeZone;

                    // set icon
                    setIcon(icon, iconPic);

                    // change degree
                    if(units === "us"){
                        tempSecSpan.textContent = "F";
                    }else{
                        tempSecSpan.textContent = "C";
                    }
                });
        }, errorCallback);        
    }else{
        alert("Sorry, your browser does not support HTML5 geolocation.");
    }

    function setIcon(icon, iconID){
        const skycons = new Skycons({"color": "#003366"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }

});