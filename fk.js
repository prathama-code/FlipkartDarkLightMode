function darkMode(){
    let mybody = document.body;
    mybody.classList.toggle('mydark');
}

function loadCoupon(){
    document.getElementById('coupon').style.visibility = 'visible';
    document.getElementById('main').style.opacity = '0.3'
}

function closeCoupon(){
    document.getElementById('coupon').style.visibility = 'hidden';
    document.getElementById('main').style.opacity = '1'
}