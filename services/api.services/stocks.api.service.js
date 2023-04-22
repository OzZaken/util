'use strict'

const STORAGE_KEY = 'stock_db'
const API_KEY = 'RSROAP7JD2KV7H0T'
const gCache = loadFromStorage(STORAGE_KEY) || {}

function getQuotes(symbol, cb) {
    console.log('gCache', gCache)
    if (gCache[symbol] && (Date.now() - gCache[symbol].updatedAt < 60 * 60 * 1000)) {
        console.log('getting from cache')
        cb(gCache[symbol].prices, symbol)
        return
    }
    console.log('getting from server')

    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE &&
            xhr.status === 200) {
            const res = JSON.parse(xhr.responseText)
            const stockPrices = _getStockPrices(res, symbol)
            cb(stockPrices, symbol)
        }
    }
    xhr.open('GET', `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`, true);
    xhr.send()
}

function _getStockPrices(data, symbol) {
    console.log(data)
    const stockPrices = []
    const dailyPrices = data['Time Series (Daily)']
    if (!dailyPrices) return stockPrices

    for (const key in dailyPrices) {
        const currDay = {
            date: key,
            price: dailyPrices[key]['4. close']
        }
        stockPrices.unshift(currDay)
    }
    gCache[symbol] = { updatedAt: Date.now(), prices: stockPrices }
    saveToStorage(STORAGE_KEY, gCache)
    return stockPrices
}
