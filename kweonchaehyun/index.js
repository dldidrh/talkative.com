
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const image5 = document.getElementById('image5');
const image6 = document.getElementById('image6');
const image7 = document.getElementById('image7');
const image8 = document.getElementById('image8');
const image9 = document.getElementById('image9');
const image10 = document.getElementById('image10');
const image11 = document.getElementById('image11');
const image12 = document.getElementById('image12');
const image13 = document.getElementById('image13');
const image14 = document.getElementById('image14');
const image15 = document.getElementById('image15');
const image16 = document.getElementById('image16');

const popup = document.getElementById('popup');
const popupImage = document.getElementById('popupImage');
const closePopup = document.querySelector('.close');


image1.addEventListener('click', function() {
    openPopup('./image/1.png');
});
image2.addEventListener('click', function() {
    openPopup('./image/2.png');
});
image3.addEventListener('click', function() {
    openPopup('./image/3.png');
});
image4.addEventListener('click', function() {
    openPopup('./image/4.png');
});
image5.addEventListener('click', function() {
    openPopup('./image/5.png');
});
image6.addEventListener('click', function() {
    openPopup('./image/6.png');
});
image7.addEventListener('click', function() {
    openPopup('./image/7.png');
});
image8.addEventListener('click', function() {
    openPopup('./image/8.png');
});
image9.addEventListener('click', function() {
    openPopup('./image/9.png');
});
image10.addEventListener('click', function() {
    openPopup('./image/10.png');
});
image11.addEventListener('click', function() {
    openPopup('./image/11.png');
});
image12.addEventListener('click', function() {
    openPopup('./image/12.png');
});
image13.addEventListener('click', function() {
    openPopup('./image/13.png');
});
image14.addEventListener('click', function() {
    openPopup('./image/14.png');
});
image15.addEventListener('click', function() {
    openPopup('./image/15.png');
});

image16.addEventListener('click', function() {
    openPopup('./image/16.png');
});





closePopup.addEventListener('click', function() {
    popup.style.display = 'none';
});

function openPopup(imageSrc) {
    popupImage.src = imageSrc;
    popup.style.display = 'block';
}






image1.addEventListener('mouseover', function() {
    image1.src = './image/gw1.gif';
});
image1.addEventListener('mouseout', function() {
    image1.src = './image/gw1.png';
});

image2.addEventListener('mouseover', function() {
    image2.src = './image/gw2.gif';
});
image2.addEventListener('mouseout', function() {
    image2.src = './image/gw2.png';
});

image3.addEventListener('mouseover', function() {
    image3.src = './image/jj1.gif';
});
image3.addEventListener('mouseout', function() {
    image3.src = './image/jj1.png';
});

image4.addEventListener('mouseover', function() {
    image4.src = './image/jj2.gif';
});
image4.addEventListener('mouseout', function() {
    image4.src = './image/jj2.png';
});

image5.addEventListener('mouseover', function() {
    image5.src = './image/jj3.gif';
});
image5.addEventListener('mouseout', function() {
    image5.src = './image/jj3.png';
});

image6.addEventListener('mouseover', function() {
    image6.src = './image/cc1.gif';
});
image6.addEventListener('mouseout', function() {
    image6.src = './image/cc1.png';
});

image7.addEventListener('mouseover', function() {
    image7.src = './image/cc2.gif';
});
image7.addEventListener('mouseout', function() {
    image7.src = './image/cc2.png';
});

image8.addEventListener('mouseover', function() {
    image8.src = './image/cc3.gif';
});
image8.addEventListener('mouseout', function() {
    image8.src = './image/cc3.png';
});

image9.addEventListener('mouseover', function() {
    image9.src = './image/gs1.gif';
});
image9.addEventListener('mouseout', function() {
    image9.src = './image/gs1.png';
});

image10.addEventListener('mouseover', function() {
    image10.src = './image/gs2.gif';
});
image10.addEventListener('mouseout', function() {
    image10.src = './image/gs2.png';
});

image11.addEventListener('mouseover', function() {
    image11.src = './image/gs3.gif';
});
image11.addEventListener('mouseout', function() {
    image11.src = './image/gs3.png';
});


