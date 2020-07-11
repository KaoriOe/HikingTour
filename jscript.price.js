'use strict';

function keisan(){
    let tax = 10;

    let price1 = document.form1.hike1.selectedIndex * 4000;
    document.form1.field1.value = price1; 

    let price2 = document.form1.hike2.selectedIndex * 5000;
    document.form1.field2.value = price2;

    let price3 = document.form1.hike3.selectedIndex * 6000;
    document.form1.field3.value = price3;

    let total1 = price1 + price2 + price3;


    document.form1.field_total1.value = total1;

    let tax2 = Math.round((total1 * tax) / 100);
    document.form1.field_tax.value = tax2;

    document.form1.field_total1.value = total1 + tax2;
    
}

// Value属性
// inputタグ共通＝その項目に既存の入力値として表示するデータを指定
// document.(name of the form).(name of the name).value
// numbers(5pax)=selectedIndex * price を三回実施


