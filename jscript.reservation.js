'use strict';

//reservationとこのｊｓリンク繋ぐ
//画像をクリックし、希望コースの選択、送信。

/*
let btn = document.getElementsByClassName('btn');
console.log(btn);

btn[0].onclick = function() {
    document.getElementById('form').course[0].checked = true;
}
btn[1].onclick = function() {
    document.getElementById('form').course[1].checked = true;
}
btn[2].onclick = function() {
    document.getElementById('form').course[2].checked = true;
}
*/

//他の方法でラジオボタン装飾模索。。。
/*
function onRadioButtonChange() {
    radiobtn1 = document.getElementsByClassName('btn1');
    radiobtn2 = document.getElementsByClassName('btn2');
    radiobtn3 = document.getElementsByClassName('btn3');

    target = document.getElementsByClassName("form");

    if(radiobtn1.checked === true) {
        form.innerHTML = 'hahaha';
    } else if(radiobtn2.checked === true) {
        form.innerHTML = '1232';
    } else if(radiobtn3.checked === true) {
        form.innerHTML = '5555555';
    }
*/

// Swap the main images as the others been clicked.
const thumbs = document.querySelectorAll('.btn');
thumbs.forEach(function(item, index){
    item.addEventListener('click', function(){
        console.log(this.querySelector('img'));
        document.getElementById('selectedimg').src = this.querySelector('img').dataset.image;
    }, false);
});

let btn = document.getElementsByClassName('btn');
console.log(btn);

btn[0].addEventListener('click', function() {
    document.getElementById('form').course[0].checked = true; 
},false);

btn[1].addEventListener('click', function() {
    document.getElementById('form').course[1].checked = true;
},false);

btn[2].addEventListener('click', function() {
    document.getElementById('form').course[2].checked = true;
},false);



//The message pops up when the submit btn has been clicked
document.getElementById('confirm').onsubmit = function(event) {
    event.preventDefault();
    console.log(window.alert('送信完了！ありがとうございました'));
} 