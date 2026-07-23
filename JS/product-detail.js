let product = JSON.parse(localStorage.getItem("selectedProduct"));


// Show product details

if(product){

document.getElementById("productName").innerHTML = product.name;

document.getElementById("productPrice").innerHTML =
"$" + product.price;

}



// Add to Cart

function addDetailToCart(){


let quantity =
Number(document.getElementById("quantity").value);



let cart = JSON.parse(localStorage.getItem("cart")) || [];



for(let i=0; i<quantity; i++){

cart.push({

name: product.name,
price: product.price

});

}



localStorage.setItem(
"cart",
JSON.stringify(cart)
);



alert("Product added to cart 🛒");


}



// Buy Now

function buyDetailProduct(){


addDetailToCart();


window.location.href="checkout.html";


}
