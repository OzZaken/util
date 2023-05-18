import { debounce } from './services/util.service.js'

async function getCars() {
    const res = await fetch('api/car.php')
    const cars = await res.json()
    renderCars(cars)
}

function renderCars(cars) {
    const elCarList = document.querySelector('#nested-car-list')
    let html = '<ol>'
    cars.forEach(car => {
        html += `<li>
            <ul>
                <li>Speed: ${car.speed}</li>
                <li>Vendor: ${car.vendor}</li>
            </ul>
        </li>
        <br />`
    })
    html += '</ol>'
    elCarList.innerHTML = html
}

function onInitFruitSearch() {
    console.log('check');
    const elList = $('.fruit-list');

    const handleFruitSearch = debounce(function () {
        const val = $(this).val();

        if (val.length > 0) {
            $.ajax({
                url: `api/fruit.php?q=${val}`,
                type: 'GET',
                success: (res) => {
                    const fruits = JSON.parse(res);
                    console.log(`UT \t fruits:`, fruits);
                    let strHtml = '';

                    if (fruits.length > 0) {
                        console.log(`UT \t fruits.length > 0:`, fruits.length > 0);
                        for (let i = 0; i < fruits.length; i++) {
                            strHtml += `<li>${fruits[i].name}</li>`;
                        }
                    } else strHtml = 'No matching fruits found';
                    elList.html(strHtml);
                },
            });
        } else elList.html('');
    }, 300); // Adjust the delay (in milliseconds) according to your needs

    $('#search-fruit').on('keyup', handleFruitSearch);
}