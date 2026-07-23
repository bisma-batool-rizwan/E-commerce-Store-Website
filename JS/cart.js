let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartContainer = document.getElementById("cartItems");
let totalBox = document.getElementById("totalPrice");


function displayCart(){

    cartContainer.innerHTML = "";

    let total = 0;


    if(cart.length === 0){

        cartContainer.innerHTML = `
        <h2>Your cart is empty 🛒</h2>
        `;

        totalBox.innerHTML = "Total: $0";
        return;
    }



    cart.forEach((item,index)=>{


        total += item.price;



        let div = document.createElement("div");

        div.className = "cart-item";


        div.innerHTML = `

        <div>
            <h3>${item.name}</h3>
            <p>Price: $${item.price}</p>
        </div>


        <button onclick="removeItem(${index})">
            Remove
        </button>

        `;


        cartContainer.appendChild(div);


    });



    totalBox.innerHTML = 
    "Total: $" + total;


}



function removeItem(index){


    cart.splice(index,1);


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    displayCart();

}



function goCheckout(){

    if(cart.length === 0){

        alert("Your cart is empty!");

        return;
    }


    window.location.href="checkout.html";

}



displayCart();
