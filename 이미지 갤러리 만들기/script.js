var req = new XMLHttpRequest();
req.open("GET", "./image_list.json");
req.onreadystatechange = function(){
    if( this.readyState == 4 ){
        //console.log(this.response);
        var data = JSON.parse(this.response);
        for ( var i = 0 ; i < data.length ; i++ ){
            var div = document.createElement("div");
            div.setAttribute("class", "image");
            var img = document.createElement("img");
            img.src = data[i];
            div.appendChild(img);
            var section = document.getElementById("section")
            section.appendChild(div);
        }
    }
}
req.send();