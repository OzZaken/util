
const BASE_URL: string = 'http://www.filltext.com/'
console.log('running with ts-node')

function getCities(rowNum: number) {
    const query = `?rows=${rowNum}name={city}`
    const population: string = `&population={numberRange|1000,7000}`
    const url = BASE_URL + query + population

    const dataPrm: Promise<Response> = fetch(url)
    return dataPrm.then((res: Response) => res.json())
}

console.log(getCities(5))