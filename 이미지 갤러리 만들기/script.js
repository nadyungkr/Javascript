var req = new XMLHttpRequest();
req.open("GET", "./image_list.json");
req.onreadystatechange = function(){
    if( this.readyState == 4 ){
        //console.log(this.response);
        var data = JSON.parse(this.response);
        for ( var i = 0 ; i < data.length ; i++ ){
            var div = document.createElement("div");
            div.setAttribute("class", "image");
            div.onclick = function(){ 
                /*if ( this.getAttribute("class").indexOf("image-selected") == -1 ){
                    this.setAttribute("class", "image image-selected");
                }
                else {
                    this.setAttribute("class", "image")
                }*/ //if문으로 클래스를 지웠다 붙였다 하는것이 비효율적임

                this.classList.toggle("image-selected");
            }
            var img = document.createElement("img");
            img.src = data[i];
            div.appendChild(img);
            var section = document.getElementById("section")
            section.appendChild(div);
        }
    }
}
req.send();

function selectAll(btn){
    var images = document.getElementsByClassName("image");
    for ( var i = 0 ; i < images.length ; i++ ){
        if ( btn.value == "Unselected All") {
            images[i].classList.remove("image-selected");
        } else {
            images[i].classList.add("image-selected");
        }
    }
    if ( btn.value == "Unselected All" ){
        btn.value = "Selected All";
    } else {
        btn.value = "Unselected All";
    }
}