import { PanierTeddy } from './PanierTeddy.js';


function arrayProducts() {
    let panier = new PanierTeddy;
    const cartsTeddyArray = document.getElementById('panierHtml');
    let elementPanier = "";

    if (panier.products) {

        for (let i = 0; i < panier.products.length; i++) {
            const elementCarts = panier.products[i];
            console.log(i);

            elementPanier += "<div class='elementPanier' id='elementPanier" + i + "'>" +
                `<img src="${elementCarts.imageUrl}" alt="${elementCarts.name}"/>` +
                "<h2>" + elementCarts.name + "</h2>" +
                "<h2>Couleur : " + elementCarts.colors + "</h2>" +
                "<h2>" + elementCarts.price + " €</h2>" +
                `<button class='buttonClear' onclick="clearTest()">X</button>` +
                "</div>";

        }
        document.getElementById('cartItems').innerHTML = elementPanier;
        document.getElementById('emptyCarts').style.display = 'none';
        document.getElementById("removeAll").addEventListener("click", () => clearAll(), false);

        // document.getElementById("buttonClear").addEventListener("click", () => clearByIndex(), false);

    } else {
        document.getElementById('cartItems').display = 'none';
    }
    /*console.log(elementPanier);
    console.log(panier.products[0]);
    console.log(panier)*/



}

/*function clearByIndex() {
    // retrieve the cart's array from localStorage
    let mesTeddy = localStorage.getItem("panier");
    //console.log(mesTeddy);
    let objTeddy = JSON.parse(mesTeddy);
    console.log(buttonClear);
    //let NewPanier = objTeddy.filter(mesTeddy => mesTeddy.id !== i);
    //console.log(NewPanier);
    // remove item from the cart's array
    // mettre a jour le localStorage
    // display the new cart's arrays from localStorage

}*/


function clearTest() {
    this.products.remove(objTeddy);
    localStorage.setItem(this.keyStorage, JSON.stringify(this.products));
    console.log(buttonClear)
}








function clearAll() {
    window.localStorage.clear();
    document.getElementById('emptyCarts').style.display = 'block';
    document.getElementById('displayItems').style.display = 'none';
    numberInCart();
}

function numberInCart() {
    let panier = new PanierTeddy;

    let numberProductInCart
    if (panier.products != null)
        numberProductInCart = panier.products.length;
    else
        numberProductInCart = 0;

    //let numberProductInCart = panier.products?.length;

    let numberProduct = document.getElementsByClassName('numberInCart')[0];
    numberProduct.innerHTML = `<p>${numberProductInCart}</p>`
}


/*fetch("http://localhost:3000/api/teddies/order", {
    headers: {
        'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({ lastName: "myName", firstName: "myFirstName", email: "monemail@zefz.fr", })
}).then(response => response.json())
    .then(response => {
        console.log(reponse)
    })*/




arrayProducts()
numberInCart()
