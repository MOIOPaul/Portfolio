var lastScroll = document.documentElement.scrollTop;

                window.onscroll = function() {Scroll()};

                    function Scroll() {
                        
                        if(1080 > window.innerWidth){
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

                    }




            
/*£*/                //                                  //
/*£*/                // Bouton navigation entete Article //
/*£*/                //                                  //

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

                cpt = 0;
                
                //                                  //
                //  Zoom image                      //
                //                                  //

            
                function Zoom(){

                    var totalImg = document.getElementById("image").getElementsByClassName("imgZoom").length - 1;

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
                    legendeTexte.href = "Presentation-Realisation-Contact.html#artcImg" + cpt;
                    document.cookie = cpt;
                    console.log(document.cookie);
                }
            
                function verification(){
                    
                        setTimeout(function(){document.location.href = document.getElementById("legende").href;}, 200);
                }

                function ferme(){ 

                    BcgZoom = document.getElementById("bcgZoom");

                    BcgZoom.className = "ferme";
                    
                    document.cookie = (-1);
                }

                function avant(){

                    var totalImg = document.getElementById("image").getElementsByClassName("imgZoom").length - 1;


                    if(cpt == 0){
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
                    legendeTexte.href = "Presentation-Realisation-Contact.html#artcImg" + cpt;
                    document.cookie = cpt;
                }

                function arriere(){

                    var totalImg = document.getElementById("image").getElementsByClassName("imgZoom").length - 1;

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
                    legendeTexte.href = "Presentation-Realisation-Contact.html#artcImg" + cpt;
                    document.cookie = cpt;
                }

                function Cat(){
                    
                    var cat = document.getElementById("load");

                    if(cat.className == "inactif"){
                        cat.className = "actif";
                        console.log(cat);
                    }else if(cat.className == "actif"){
                        cat.className = "inactif";
                    }
                }

                document.addEventListener("keydown", function(event) {

                    switch(event.key) {

                        case "Escape":
                            ferme();
                            
                            var cat = document.getElementById("load");
                            cat.className = "inactif";
                            
                            break;

                        case "ArrowRight":
                            avant();

                            break;

                        case "ArrowLeft":
                            arriere();

                            break;
                        case "Enter":
                            verification();

                            break;
                        case "c":
 /*£*/                      Cat();
                            
                            break;
                    }

                });