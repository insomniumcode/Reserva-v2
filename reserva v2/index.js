const btnCart = document.querySelector('.container-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})

function changeImage(){
    let displayImage = document.getElementById('img1')
    if (displayImage.src.match('./images/Mesa_01.png')){
        displayImage.src ='images/Mesa 01 v2.png'
        } else {
            displayImage.src ='images/Mesa_01.png'
        }
}

        function changeImage2(){
            let displayImage = document.getElementById('img2')
            if (displayImage.src.match('./images/Mesa 02.png')){
                displayImage.src ='./images/Mesa 02 v2.png'
                } else {
                    displayImage.src ='./images/Mesa 02.png'
                }
        }

    function changeImage3(){
        let displayImage = document.getElementById('img3')
        if (displayImage.src.match('./images/Mesa 03.png')){
            displayImage.src ='./images/Mesa 03 v2.png'
            } else {
                displayImage.src ='./images/Mesa 03.png'
            }
    }
