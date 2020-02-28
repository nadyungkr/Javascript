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

});