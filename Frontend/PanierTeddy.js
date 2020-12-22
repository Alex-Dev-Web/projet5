export class PanierTeddy {
    constructor() {
        this.keyStorage = "panier";
        this.getCarts();
    }

    addInCarts(objTeddy) {

        this.getCarts();

        console.log(this.products)

        if (this.products == undefined) {
            localStorage.setItem(this.keyStorage, JSON.stringify([objTeddy]));
        }
        else {
            this.products.push(objTeddy);
            localStorage.setItem(this.keyStorage, JSON.stringify(this.products));
        }
        numberInCart()
        return true;
    }
    getCarts() {
        return this.products = JSON.parse(localStorage.getItem(this.keyStorage));

    }



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



