const parkTypesArray = [
    "National Park",
    "National Monument",
    "Recreation Area",
    "Scenic Trail",
    "Battlefield",
    "Historic",
    "Memorial",
    "Preserve",
    "Island",
    "River",
    "Seashore",
    "Trail",
    "Parkway"
]
document.addEventListener("DOMContentLoaded", ()=>{

    const parkRadio = document.getElementById("parkType");
    

    for(let i = 0; i < parkTypesArray.length; i++){
        const option = document.createElement("option");

        option.innerText = parkTypesArray[i];
        parkRadio.appendChild(option);
    }

    
})

