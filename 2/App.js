var productsArr = []

$(document).ready(function () {
    $.ajax({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/photos"
    })
        .done(function (response) {
            productsArr = response;
            productsArr.forEach(function (element) {

                let rgb = `rgb(${Math.round(Math.random() * 255)},
                    ${Math.round(Math.random() * 255)},
                    ${Math.round(Math.random() * 255)}`

                let rgb2 = `rgb(${Math.round(Math.random() * 255)},
                    ${Math.round(Math.random() * 255)},
                    ${Math.round(Math.random() * 255)}`

                let ele = $(`<div><h2>${element.title}<h2/>
                    <p><img src='${element.url}' width="200" height="150" /><p/>
                    </div>`).addClass('element')
                .css({ 'color': rgb, 'background-color': rgb2 })
                .click(function () {
                
                
                    $(this).detach();
                
                });

                $('.product-container').append(ele);

            });
        });
})