image12.addEventListener('mouseover', function() {
    image12.src = './image/jl1.gif';
});
image12.addEventListener('mouseout', function() {
    image12.src = './image/jl1.png';
});

image13.addEventListener('mouseover', function() {
    image13.src = './image/jl2.gif';
});
image13.addEventListener('mouseout', function() {
    image13.src = './image/jl2.png';
});

image14.addEventListener('mouseover', function() {
    image14.src = './image/jl3.gif';
});
image14.addEventListener('mouseout', function() {
    image14.src = './image/jl3.png';
});

image15.addEventListener('mouseover', function() {
    image15.src = './image/gg1.gif';
});
image15.addEventListener('mouseout', function() {
    image15.src = './image/gg1.png';
});

image16.addEventListener('mouseover', function() {
    image16.src = './image/gg2.gif';
});
image16.addEventListener('mouseout', function() {
    image16.src = './image/gg2.png';
});

document.querySelector('.map2').style.display = 'none';
document.querySelector('.map3').style.display = 'none';
document.querySelector('.map4').style.display = 'none';
document.querySelector('.map5').style.display = 'none';
document.querySelector('.map6').style.display = 'none';
document.querySelector('.map7').style.display = 'none'; 


document.querySelectorAll('.custom-button').forEach(button => {
    button.addEventListener('click', function() {
        const map1 = document.querySelector('.map1');
        const map2 = document.querySelector('.map2');
        const map3 = document.querySelector('.map3');
        const map4 = document.querySelector('.map4');
        const map5 = document.querySelector('.map5');
        const map6 = document.querySelector('.map6');
        const map7 = document.querySelector('.map7');

        
        if (this.id === 'button1' || this.id === 'button4' || this.id === 'button14') {
            if (map2.style.display === 'none') {
                map2.style.display = 'block';
                map3.style.display = 'none';
                map4.style.display = 'none';
                map5.style.display = 'none';
                map6.style.display = 'none';
                map7.style.display = 'none'
            } else {
                map2.style.display = 'none';
            }
        } else if (this.id === 'button13' || this.id === 'button10' || this.id === 'button16') {
            if (map3.style.display === 'none') {
                map3.style.display = 'block';
                map2.style.display = 'none';
                map1.style.display = 'block';
                map4.style.display = 'none';
                map5.style.display = 'none';
                map6.style.display = 'none'; 
                map7.style.display = 'none'
            } else {
                map3.style.display = 'none';
            }
        } else if (this.id === 'button2' || this.id === 'button3') {
            if (map4.style.display === 'none') {
                map4.style.display = 'block';
                map1.style.display = 'block';
                map2.style.display = 'none';
                map3.style.display = 'none';
                map5.style.display = 'none';
                map6.style.display = 'none';
                map7.style.display = 'none'
            } else {
                map4.style.display = 'none';
            }

        } else if (this.id === 'button9'|| this.id === 'button7' || this.id === 'button12' ) {
            if (map5.style.display === 'none') {
                map5.style.display = 'block';
                map1.style.display = 'block';
                map2.style.display = 'none';
                map3.style.display = 'none';
                map4.style.display = 'none';
                map6.style.display = 'none'; 
                map7.style.display = 'none'
            } else {
                map5.style.display = 'none';
            }

        } else if (this.id === 'button5'|| this.id === 'button6'|| this.id === 'button11') { 
            if (map6.style.display === 'none') {
                map6.style.display = 'block';
                map1.style.display = 'block';
                map2.style.display = 'none';
                map3.style.display = 'none';
                map4.style.display = 'none';
                map5.style.display = 'none';
                map7.style.display = 'none'
            } else {
                map6.style.display = 'none';
            }

        } else if (this.id === 'button8' || this.id === 'button15' ){
            if (map7.style.display === 'none') {
                map7.style.display = 'block';
                map1.style.display = 'block';
                map2.style.display = 'none';
                map3.style.display = 'none';
                map4.style.display = 'none'
                map5.style.display = 'none';
                map6.style.display = 'none';
            } else {
                map7.style.display = 'none';
            }


        } else {
            map2.style.display = 'none';
            map3.style.display = 'none';
            map4.style.display = 'none';
            map5.style.display = 'none';
            map6.style.display = 'none';
            map7.style.display = 'none';
        }
    });
});
