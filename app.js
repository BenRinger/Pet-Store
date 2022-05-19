
var shop = [
  {
    title: 'Dog',
    image: './img/dogTilt.jpg',
    price: 350,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    title: 'Dog',
    image: './img/dogStare.jpg',
    price: 500,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    title: 'Dog',
    image: './img/smallDog.jpg',
    price: 375,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    title: 'Cat',
    image: './img/catHunt.jpg',
    price: 100,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    title: 'Cat',
    image: './img/coolCat.jpg',
    price: 125,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    title: 'Cat',
    image: './img/layingCat.jpeg',
    price: 175,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    title: 'Toy',
    image: 'https://img.chewy.com/is/image/catalog/213820_MAIN._AC_SL600_V1590069361_.jpg',
    price: 12,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    title: 'Toy',
    image: './img/dogToyDog.jpg',
    price: 15,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    title: 'Toy',
    image: './img/toyMonkey.avif',
    price: 17,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    title: 'Toy',
    image: './img/toyHammer.webp',
    price: 10,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    title: 'Toy',
    image: './img/kongToy.webp',
    price: 20,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    title: 'Toy',
    image: './img/tacoToy.jpg',
    price: 15,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  }

   ]
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    var postHTML = " "

    var postHTML = " "
    for (var i=0; i < shop.length; i++){
        var heading = "<div class='product'><span><h4>" + shop[i].title + "</h4>"
        var image = '<img src="' + shop[i].image + '"/'
        var price = "<p> $" + shop[i].price + "</p></span>"
        var description = '<div class=""><p>'+ shop[i].description + '</p><button class="btn btn-success">Add to Cart</button></div></div>'
        var concatThis = heading + image + price + description
        postHTML = postHTML + concatThis
  }
  document.getElementById('market').innerHTML = postHTML