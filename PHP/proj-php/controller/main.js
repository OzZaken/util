async function getCars() {
    const res = await fetch('api/car.php')
    const cars = await res.json()
    console.log('Cars:', cars)
}

function renderNavLinks(currentPage) {
    const pages = [
        {name: 'Home', url: 'index.html'},
        {name: 'Intro PHP', url: 'intro.php'},
        {name: 'About PHP', url: 'about.php'},
        {name: 'Login', url: 'login.php'}
    ]

    let links = '';
    for (let i = 0; i < pages.length; i++) {
        if (pages[i].url !== currentPage) {
            links += '<a href="' + pages[i].url + '">' + pages[i].name + '</a>'
        }
    }

    return links
}

function onInitFruitSearch(){
    $(document).ready(function() {
        $("#fruit-input").on("keyup", function() {

            var input = $(this).val();
            if (input.length > 2) {
            
                $.ajax({
                    url: "api/fruit.php",
                    type: "POST",
                    data: {input: input},
                    success: function(response) {
                        var fruits = JSON.parse(response);
                        var html = "";
                    
                        if (fruits.length > 0) {
                            for (var i = 0; i < fruits.length; i++) {
                                html += "<li>" + fruits[i] + "</li>";
                            }
                        } else html = "No matching fruits found";
                        
                        $("#fruit-list").html(html);
                    }
                });

            } else $("#fruit-list").html("");
            
        });
    });
}