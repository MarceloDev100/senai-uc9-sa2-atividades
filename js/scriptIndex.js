
//Using JQuery into responsive menu => active
$(document).ready(function(){
     $('#menu-bar').click(function(){
         if(!$('#menu').hasClass('active-menu')){
              $('#menu').addClass('active-menu')
              $('#menu').animate({
                  'right': '0px'
              },1200)
         }
     })

     $('#close-menu').click(function(){
        if($('#menu').hasClass('active-menu')){
             $('#menu').animate({
                'right': '-500px'
             }, 1200)
        }

        setTimeout(() => {
            $('#menu').removeClass('active-menu')
        },1200)
    })
})


//Responsive menu with Javascript (commented below)

// let menu = document.getElementById('menu')
// let closeMenu = document.getElementById('close-menu')


// function onShowMenu(){
//     if(!menu.classList.contains('active-menu')){      
//         menu.classList.add('active-menu')
//         menu.animate({
//             right: '0px'
//         }, {duration: 1200})
        
//         setTimeout(() => {
//             menu.style.right = '0px'
//         }, 1200);
//     }
// }

// function onCloseMenu(){
//     if(menu.classList.contains('active-menu')){
//         menu.animate({
//             right: '-500px'
//         }, {duration: 1200})

//         setTimeout(() => {
//             menu.style.right = '-500px'
//             menu.classList.remove('active-menu')
//         }, 1200);
//     }  
// }


//Sending e-mail text to console
let email = document.getElementById('news-email')

function sendEmail(){
    let emailText = email.value
    console.log(emailText)
}


//Loading products list

let productsList = [
    { imagePath: 'img/playstation-image.png', name: 'Playstation 5',  priceBefore: 'De R$ 6.300,00', priceNow: 'Por R$ 5.700,00' },
    { imagePath: 'img/fifa2022.jpg', name: 'Fifa 2022 PS5',  priceBefore: 'De R$ 190,00', priceNow: 'Por R$ 178,00' },
    { imagePath: 'img/mousegamer.jpg', name: 'Mouse gamer',  priceBefore: 'De R$ 700,00', priceNow: 'Por R$ 670,00' },
    { imagePath: 'img/volante-image.png', name: 'Volante com pedal',  priceBefore: 'De R$ 3.200,00', priceNow: 'Por R$ 2.999,99' }
]

function loadProducts(){
   
    let products = document.getElementById('products')
    let template = ""

   for(let i = 0 ; i < productsList.length; i++ ){
      const product = productsList[i]

      template += ` <a href="#">
   <div class="card">
       <div class="offer" id="box">
           <span>Oferta</span>
       </div>
       <div class="image-box"><img src=${product.imagePath} alt="imagem playstation"></div>
       <div class="details">
           <p class="title">${product.name}</p>
           <p class="price-before">${product.priceBefore}</p>
           <p class="price-now">${product.priceNow}</p>
       </div>
   </div>
</a>`
     products.innerHTML = template
   }
}