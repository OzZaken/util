// Pads a number with zeros to a certain length.
function padZero(num, size = 2) {
    let s = num + ""
    while (s.length < size) s = "0" + s
    return s
}

function getCapitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

function getNumWithCommas(str) {
    return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

function getKebabCase(str) {
    return str.map(prop => {
        const regex = /[^A-Za-z0-9]+/g
        return prop.toLowerCase().replace(regex, '-')
    })
}

function getCamelCase(str) {
    return str.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
}

function getKebabCase(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase();
}

function getTitleCase(str) {
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}