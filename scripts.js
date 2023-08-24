const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector (".currency-value-to-convert")
    const currencyValueConverted = document.querySelector (".currency-value")
    
    const dolarToday = 4.8
    const euroToday = 5.3
    const libraToday = 6.2
           
    if(currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if(currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-de", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday) 
    }

    if(currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-uk", {
            style: "currency",
            currency: "GPB"
        }).format(inputCurrencyValue / libraToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

       
}
function changeCurrency(){
    const currencyName = document.getElementById ("currency-name")
    const currencyImage = document.querySelector (".currency-img")

    if(currencySelect.value == "dolar"){
    currencyName.innerHTML = "Dólar Americano"
    currencyImage.src = "./assets/dolar.png"
    }

    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if(currencySelect.value == "libra"){
    currencyName.innerHTML = "Libra Esterlina"
    currencyImage.src = "./assets/libra.png"
    }

    convertValues()

}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)