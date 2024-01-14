function get_calc(btn) {                   //各ボタンを押した時
    if(btn.value == "=") {                 //イコールが押された時、結果を”document.dentaku.display.value”に返す
        document.dentaku.display.value = eval(document.dentaku.display.value);
     }
     else if (btn.value == "AC") {
        document.dentaku.display.value = "";  //ACが押された時、””を”document.dentaku.display.value”に返す
     } 
     else {
      if (btn.value == "*") {
        btn.value ="*";                    //※が押された時、掛け算をする
      }
      else if (btn.value == "/") {
        btn.value ="/";                   // /が押された時、割り算をする
      }


      //文字列の先頭が0かつ0~9のボタンを押した時
    if ((document.dentaku.display.value.slice(0, 1) === "0") &&
       (btn.value === "0" || btn.value === "00" || btn.value === "1" || 
        btn.value === "2" || btn.value === "3"  || btn.value === "4" || 
        btn.value === "5" || btn.value === "6" || btn.value === "7" || 
        btn.value === "8" || btn.value === "9")) {
        document.dentaku.display.value = document.dentaku.display.value.slice(1)
    }

      //文字列の末尾が演算子(+,-,*,/,.)の時、演算子ボタンを押したら末尾を削除。数値ボタンであれば削除しない。
      //論理演算子||と&&の優先順位に注意
    if ((document.dentaku.display.value.slice(-1) === "+" ||                      
         document.dentaku.display.value.slice(-1) === "-" || 
         document.dentaku.display.value.slice(-1) === "*" ||  
         document.dentaku.display.value.slice(-1) === "/" || 
         document.dentaku.display.value.slice(-1) === ".") &&
        (btn.value === "+" || btn.value === "-" || btn.value === "*" || btn.value === "/" || btn.value === ".")) { 
         document.dentaku.display.value = document.dentaku.display.value.slice(0, -1)
       } 

      document.dentaku.display.value += btn.value;
      document.dentaku.multi_btn.value = "*";
      document.dentaku.div_btn.value = "/";
     }   
}
    

 
