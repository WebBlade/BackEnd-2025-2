const baseUrl = 'https://bank.gov.ua/NBU_ovdp'
const currency = "EUR"
const exact_date = "10.09.2024"

const url = new URL(baseUrl)

url.searchParams.append('val_code', currency)
url.searchParams.append('date', exact_date)
url.searchParams.append('json', '')

console.log(url.toString())