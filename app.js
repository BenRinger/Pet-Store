import { arrayOf } from "prop-types"

var shop = [
    {
      title: 'Tigers',
      image: './img/gerbile.jpg',
      price: '$7,500-15,000',
      description: ''
    },
    
  
    
    ]
    
    var postHTML = " "
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    
  
  
  
    for (var i=0; i < arr.length ; i++){
        var heading = '<div class="product"' + '"><span>" "<h5>"' + shop[i].title + '</h5>'
        var image = '<img src="./"' + shop[i] + '"/>'
        var price = '<p> $' + shop.price + '</p></span>'
        var description = '<div class=""><p>'+ shop.description + '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML
  