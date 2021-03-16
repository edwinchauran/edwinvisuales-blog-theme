let recientes = document.getElementById("recientes");
    articles = recientes.getElementsByTagName("article"),
    spans = recientes.getElementsByTagName("span"),
    oldImg = recientes.querySelectorAll("img[border]"),
    dir = document.querySelectorAll("div[dir='ltr']");
    main = document.getElementsByTagName("main");
    articulosRecientes = [];
    var texto;
function deleteBlogPost(){
    //borra main section
    main[0].style.display = "none";
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
        //texto = document.createTextNode(articulosRecientes[i].text)
        //articles[i].getElementsByClassName("resume")[0].appendChild(texto);

    }
}
document.addEventListener('DOMContentLoaded', function(e) {
    var link = document.querySelector('#homepage');
    if (link.href == window.location.href) {
        deleteBlogPost();
        getArticles(articles);
        addArticles();
  }
})

function fuck("fuck") {
var fuck = 0

}
