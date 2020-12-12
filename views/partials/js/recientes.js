let recientes = document.getElementById("recientes");
    articles = recientes.getElementsByTagName("article"),
    spans = recientes.getElementsByTagName("span"),
    oldImg = recientes.querySelectorAll("img[border]"),
    dir = document.querySelectorAll("div[dir='ltr']");
    articulosRecientes = [];
    var texto;
function deleteBlogPost(){
    //borrar spans
    for(let i = 0; dir.length > i; i++) {
        dir[i].style.display = "none";
    }
    for(let i = 0; spans.length > i; i++) {
        spans[i].style.display = "none";
    }
    //borrar imagenes
    for(let i = 0; oldImg.length >  i; i++) {
        oldImg[i].style.display = "none";
    }
}
function getArticles(articles){
    for(let i = 0; articles.length > i; i++) {
        articulosRecientes.push({
            "thumbnail": articles[i].querySelectorAll('img[border="0"]')[0].getAttribute("src"),
            "text": articles[i].getElementsByTagName("span")[0].textContent
        });
    }
}
function addArticles(){
   for(let i = 0; articles.length > i; i++){
        articles[i].getElementsByClassName("img-fluid")[0].setAttribute("src", articulosRecientes[i].thumbnail);
        texto = document.createTextNode(articulosRecientes[i].text)
        articles[i].getElementsByClassName("resume")[0].appendChild(texto);

    }
}

deleteBlogPost();
getArticles(articles);
addArticles();
