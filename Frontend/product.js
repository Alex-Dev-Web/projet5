

import { TeddyInfo } from './teddy.js';

import { PanierTeddy } from './PanierTeddy.js';



//fetch api http://localhost:3000/api/teddies/_id GET
function getTeddyId() {
    console.log(location.search);
    let searchParams = new URLSearchParams(location.search);
    let id = searchParams.get("id");
    console.log(id);

    fetch(`http://localhost:3000/api/teddies/${id}`)
      .then(response => response.json())
      .then(teddyJSON => {
        //Create teddyInfo from teddyJSON
        let teddyInfo = new TeddyInfo(teddyJSON._id, teddyJSON.name, teddyJSON.price, teddyJSON.description,teddyJSON.imageUrl, teddyJSON.colors);
        //Display teddyInfo in the DOM
         displayTeddyInfo(teddyInfo)
        
      }) .catch(error => {
          console.log(error);
      })     
        
         
  }
  
  function displayTeddyInfo(teddyInfo) {
    console.log(teddyInfo);
    const teddyInfoByIdSection = document.getElementById('detailsteddy');
    let option = "<option>Choix Couleurs</option>";
    console.log(option);
    for (let i = 0; i < teddyInfo.colors.length; i++) {
      const element = teddyInfo.colors[i];

      option += "<option>"+ element +"</option>";
      console.log("<option>"+ element +"</option>");
    }
    teddyInfoByIdSection.innerHTML +=`
    <article>
      <h2>${teddyInfo.name}</h2>
      <img src="${teddyInfo.imageUrl}" alt="${teddyInfo.name}"/>
      <p>${teddyInfo.price}€</p>
      <select id="colors-select">
      ${option}
      </select>
      <p>Description: ${teddyInfo.description}</p>
      <button id="ajoutpanier" onCkick="addInCarts(id, colors)">Ajouter au Panier</button>
      </article>`;
      document.querySelector('#ajoutpanier').onclick =
      function pushButton (){
        if (document.getElementById("colors-select").value == "Choix Couleurs" ) {
          alert('Choisissez une couleur valide');
          //numberProductInCart()
        } else { 
          let panier = new PanierTeddy;
          teddyInfo.colors = document.getElementById("colors-select").value
          panier.addInCarts(teddyInfo);
          //numberProductInCart()
          //alert('Ajouté au Panier ! '  + teddyInfo.id + " colors= " + document.getElementById("colors-select").value);  
          
          /*panier.products.forEach(product => {
            console.log(product);
            console.log(product.name);
            console.log(product.colors);
            
          });*/
        }
      ;
    };
  }
  
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

  
  //numberProductInCart()
  getTeddyId()
  numberInCart()
  //
  
  
