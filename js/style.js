cpt = 0;
css = document.getElementById("css");
compte = localStorage.getItem('compte');

//                                  //
//  animation présentation          //
//                                  //

window.onload = function(){animationContain()};

function animationContain(){
    
    var Win = window.innerHeight;
    var all = document.documentElement.scrollTop;
    var pres = document.getElementById("presentation").offsetTop;
    var article = document.getElementById("article").offsetTop;
    var galerie = document.getElementById("galerie").offsetTop;
    var forum = document.getElementById("contact").offsetTop;
    
    if ((Win + all - pres) > 200){      // différence entre la hauteur d'écran interrieur et la position de la section presentation dans la page. Si afficher au dessus de 200px à l'écran alors ...
        document.getElementById("presentation").className = "visible";
    }
    else{
        document.getElementById("presentation").className = "cacher";
    }
    
    if ((Win + all - article) > 200){      
        document.getElementById("article").className = "visible";
    }
    else{
        document.getElementById("article").className = "cacher";
    }
    
    if ((Win + all - galerie) > 200){
        document.getElementById("galerie").className = "visible";
    }
    else{
        document.getElementById("galerie").className = "cacher";
    }
    
    if ((Win + all - forum) > 300){
        document.getElementById("contact").className = "visible";
    }
    else{
        document.getElementById("contact").className = "cacher";
    }
}

//                                  //
//  Changement nav au scroll        //
//                                  //

var lastScroll = document.documentElement.scrollTop;

window.onscroll = function() {Scroll()};

    function Scroll() {
        
        var scrolling = document.documentElement.scrollTop;
        
        if (lastScroll > scrolling && scrolling > 40) {
            document.getElementById("navEnTete").className = "scroll";
            document.getElementById("logo").className = "scroll";
            
        }
        
        else if(scrolling < 40){
            document.getElementById("navEnTete").className = "notScroll";
            document.getElementById("logo").className = "notScroll";
        }
        
        else if(lastScroll < scrolling){
            document.getElementById("navEnTete").className = "hidenScroll";
            document.getElementById("logo").className = "hidenScroll";
        }
        
        lastScroll = scrolling;
        
        animationContain();
    }

//                                  //
//  Bouton Jour/Nuit                //
//                                  //

if (localStorage.getItem('compte') == undefined){
    localStorage.setItem('compte' , 'Jour');
}

   function JourNuit() {
       
       if(css.className == "Nuit"){
           css.href = "css/styleJour.css";
           css.className = "Jour";
           localStorage.setItem('compte','Jour');
           
           document.getElementById("video").src = "https://www.youtube.com/embed/RHUGCOz4jJU";
       }
       
       else {
           css.href = "css/styleNuit.css";
           css.className = "Nuit";
           localStorage.setItem('compte','Nuit');
           
           document.getElementById("video").src = "https://www.youtube.com/embed/P4q6dVdvF40";
       }
   }

if (compte == "Jour"){
    css.href = "css/styleJour.css";
    css.className = "Jour";
    
    setTimeout(function(){document.getElementById("video").src = "https://www.youtube.com/embed/RHUGCOz4jJU";}, 1);
}

else {
    css.href = "css/styleNuit.css";
    css.className = "Nuit";
    
    setTimeout(function(){document.getElementById("video").src = "https://www.youtube.com/embed/P4q6dVdvF40";}, 1);
}

//                                  //
// Bouton navigation entete Article //
//                                  //

var presence = Boolean(0);

function navEnTeteArticle(){ 
    
    var btnEnTeteArticle = document.getElementById("btnNavArticle");
    
    if (presence == 0){
        btnEnTeteArticle.className = "actif";
        presence = 1;
    } else if(presence == 1){
        btnEnTeteArticle.className = "inactif";
        presence = 0;
    }
}


//                                  //
// Bouton navigation Article        //
//                                  //

nbNavArticle = 0;

function clickNavArticle(){
 
    btnNav = document.getElementById("navArticle").getElementsByTagName("a");
    
    sectionNav = document.getElementById("article").getElementsByTagName("section");
        
        
    for (i=0; i < btnNav.length ; i++){
            other = i+1;
        
        if (other >= btnNav.length){
            other = 0;
        }
        
        btnNav[other].className = "inactif";
        sectionNav[other].className = "sectionCacher";
    }
    
    if (btnNav[nbNavArticle].className = "inactif"){
        btnNav[nbNavArticle].className = "actif";
    }
    if (sectionNav[nbNavArticle].className = "sectionCacher"){
        sectionNav[nbNavArticle].className = "sectionVisible";
    }
}
//                                  //
// Bouton Plus d'articles           //
//                                  //

function plus(){ 
    
    var plus = document.getElementById("plus");
    var bouton = document.getElementById("recouvrement");
    
    if(plus.className == "cacher"){
        plus.className = "visible";
        bouton.className = "visible";
    }
    else{
        plus.className = "cacher";
        bouton.className = "cacher";
        
        setTimeout(function(){document.location.href = "#recouvrement";}, 200);
    }
}

//                                  //
//  Zoom image                      //
//                                  //

function verification(){
    
    var totalImg = document.getElementById("imageDt").getElementsByTagName("img").length;
    
    for(i= 0 ; i <= cpt ; i++){
        numImg = totalImg - i -1;
    }
    
    var plus = document.getElementById("plus");
    var bouton = document.getElementById("recouvrement");
    
    if(numImg > 1){
        plus.className = "visible";
        bouton.className = "visible";
        setTimeout(function(){document.location.href = document.getElementById("legende").href;}, 200);
    }
}

function Zoom(){
    
    var totalImg = document.getElementById("imageDt").getElementsByTagName("img").length;
    
    for(i= 0 ; i <= cpt ; i++){
        numImg = totalImg - i -1;
    }
    
    BcgZoom = document.getElementById("bcgZoom");

    img = document.getElementsByClassName("imgZoom")[numImg];
    imgZoomer = document.getElementById("imgZoomer");
    legendeTexte = document.getElementById("legende");
    
    BcgZoom.className = "ouvert";
    imgZoomer.src = img.src;
    legendeTexte.innerHTML = img.alt;
    legendeTexte.href = "#artc" + cpt;
}

function ferme(){ 
    
    BcgZoom = document.getElementById("bcgZoom");
    
    BcgZoom.className = "ferme";
}

function avant(){
    
    var totalImg = document.getElementById("imageDt").getElementsByTagName("img").length;
    
    if(cpt == (Number(totalImg) -1)){
        cpt = 0;
    }
    else{
        cpt += 1;
    }

    img = document.getElementsByClassName("imgZoom")[cpt];
    imgZoomer = document.getElementById("imgZoomer");
    
    imgZoomer.src = img.src;
    legendeTexte.innerHTML = img.alt;
    legendeTexte.href = "#artc" + cpt;
}

function arriere(){
    
    var totalImg = document.getElementById("imageDt").getElementsByTagName("img").length;
    
    if(cpt == 0){
        cpt = Number(totalImg) -1;
    }
    else{
        cpt -= 1;
    }
    
    
    img = document.getElementsByClassName("imgZoom")[cpt];
    imgZoomer = document.getElementById("imgZoomer");
    
    imgZoomer.src = img.src;
    legendeTexte.innerHTML = img.alt;
    legendeTexte.href = "#artc" + cpt;
}



document.addEventListener("keydown", function(event) {
    
    switch(event.key) {
            
        case "Escape":
            ferme();
            
            break;
            
        case "ArrowRight":
            avant();
            
            break;
            
        case "ArrowLeft":
            arriere();
            
            break;
    }
    
  
});