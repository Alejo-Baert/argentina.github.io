//const boton = document.getElementById('flexSwitchCheckDefault');

const ham = document.getElementById('ham');
const aparecer = document.querySelector('.aparecer');
const cerrar = document.querySelector('ul');


/*boton.addEventListener('click', function(){
    document.body.classList.toggle('ejemplo')
    ham.classList.toggle('ejemplo1')
    if(body.style.backgroundColor==="black" && header.style.color==="white"){
        body.style.backgroundColor="white"
        header.style.color="black"
    }
    else{
        body.style.backgroundColor="black"
        header.style.color="white"
    }
})*/


ham.addEventListener('click', function(){
    aparecer.classList.toggle('active')
})
cerrar.addEventListener('click', function(){
    aparecer.classList.toggle('active')
})

/**/

window.onscroll = function (e) { 
    const lastPosition = window.scrollY;
  
    if (lastPosition > 600) {
    ham.classList.add("ejemplo");
  } else if (ham.classList.contains("ejemplo")) {
    ham.classList.remove("ejemplo");
  } else {
    ham.classList.remove("ejemplo");
  }
  }