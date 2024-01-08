const flagBaseUrl = "https://flagsapi.com/BE/flat/64.png";
const selectAll = document.querySelectorAll("select");
// const flagImage = document.querySelectorAll(".select-container img");
// console.log(flagImage);
// let previousElementSibling;
for(let select of selectAll){
    // console.log(select);
    for(let currencyCode in countryList){
        let newOption = document.createElement("option");
        newOption.value = currencyCode;
        newOption.textContent = currencyCode;
        select.appendChild(newOption);
        if(select.id == "from-select"){
            select.value = "NPR";
        }else if(select.id == "to-select"){
            select.value = "USD";
        }
    }
    select.addEventListener("change",(event)=>{
        // console.log(event.target);
        updateFlag(event.target,select);
    })
}


function updateFlag(option,select){
    let image = select.previousElementSibling;
    console.log(image);
    console.log(countryList[option.value]);
    image.src = `https://flagsapi.com/${countryList[option.value]}/flat/64.png`;
}