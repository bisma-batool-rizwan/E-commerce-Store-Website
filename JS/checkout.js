let cart = JSON.parse(localStorage.getItem("cart")) || [];


let orderText = "";


cart.forEach(item=>{

orderText += 
item.name + " - $" + item.price + ", ";

});


document.getElementById("orderDetails").value =
orderText;
