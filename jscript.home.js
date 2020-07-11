'use strict';

//zoom and colour change as the objects being hoverd
$(function(){
    $('.link-button1, .link-button2, .link-button3, .link-button4').hover(
        function(){
            $(this).stop().animate({fontSize : '160%'},200);
        },
        function(){
            $(this).stop().animate({fontSize: '100%'},300);
        }
    );
});


//toggled navigation/introduction
$(document).ready(function(){
    $('.introduction h4').on('click', function(){
        $(this).next().toggleClass('hidden');
    });
});



//time set
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();
const hour = now.getHours();
const min = now.getMinutes();

const output = `${year}/${month + 1}/${date} ${hour}:${min}`;
document.getElementById('time').textContent = output;



// ハンバーガーメニュー
function toggleNav() {
    let body = document.body;
    let hamburger = document.getElementById('nav_btn');
    let blackBg = document.getElementById('nav_bg');
   
    //メニュークリックでnav-openクラスがbodyに付与
    hamburger.addEventListener('click', function() {
      body.classList.toggle('nav_open'); 
    });
    
    //もう一度クリックで解除操作
    blackBg.addEventListener('click', function() {
      body.classList.remove('nav_open'); 
    });
  }
  toggleNav();

