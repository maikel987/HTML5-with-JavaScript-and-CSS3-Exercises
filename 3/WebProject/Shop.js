var productsArr = []

$(document).ready(function () {
    $.ajax({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/photos"
    })
        .done(function (response) {
            productsArr = response;
for (let index = 0; index < 10; index++) {

            // productsArr.forEach(function (element) {

                let rgb = `rgb(${Math.round(Math.random() * 255)},
                    ${Math.round(Math.random() * 255)},
                    ${Math.round(Math.random() * 255)}`

                let rgb2 = `rgb(${Math.round(Math.random() * 255)},
                    ${Math.round(Math.random() * 255)},
                    ${Math.round(Math.random() * 255)}`

                let ele = $(`<div class="div-import"><h2>${productsArr[index].title}<h2/>
                    <p><img src='${productsArr[index].url}' class="img-import"/><p/>
                    </div>`).addClass('element').addClass('my-transition')
                .css({ 'color': rgb, 'background-color': rgb2 })
                .click(function () {
                
                
                    $(this).detach();
                
                });
                
                
                

                $('.product-container').append(ele);
                 

            }
        });
});


function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  $(document).ready(function(){
 function validate() {
    var $result = $("#result");
    var email = $("#email").val();
    $result.text("");
  
    if (validateEmail(email)) {
    //   $result.text(email + " is valid :)");
    //   $result.css("color", "green");
    $(location).attr('href', 'Congrat-email.html')
    } else {
      $result.text(email + " is not valid :(");
      $result.css("color", "red");
    }
    return false;
  }
  
  $("#validate").bind("click", validate);

})

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



    // var imageURL = $('.imageURL').val();  //$('#image').value;
    

    // var urlRegex3 = new RegExp('^(https?:).+');
    // var imageRegex = new RegExp(/.(jpg|gif|png)$/);

flag = flag && validateEmail($('#form-e-mail').val());

var $result2 = $("#result2");

if(flag){
    alert("Good Data");
    $(location).attr('href', 'Congrat-register.html')

}
else{
     alert("Wrong Data");
     $result2.text("Data are not valid :(");
     $result2.css("color", "red");

    }


}

