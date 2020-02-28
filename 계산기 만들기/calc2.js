window.addEventListener("load",function(){
    var txtX = document.getElementById("txt-x");
    var txtY = document.getElementById("txt-y");
    var btnAdd = document.getElementById("btn-add");
    var txtSum = document.getElementById("txt-sum");

    btnAdd.onclick = function(){
        var X = parseInt(txtX.value);
        var Y = parseInt(txtY.value); //숫자로 변경해서 가져와야함
        txtSum.value = X+Y;
    };

    var txtZ = document.getElementById("txt-z");
    var txtU = document.getElementById("txt-u");
    var btnSub = document.getElementById("btn-sub");
    var txtSub = document.getElementById("txt-sub");

    btnSub.onclick = function(){
        var Z = parseInt(txtZ.value);
        var U = parseInt(txtU.value);
        txtSub.value = Z-U;
    };

    var txtA = document.getElementById("txt-a");
    var txtB = document.getElementById("txt-b");
    var btnMul = document.getElementById("btn-mul");
    var txtMul = document.getElementById("txt-mul");

    btnMul.onclick = function(){
        var A = parseInt(txtA.value);
        var B = parseInt(txtB.value);
        txtMul.value = A*B;
    };

    var txtC = document.getElementById("txt-c");
    var txtD = document.getElementById("txt-d");
    var btnDiv = document.getElementById("btn-div");
    var txtDiv = document.getElementById("txt-div");

    btnDiv.onclick = function(){
        var C = parseInt(txtC.value);
        var D = parseInt(txtD.value);
        txtDiv.value = C/D;
    };

});