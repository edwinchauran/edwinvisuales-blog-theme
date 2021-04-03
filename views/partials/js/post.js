//articlesPosts
let post = document.getElementById("posts"),
    article = post.getElementsByClassName("publicaciones")[0],
    postImgs = article.querySelectorAll('a > img'),
    postTexts = article.querySelectorAll('div'),
    postTexts2 = article.querySelectorAll('span'),
    postLinks = article.querySelectorAll('a'),
    postImgSource = postImgs[1].getAttribute("src");

postImgs[1].style.display = "none";
article.getElementsByClassName("img-fluid")[0].setAttribute("src", postImgSource);
//remove padding and margin to a tag
for (l in postLinks) {
    if(l >= 2){
        postLinks[l].removeAttribute("style");   
    }
}
//remove img styles and add new styles 
for (p in postImgs){
    if(p >= 2){
        postImgs[p].setAttribute("class", "img-fluid mx-auto article-img");   
        postImgs[p].removeAttribute("width");   
        postImgs[p].removeAttribute("height");   
        postImgs[p].removeAttribute("style");   
    }
}
//delete style justify all text
for (t in postTexts) {
    if(typeof postTexts[t] === "object") {
        postTexts[t].removeAttribute("style");
    }
}
for (s in postTexts2) {
    if(typeof postTexts2[s] === "object") {
        postTexts2[s].removeAttribute("style");
        postTexts2[s].setAttribute("style", "font-size:18px");
    }
}
