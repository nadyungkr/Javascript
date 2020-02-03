$(document).ready(function(){
    $("#myUL").on('click',"li",function(e){
        event.preventDefault();
        $(this).toggleClass('checked');
    });
//add를 클릭하면 input의 val을 li 리스트로 만들기
    $("#addBtn").on('click',function(){
        var inputval = $("#myInput").val();
        $("#myUL").append("<li>" + inputval + "</li>")
    });
//삭제 기능 추가하기
    $(".close").click(function(){
        var close = $(".close");
        close.parent().hide();
    });
});

//add를 클릭하면 input의 val을 li 리스트로 만들기 2번째 방법
//span에 onclick = "appendTXT()"를 추가해야한다
/*function appendTXT() {
    var inputval = document.getElementById("myInput").value;
    var addli = document.createElement("li");
    addli.innerHTML = inputval;
    $("ul").append(addli);
}*/


//checked 추가하기
/*$("li").on('click',function(){
    $(this).toggleClass('checked');
});*/
/*이 방법을 쓰면 안되는 이유 : 동적으로 생성된 요소는 이벤트 핸들러 등록이 되지 않아서 
(이벤트 핸들러를 구현하는 시점에 생성되어 있지 않기 때문)부모 ul에게 
이벤트를 등록하고 클릭 이벤트가 실제 일어난 곳으로 찾아가 위임되게 해야함*/