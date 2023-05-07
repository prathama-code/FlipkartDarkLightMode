// DARK-LIGHT MODE

function darkMode(){
    let mybody = document.body;
    mybody.classList.toggle('mydark');
}


// COUPON CODE

function loadCoupon(){
    document.getElementById('coupon').style.visibility = 'visible';
    document.getElementById('main').style.opacity = '0.3'
}

function closeCoupon(){
    document.getElementById('coupon').style.visibility = 'hidden';
    document.getElementById('main').style.opacity = '1'
}

            
// geolocation

window.onload = geolocation();
let x = document.getElementById('out');

function geolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }else{
        x.innerText="Geo Not Supported"
    }
}

function showPosition(data){
    console.log(data)
}