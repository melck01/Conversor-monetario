const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.36
const euro = 6.24


const convertvalues = () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value')
    const currencyValueText = document.getElementById('value-converted')



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
    convertvalues()
}


button.addEventListener('click', convertvalues)
select.addEventListener('change', changeCurrency)
