async function getSunsetForMountain(lat, lng){
    let response = await fetch(
        `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`
    );
    let data = await response.json();
    return data;
}


// getSunsetForMountain(44.270403, -71.303501).then(date => {

//     // for(const key in date.results){
//     //     console.log(key + ": " + date.results[0][key])
//     // }
//     console.log(date.results);
// });


document.addEventListener("DOMContentLoaded", ()=>{
  

    const select = document.getElementById("mountainSelect");

    

    for(mountain of mountainsArray){
        const option = document.createElement("option")

        option.innerText = mountain.name;
        select.appendChild(option);


    }

    select.addEventListener("change", async e =>{

        mountainInfo.innerHTML = "";
        const path = "./images/";

        

        for(mountain of mountainsArray){
            if(select.value === mountain.name){
                const sunData = await getSunsetForMountain(mountain.coords.lat, mountain.coords.lng);

                const info = document.getElementById("mountainInfo");
                info.innerHTML = 
                `
                    <h2>${mountain.name}</h2>
                    <p><b>Elevation:</b> ${mountain.elevation}ft.</p>
                    <p>${mountain.desc}</p>
                    <p>Sunrise: ${sunData.results.sunrise}</p>
                    <p>Sunset: ${sunData.results.sunset}</p>
                    <img src ="${path}${mountain.img}">
                
                `
            }
        }
    })



})