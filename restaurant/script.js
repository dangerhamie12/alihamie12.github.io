var swiper = new Swiper(".menu-slider", {
    grabCursor: true,
    loop: true,
    autoHeight: true,
    centeredSlides: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var nav_btn = document.getElementById('menu-button');
var nav = document.getElementById('menu-btn');


//mobile navigation

function navigation() {
    nav.classList.toggle('open');
    nav_btn.classList.toggle('clicked');

}

//form validation
function validate() {
    var name = document.myform.full_name.value;
    var food_name = document.myform.food_name.value;
    var specify = document.myform.specify.value;
    var address = document.myform.address.value;
    var message = document.getElementById('message');

    //regexp
    var reg_full_name = /[a-z]+\s+[a-z]/;
    var reg_test = /<|>/g;


    if (!reg_full_name.test(name) == true) {
        message.innerHTML = "pleas enter your first + last name.";
        message.style.display = "block";
        return false;
    } else if (reg_test.test(name) == true) {
        message.innerHTML = "pleas remove symbols.";
        message.style.display = "block";
        return false;
    } else if (reg_test.test(food_name) == true) {
        message.innerHTML = "pleas remove symbols.";
        message.style.display = "block";
        return false;
    } else if (reg_test.test(specify) == true) {
        message.innerHTML = "pleas remove symbols.";
        message.style.display = "block";
        return false;
    } else if (reg_test.test(address) == true) {
        message.innerHTML = "pleas remove symbols.";
        message.style.display = "block";
        return false;
    }
}