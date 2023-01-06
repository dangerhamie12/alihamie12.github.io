let cart_icon = document.querySelector('.cart-icon');
let cart = document.querySelector('.cart');
let close_cart = document.querySelector('.close');

// show cart
cart_icon.onclick = () => {
        cart.classList.add("cart-active")
    }
    // close cart
close_cart.onclick = () => {
        cart.classList.remove("cart-active")
    }
    // cart working
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

// making function
function ready() {

    let remove_from_cart = document.getElementsByClassName('remove-cart');
    for (var i = 0; i < remove_from_cart.length; i++) {
        var button = remove_from_cart[i];

        button.addEventListener('click', remove_cart_item)

    }
    // quantity changes
    let quantity_inputs = document.getElementsByClassName('quantity');
    for (let i = 0; i < quantity_inputs.length; i++) {
        console.log("ali1");
        var input = quantity_inputs[i];
        console.log(input);
        input.addEventListener("change", quantity_changed);
    }
    // add item to cart
    let add_cart = document.getElementsByClassName('add-cart');
    for (let i = 0; i < add_cart.length; i++) {
        var button = add_cart[i];
        button.addEventListener("click", add_cart_clicked)

    }

    // buy button
    document.getElementsByClassName('btn-buy')[0].addEventListener("click", buy_clicked);


}

function buy_clicked() {
    alert("your order is placed");
    let cart_content = document.getElementsByClassName('cart-content')[0];
    while (cart_content.hasChildNodes()) {
        cart_content.removeChild(cart_content.firstChild);
    }
    update_total();

}
let item_number = document.querySelector('.item-number');


// remove item from the cart
function remove_cart_item(event) {
    var button_clicked = event.target;
    button_clicked.parentElement.remove();
    item_number.innerText--;
    update_total();
}
// quantity changed
function quantity_changed(event) {

    let input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    update_total();
}
// add to cart
function add_cart_clicked(event) {
    let button = event.target;
    let shop_products = button.parentElement;
    let name = shop_products.getElementsByClassName('product-title')[0].innerText;
    let price = shop_products.getElementsByClassName('price')[0].innerText;
    let img = shop_products.getElementsByClassName('product-img')[0].src;
    add_product_to_cart(name, price, img);
    update_total()

}



function add_product_to_cart(name, price, img) {
    let cart_shop_box = document.createElement('div');
    cart_shop_box.classList.add('cart-box');
    let cart_items = document.getElementsByClassName('cart-content')[0];
    let cart_items_name = cart_items.getElementsByClassName('item-name');
    for (let i = 0; i < cart_items_name.length; i++) {
        if (cart_items_name[i].innerText == name) {
            alert("you have aleready added this item");

            return;
        }
    }





    let cart_box_content = `
    <img src="${img}" alt="" class="cart-img">
    <div class="item-name">${name}</div>
    <div class="cart-price">${price}</div>
    <input type = "number" class = "quantity">
    <i class = "fa-regular fa-trash-can remove-cart"></i>
    `;
    cart_shop_box.innerHTML = cart_box_content;
    cart_items.append(cart_shop_box);
    cart_shop_box.getElementsByClassName('remove-cart')[0].addEventListener("click", remove_cart_item);
    cart_shop_box.getElementsByClassName('quantity')[0].addEventListener("change", quantity_changed);


    console.log('ali')
        // let item_number = document.querySelector('.item-number');
    item_number.classList.add("item-number-active");
    item_number.innerText = document.getElementsByClassName("item-name").length;
}

// function count() {

//     let counter = 1;
//     let item_number = document.querySelector('.item-number');
//     item_number.classList.add("item-number-active");
//     item_number.innerText = counter++;
//     console.log(item_number);
// }




// update total
function update_total() {
    let cart_content = document.getElementsByClassName('cart-content')[0];
    let cart_box = cart_content.getElementsByClassName('cart-box');
    var total = 0;
    for (var i = 0; i < cart_box.length; i++) {
        let cart_boxes = cart_box[i];
        let element_price = cart_boxes.getElementsByClassName('cart-price')[0];
        let quantity_element = cart_boxes.getElementsByClassName('quantity')[0];
        let price = parseFloat(element_price.innerText.replace('$', ''));
        let quantity = quantity_element.value;
        total = total + (price * quantity);


    }
    var div_total = document.getElementById('total');
    div_total.innerText = total + '$';


}