const menuEmail = document.querySelector('.navbar-email');
const deskTopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toogleDesktopMenu);
menuHamIcon.addEventListener('click', toogleMobileMenu);
menuCarritoIcon.addEventListener('click', toogleCarritoAside );


function toogleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
      aside.classList.add('inactive');
    }

    deskTopMenu.classList.toggle('inactive');
}

function toogleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
      aside.classList.add('inactive'); 
    }

    mobileMenu.classList.toggle('inactive');
}

function toogleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  
    if (!isMobileMenuClosed) {
      mobileMenu.classList.add('inactive'); 
    }

    aside.classList.toggle('inactive');
}


// Creando la lista de productos del main en JS

const producList = [];
producList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'  
});
producList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'  
});
producList.push({
  name: 'Compu',
  price: 620,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'  
});

/*<div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="poduct-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div>*/

function renderProduct(arr) {
  for (product of arr) {
    //
    const productCard = document.createElement('div');
    productCard.classList.add('product-card')
  
    //product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
  
    //
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info')
    
    //
    const productInfoDiv = document.createElement('div');
  
    
    const productPrice = document.createElement('p');
    productPrice.innerHTML = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerHTML = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    //
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
  
  
  // otros productos 
  for (product of producList) {
    //
    const productCard = document.createElement('div');
    productCard.classList.add('product-card')
  
    //product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
  
    //
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info')
    
    //
    const productInfoDiv = document.createElement('div');
  
    
    const productPrice = document.createElement('p');
    productPrice.innerHTML = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerHTML = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    //
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

renderProduct(producList);


