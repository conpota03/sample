/*入力した数字をプラス*/
function calculator() {
    var t1 = document.getElementById("t1");
    var t2 = document.getElementById("t2");
    var t3 = document.getElementById("t3");
    t3.value = eval(t1.value) + eval(t2.value);
}

var EnterFlag = false;

/*計算機*/
function disp(n) {
    var obj = document.getElementById("result");
    if (EnterFlag) {
        obj.value = "";
        EnterFlag = false;
    }
    /*数字の代入*/
    obj.value += n;
}

function enter() {
    var obj = document.getElementById("result");
    obj.value = eval(obj.value);
    /*式の計算*/
    EnterFlag = true;
}

function cls() {
    var obj = document.getElementById("result");
    obj.value = "";
}

// 画像クリックイベント
document.getElementById("imgId").addEventListener("click", function() {
    // ポップアップ画像のdiv要素を作成
    var popup = document.createElement("div");
    popup.innerHTML = "<img src='画像のURL' onclick='removePopup()'>";
    popup.setAttribute("id", "popup");
    document.body.appendChild(popup);
});

// ポップアップ画像を削除する関数
function removePopup() {
    var popup = document.getElementById("popup");
    popup.parentNode.removeChild(popup);
}