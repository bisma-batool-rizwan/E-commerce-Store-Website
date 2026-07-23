function addToCart(productName, price){

let cart = JSON.parse(localStorage.getItem("cart")) || [];


cart.push({
    name: productName,
    price: price
});


localStorage.setItem("cart", JSON.stringify(cart));


alert(productName + " added to cart 🛒");

} 

function openProduct(name, price){

localStorage.setItem(
"selectedProduct",
JSON.stringify({
name:name,
price:price
})
);


window.location.href="product-detail.html";

} 

function searchProducts(){

let input =
document.getElementById("searchInput")
.value
.toLowerCase();


let products =
document.querySelectorAll(".product-card");


products.forEach(product=>{


let name =
product.innerText.toLowerCase();


if(name.includes(input)){

product.style.display="block";

}

else{

product.style.display="none";

}


});


}




function filterCategory(category){


let products =
document.querySelectorAll(".product-card");



products.forEach(product=>{


if(
category==="all" ||
product.dataset.category===category
){

product.style.display="block";

}

else{

product.style.display="none";

}


});


}  


function addToWishlist(name,price){

let wishlist =
JSON.parse(localStorage.getItem("wishlist")) || [];


wishlist.push({

name:name,
price:price

});


localStorage.setItem(
"wishlist",
JSON.stringify(wishlist)
);


alert(name + " added to wishlist ❤️");

}
