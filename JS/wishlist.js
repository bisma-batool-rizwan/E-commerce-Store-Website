let wishlist =
JSON.parse(localStorage.getItem("wishlist")) || [];


let container =
document.getElementById("wishlistItems");



wishlist.forEach(item=>{


let card=document.createElement("div");


card.className="card";


card.innerHTML=`

<h3>${item.name}</h3>

<p>$${item.price}</p>

<button>
Add To Cart 🛒
</button>

`;


container.appendChild(card);


});
