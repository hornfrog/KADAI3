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
      document.dentaku.display.value += btn.value;
      document.dentaku.multi_btn.value = "*";
      document.dentaku.div_btn.value = "/";
     }
    //演算子「+,-,*,/,.」が文字列の最後にあるとき、演算子が入力された場合は削除して上書きしてする
    if ( document.dentaku.display.value.slice(-1) === "+" || document.dentaku.display.value.slice(-1) === "-" || 
         document.dentaku.display.value.slice(-1) === "*" || document.dentaku.display.value.slice(-1) === "/" || 
         document.dentaku.display.value.slice(-1) === ".") { 
         const f = document.dentaku.display.value.slice(0,-1);  //文字列の最後が演算子の場合のIF分で完結
         document.dentaku.display.value = f + 'operator';
       }

    
}
 

