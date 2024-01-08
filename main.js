const flagBaseUrl = "https://flagsapi.com/BE/flat/64.png";
const selectAll = document.querySelectorAll("select");
const button = document.querySelector(".button");
const fromCurrency = document.querySelector(".from-container select");
const toCurrency = document.querySelector(".to-container select");
let showResult = document.querySelector("#exchageRate");

for(let select of selectAll){
    
    for(let currencyCode in countryList){
        let newOption = document.createElement("option");
        newOption.value = currencyCode;
        newOption.textContent = currencyCode;
        select.appendChild(newOption);
        if(select.id == "from-select"){
            select.value = "USD";
        }else if(select.id == "to-select"){
            select.value = "NPR";
        }
    }
    select.addEventListener("change",(event)=>{
        
        updateFlag(event.target,select);
    })
}


function updateFlag(option,select){
    let image = select.previousElementSibling;
    console.log(image);
    
    console.log(countryList[option.value]);
    image.src = `https://flagsapi.com/${countryList[option.value]}/flat/64.png`;
}


async function getRates(){
    let amount =Number(document.getElementById("amount").value);
    let from = fromCurrency.value.toLowerCase();
    let to = toCurrency.value.toLowerCase();
    // console.log(form,to , amount);
    let response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}/${to}.json`)
    let data = await response.json();
    let rate = data[to];
    let date = (data["date"]);
    showResult.innerHTML= `${amount} ${from.toUpperCase()} = ${(rate * amount).toFixed(2)} ${to.toUpperCase()} &nbsp;&nbsp;  (${date})`;

}


button.addEventListener("click",async ()=>{
    getRates();

});
window.addEventListener("load", () => {
    getRates();
  });