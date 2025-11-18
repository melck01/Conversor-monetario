const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

// const dolar = 5.36
// const euro = 6.24
// const bitcoin = 632108.00


const convertvalues = async () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value')
    const currencyValueText = document.getElementById('value-converted')



const data = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(response => response.json())

const dolar = data.USDBRL.high
const euro = data.EURBRL.high
const bitcoin = data.BTCBRL.high




    realValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(inputReais)

    if (select.value === 'U$ Dólar Americano') {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(inputReais / dolar)
    }

    if (select.value === "€ Euro") {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
        }).format(inputReais / euro)
    }

    if (select.value === "₿ BitCoin") {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US',{
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
    }).format(inputReais / bitcoin);
        }
    
    


};

changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById("currency-img")

    if (select.value === 'U$ Dólar Americano') {
        currencyName.innerHTML = 'Dólar Americano'
        console.log(select.value)
        currencyImg.src = "./assets/estados-unidos.png"
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = '€ Euro'
        console.log(select.value)
        currencyImg.src = "./assets/euro.png"
    }

    if (select.value === '₿ BitCoin') {
        currencyName.innerHTML = '₿ BitCoin'
        console.log(select.value)
        currencyImg.src = "./assets/bitcoin.png"
    }




    convertvalues()
}


button.addEventListener('click', convertvalues)
select.addEventListener('change', changeCurrency)
