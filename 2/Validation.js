function validForm(event) {
    event.preventDefault();
    let flag = true;
    let inputArr = $('input');
    for (let i = 0; i < inputArr.length; i++) {
        var isRequired = $(inputArr[i]).attr('required');
        var type = $(inputArr[i]).attr('type');
        var value = $(inputArr[i]).val();


        if (isRequired == "required") {

            if (value == '') {
                flag = false;
            } else {
                flag = flag && true;
            }


        } else {
            flag = flag && true;
        }
    }



    var imageURL = $('.imageURL').val();  //$('#image').value;
    

    var urlRegex3 = new RegExp('^(https?:).+');
    var imageRegex = new RegExp(/.(jpg|gif|png)$/);


debugger;


flag = flag && urlRegex3.test(imageURL) &&imageRegex.test(imageURL);

if(flag)alert("Good Data");
else alert("Wrong Data");

var newEle =    {title:$('input[name=name]').val(), 
                url:imageURL,
                description:$('textarea[name=description]').val(),
                age:$('input[name=age]').val(),
                price:$('input[name=price]').val()
                };

                addItem(newEle);

}






function addItem(element){
    let rgb = `rgb(${Math.round(Math.random() * 255)},
    ${Math.round(Math.random() * 255)},
    ${Math.round(Math.random() * 255)}`

let rgb2 = `rgb(${Math.round(Math.random() * 255)},
    ${Math.round(Math.random() * 255)},
    ${Math.round(Math.random() * 255)}`

let ele = $(`<div><h2>${element.title}</h2>
    <p><img src='${element.url}' width="200" height="150" /></p>
    <p>${element.description}</p>
    <p>${element.age}</p>
    <p>${element.price}</p>
    </div>`).addClass('element')
.css({ 'color': rgb, 'background-color': rgb2 })
.click(function () {


    $(this).detach();

});

$('.product-container').prepend(ele);

$('input[name=name]').val(""); 
$('input[name=image]').val(""); 
$('textarea[name=description]').val("");
$('input[name=age]').val("");
$('input[name=price]').val("");
                

}