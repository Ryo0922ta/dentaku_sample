// window.loadは使わない使うのはaddEventListenner
// thisとは、JavaScriptに最初から用意されている特別な変数のことです。
// 何が特別かというと、呼び出した場所や方法によってその中身が変化する

function get_calc(btn) {
    if (btn.value == "=") {
        document.dentaku.display.value = eval(document.dentaku.display.value);
    } else if (btn.value == "C") {
        document.dentaku.display.value = "";
    } else {
        if (btn.value == "×") {
            btn.value = "*";
        } else if (btn.value == "÷") {
            btn.value = "/";
        }
        document.dentaku.display.value += btn.value;
        document.dentaku.multi_btn.value = "×";
        document.dentaku.div_btn.value = "÷";
    }
}







