const btnCart = document.querySelector('.container-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})


function Primera(){
    let displayImage = document.getElementById('img1')
    if (displayImage.src.match('./images/Disponible.png')){
        displayImage.src ='images/Reservada.png'
        } else {
            displayImage.src ='images/Disponible.png'
        }
}



function Segunda(){
    let displayImage = document.getElementById('img2')
    if (displayImage.src.match('./images/Disponible')){
        displayImage.src ='./images/Reservada.png'
        } else {
            displayImage.src ='./images/Disponible.png'
        } 
}

function Tercera(){
    let displayImage = document.getElementById('img3')
    if (displayImage.src.match('./images/Disponible.png')){
        displayImage.src ='./images/Reservada.png'
        } else {
            displayImage.src ='./images/Disponible.png'
        } 
}

function Cuarta(){
    let displayImage = document.getElementById('img4')
    if (displayImage.src.match('./images/Disponible.png')){
        displayImage.src ='./images/Reservada.png'
        } else {
            displayImage.src ='./images/Disponible.png'
        } 
}

function Quinta(){
    let displayImage = document.getElementById('img5')
    if (displayImage.src.match('./images/Disponible.png')){
        displayImage.src ='./images/Reservada.png'
        } else {
            displayImage.src ='./images/Disponible.png'
        } 
}

function Sexta(){
    let displayImage = document.getElementById('img6')
    if (displayImage.src.match('./images/Disponible')){
        displayImage.src ='./images/Reservada.png'
        } else {
            displayImage.src ='./images/Disponible.png'
        } 
}