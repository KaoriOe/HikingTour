'use strict';

let Question = [
                ["NZの首都はどこ？",
                "1.オークランド",
                "2.クラストチャーチ",
                "3.ウェリントン",
                 "3"],

                  ["NZの山の名前は？",
                   "1.マウントクック",
                   "2.エベレスト",
                   "3.マウントフジ",
                  "1"],

                  ["NZの国民食(ケーキ)は？",
                   "1.チェリーパイ",
                   "2.パブロバ",
                   "3.ベイクドチーズケーキ",
                  "2"],

                  ["Thank You!"]
            ];

//これいるのか。。。？
document.getElementById('question').textContent = Question;

let Q = document.getElementById('question');
let A1 = document.getElementById('ans1');
let A2 = document.getElementById('ans2');
let A3 = document.getElementById('ans3');

let Qcnt = 0;
Q_set();

function Q_set() {
    Q.textContent = Question[Qcnt][0];
    A1.textContent = Question[Qcnt][1];
    A2.textContent = Question[Qcnt][2];
    A3.textContent = Question[Qcnt][3];
};

function Answer_Check(ans) {
    let wrong = false;
    if(ans == Question[Qcnt][4]){
        alert("正解！");
        Qcnt++;
    } else {
        alert("不正解。。。");
        wrong = true
    }
    
    //現在要素は4つあるが回答対象の要素数は3つだけ
    //(最後はTHNAK YOUのみ)なので、-1をして回す。
    if (Qcnt == (Question.length -1)) {
        Q_set();
        //HTMLに空文字挿入することで子要素を無くしている
        document.getElementById('btngrp').innerHTML = "";
        } else if(wrong == false) {
        Q_set();
    }
 }



// addEventListener

                
                
                
                
                
                
                
                
                
                
                
                
                
                
                