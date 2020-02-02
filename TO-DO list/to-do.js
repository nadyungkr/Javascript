$(document).ready(function(){
//checked 추가하기
    $("li").on('click',function(){
        $(this).toggleClass('checked');
    });
//add를 클릭하면 input의 val을 li 리스트로 만들기
    $("#addBtn").click(function(){
        var inputval = $("#myInput").val();
        $("#myUL").append("<li>" + inputval + "</li>")
    });
});

//add를 클릭하면 input의 val을 li 리스트로 만들기 2번째 방법
/*function appendTXT() {
    var inputval = document.getElementById("myInput").value;
    var addli = document.createElement("li");
    addli.innerHTML = inputval;
    $("ul").append(addli);
}*/
