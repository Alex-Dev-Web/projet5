import { TeddyInfo } from './teddy.js';
import { PanierTeddy } from './PanierTeddy.js';

let teddyList;


// fetch api http://localhost:3000/api/teddies GET
function getTeddyList() {
  fetch('http://localhost:3000/api/teddies')
    .then(response => response.json())
    .then(teddyList => createTeddyInfoArray(teddyList))
  console.log(teddyList)
}

// create an array of TeddyInfo from teddyList
function createTeddyInfoArray(teddyList) {
  const teddyInfoArray = [];
  for (let i = 0; i < teddyList.length; i++) {
    let teddyInfo = new TeddyInfo(teddyList[i]._id, teddyList[i].name, teddyList[i].price, teddyList[i].description, teddyList[i].imageUrl, teddyList[i].colors);
    console.log(teddyInfo.name);
    addTeddyInfoToTeddyListSection(teddyInfo)  
  }
}

// add each TeddyInfo in teddyListSection
function addTeddyInfoToTeddyListSection(teddyInfo) {
  console.log(teddyInfo); 
  const teddyListSection = document.getElementById('teddys');
  teddyListSection.innerHTML +=`
  <article>
    <h2>${teddyInfo.name}</h2>
    <img src="${teddyInfo.imageUrl}" alt="${teddyInfo.name}"/>
    <p>Prix : ${teddyInfo.price}€</p>
    <button onclick="window.location.href='product.html?id=${teddyInfo.id}'"> Voir Détails Produit </button>   
  </article>`
}

// TODO add content to inner.html 

function numberInCart() {
  let panier = new PanierTeddy;
  console.log("salut")
  let numberProductInCart = panier.products.length;    
  console.log(numberProductInCart)   
  let numberProduct = document.getElementsByClassName('numberInCart')[0];
  numberProduct.innerHTML = `
  <p>${numberProductInCart}</p>
      `
  console.log(document.getElementsByClassName('numberInCart'))
} 


getTeddyList()
console.log(teddyList)
numberInCart()















