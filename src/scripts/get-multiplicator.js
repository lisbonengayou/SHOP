export const getMultiplicator = (value, currency) => {

    const selectedCurrency = currency.find(item => item.ccy === value) ?? {};
    
    return Number(selectedCurrency.buy || 1)
}