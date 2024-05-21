
function handleEvent(e){

    const results = document.getElementById("results")


    if(locationRadio.checked){
        locationLabel.style.display = "block";
        parkTypeLabel.style.display = "none";
        results.innerHTML = "";
    } else{
        locationLabel.style.display = "none";
        parkTypeLabel.style.display = "block";
        results.innerHTML = "";

    }
}




document.addEventListener("DOMContentLoaded", ()=>{



    locationRadio.addEventListener("click", handleEvent);
    parkTypeRadio.addEventListener("click", handleEvent);


    // location.addEventListener("change", displayInfo);
    // parkType.addEventListener("change", displayInfo);



    locations.addEventListener("change", ()=>{

        const results = document.getElementById("results")

        results.innerHTML = "";
        
        const tableElement = document.createElement("table");
        const tableHead = document.createElement("thead");
        const tableBody = document.createElement("tbody");

        tableHead.innerHTML = 
        `
        <tr>
            <th>Park</th>
            <th>Address</th>
            <th>Location</th>
            <th>Contact</th>
        </tr>`
        
        for(park of nationalParksArray){
            if(locations.value.toUpperCase() === park.State.toUpperCase()){

                
             
                tableBody.innerHTML +=
                `<tr>
                    <td>${park.LocationName}</td>
                    <td>${park.Address}</td>
                    <td>${park.City}, ${park.State} ${park.ZipCode}</td>
                    <td>${park.Phone}</td>
                </tr>`
                
                
            }
        }
    
        tableElement.appendChild(tableHead);
        tableElement.appendChild(tableBody);
        results.appendChild(tableElement);

    })

    parkType.addEventListener("change", ()=>{

        const results = document.getElementById("results")

        results.innerHTML = "";
        const tableElement = document.createElement("table");
        const tableHead = document.createElement("thead");
        const tableBody = document.createElement("tbody");

        tableHead.innerHTML = 
        `
        <tr>
            <th>Park</th>
            <th>Address</th>
            <th>Location</th>
            <th>Contact</th>
        </tr>`;
                    
    

                for(let i = 0; i < nationalParksArray.length; i++){
                    if(nationalParksArray[i].LocationName.toUpperCase().includes(parkType.value.toUpperCase())){
                        tableBody.innerHTML += 
                            `
                                <tr>
                                    <td>${nationalParksArray[i].LocationName}</td>
                                    <td>${nationalParksArray[i].Address}</td>
                                    <td>${nationalParksArray[i].City}, ${nationalParksArray[i].State} ${nationalParksArray[i].ZipCode}</td>
                                    <td>${nationalParksArray[i].Phone}</td>
                                </tr>
                                `
                                
                    }
        
                }
        // tableElement.innerHTML += `</tbody>`

        tableElement.appendChild(tableHead);
        tableElement.appendChild(tableBody);
        results.appendChild(tableElement);

    })   

      




});