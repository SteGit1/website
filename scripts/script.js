var l; 

function onClickPhoto(element) {
    var div = document.createElement("div");
    document.body.appendChild(div);
    
    l = div.href;

    div.style.position = "fixed";

    div.style.width = "100%";
    div.style.height = "100%";

    div.style.top = 0;
    div.style.bottom = 0;
    div.style.right = 0;
    div.style.left = 0;

    div.style.background = "rgb(0, 0, 0, 0.5)";

    addPhoto();
    addInfo();
}

function addPhoto() {
    var div = document.createElement("div");
    document.body.appendChild(div);

    div.style.position = "fixed";
    div.style.top = "100px";
    div.style.bottom = "100px";
    div.style.left = "50px";
}

function addInfo() {

}