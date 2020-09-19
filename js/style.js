cpt = 0;
css = document.getElementById("css");
compte = localStorage.getItem('compte');


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
        
        btnNav[i].className = "inactif";
        sectionNav[i].className = "sectionCacher";
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

detailPlusNav = 'Img';

function plus(){ 
    

    var plus = document.getElementById("plus" + detailPlusNav);
    var bouton = document.getElementById("recouvrement" + detailPlusNav);
    
    if(plus.className == "cacher"){
        plus.className = "visible";
        bouton.className = "visible";
    }
    else{
        plus.className = "cacher";
        bouton.className = "cacher";
        
        setTimeout(function(){document.location.href = "#recouvrement" + detailPlusNav;}, 200);
    }
}

//                                  //
//  Zoom image                      //
//                                  //

function verification(){
    
    var totalImg = document.getElementById("imageDt").getElementsByTagName("img").length - 1;
    
    for(i = 0 ; i <= cpt ; i++){
        numImg = totalImg - i;
    }
    
    var plus = document.getElementById("plusImg");
    var bouton = document.getElementById("recouvrementImg");
    
    if(numImg > 1){
        nbNavArticle = 1;
        
        clickNavArticle();
        
        plus.className = "visible";
        bouton.className = "visible";
        setTimeout(function(){document.location.href = document.getElementById("legende").href;}, 200);
    }
}

function Zoom(){
    
    var totalImg = document.getElementById("imageDt").getElementsByTagName("img").length - 1;
    
    for(i= 0 ; i <= cpt ; i++){
        numImg = totalImg - i;
    }
    
    BcgZoom = document.getElementById("bcgZoom");

    img = document.getElementsByClassName("imgZoom")[numImg];
    imgZoomer = document.getElementById("imgZoomer");
    legendeTexte = document.getElementById("legende");
    
    BcgZoom.className = "ouvert";
    imgZoomer.src = img.src;
    legendeTexte.innerHTML = img.alt;
    legendeTexte.href = "#artcImg" + cpt;
}

function ferme(){ 
    
    BcgZoom = document.getElementById("bcgZoom");
    
    BcgZoom.className = "ferme";
}

function avant(){
    
    var totalImg = document.getElementById("imageDt").getElementsByTagName("img").length - 1;

    
    if(cpt == -1){
        cpt = totalImg;
    }
    else{
        cpt -= 1;
    }
    
    for(i= 0 ; i <= cpt ; i++){
        numImg = totalImg - i;
    }
    
    if( numImg == (totalImg + 1)){
        numImg = 0;
    }

    img = document.getElementsByClassName("imgZoom")[numImg];
    imgZoomer = document.getElementById("imgZoomer");
    
    imgZoomer.src = img.src;
    legendeTexte.innerHTML = img.alt;
    legendeTexte.href = "#artcImg" + cpt;
}

function arriere(){
    
    var totalImg = document.getElementById("imageDt").getElementsByTagName("img").length - 1;
    
    if( cpt == totalImg){
        cpt = 0;
    }
    else{
        cpt += 1;
    }
    
    for(i= 0 ; i <= cpt ; i++){
        numImg = totalImg - i;
    }
    
    if( numImg == (-1)){
        numImg = totalImg;
    }
    
    img = document.getElementsByClassName("imgZoom")[numImg];
    imgZoomer = document.getElementById("imgZoomer");
    
    imgZoomer.src = img.src;
    legendeTexte.innerHTML = img.alt;
    legendeTexte.href = "#artcImg" + cpt;
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