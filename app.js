// animazione dock







// animazione dock fine





const menuReview =document.getElementById("m-review");

const home = document.getElementById("home");




function nascondiSezione(){
    home.style.display = "none";
    espandiMenu();
}






// implementazione dell'intersection observer

var recensioni = document.getElementsByClassName("contenitore-recensione")

 recensioni  = Array.from(recensioni);



const animazione = (entries, observer) => {

	entries.forEach(entry =>  {

		// only do animation if the element is fully on screen
		if(entry.isIntersecting) {
            entry.target.classList.add('invisibile');
            entry.target.firstElementChild.classList.remove("nascondi");
            entry.target.lastElementChild.classList.add("anteprima");
            
            incrementaCounter();
            time = 0;
            

            
		} else {
            entry.target.classList.remove('invisibile');
            entry.target.firstElementChild.classList.add("nascondi");
            entry.target.lastElementChild.classList.remove("anteprima");
            
           
            
		}
	});
}

// Creo l'oggetto
const options = {
    threshold: 0.5,
};

const observer = new IntersectionObserver(animazione,options);




// target the elements

const boxes = document.querySelectorAll('.foglio');


boxes.forEach((box) => {
	observer.observe(box);
});



// INIZIO counter---------------------------------------------------------------------------




// prendo il tag nell'html che dovrà mostrare il numero
var counter = document.getElementById("counter");

// creo la funzione

var time = 0;

function incrementaCounter(){

        for(let i = 0; i < 5; i++){

             setTimeout(() => {
                i ++;
                counter.innerHTML = i; 
                
            }, time); 
            time += 200  ; 
        }

}


// FINE counter---------------------------------------------------------------------------


// INIZIO Slider---------------------------------------------------------------------------
    const avanti = document.getElementById("avanti");
    const indietro = document.getElementById("indietro");
    const animatore = document.getElementById("animatore")
    const work = document.getElementById("work");
    let box = document.getElementsByClassName("box-work");

    box = Array.from(box);
    



// funzioni
    
    // function sliderAvanti(){

    //     let nuovaSlide = document.createElement('div');
    //     nuovaSlide.classList.add("box-work-chiuso");
    //     work.appendChild(nuovaSlide);
    //     nuovaSlide.classList.add("dopo");

    // }
    
    let i = 0;

    function sliderAvanti(){

        let nuovaSlide = document.createElement('div');
        nuovaSlide.classList.add("box-work-chiuso");
        work.appendChild(nuovaSlide);

        nuovaSlide.innerHTML = `<h1>${lavori[i].titolo}</h1>`

        nuovaSlide.classList.add("dopo");

        i++;
    }



    function sliderIndietro(){

        let nuovaSlide = document.createElement('div');
        nuovaSlide.classList.add("box-work-chiuso-sinistra");
        work.appendChild(nuovaSlide);
        nuovaSlide.classList.add("dopo-due");

    }







   
// FINE Slider---------------------------------------------------------------------------


const primoLavoro = {
    titolo : "1"
}

const secondoLavoro = {
    titolo : "2"
}

const terzoLavoro = {
    titolo : "3"
}

const quartoLavoro = {
    titolo : "4"
}

const quintoLavoro = {
    titolo : "5"
}

let lavori = [primoLavoro,secondoLavoro,terzoLavoro,quartoLavoro,quintoLavoro];





//-----------------------------------------------------------------------------------------------------------------------------   

// Sezione introduttiva-----------------------------------------------------------------------------------------------------------------------------  

// -----------------------------------------------------------------------------------------------------------------------------  


//  costruttore di lettere circondate da span INTRODUZIONE

let lettereUno = Array.from(document.getElementsByClassName("lettere-uno"));
lettereUno[0].innerHTML = lettereUno[0].textContent.replace(/\S/g, "<span class='animati-uno iniziale '>$&</span>");

let lettereDue = Array.from(document.getElementsByClassName("lettere-due"));
lettereDue[0].innerHTML = lettereDue[0].textContent.replace(/\S/g, "<span class='animati-due iniziale '>$&</span>");

let lettereTre = Array.from(document.getElementsByClassName("lettere-tre"));
lettereTre[0].innerHTML = lettereTre[0].textContent.replace(/\S/g, "<span class='animati-tre iniziale '>$&</span>");

let lettereQuattro = Array.from(document.getElementsByClassName("lettere-quattro"));
lettereQuattro[0].innerHTML = lettereQuattro[0].textContent.replace(/\S/g, "<span class='animati-quattro iniziale '>$&</span>");



//  costruttore di lettere circondate da span WORK
// let lettereQuattro = Array.from(document.getElementsByClassName("lettere-quattro"));
// lettereQuattro[0].innerHTML = lettereQuattro[0].textContent.replace(/\S/g, "<span class='animati-quattro iniziale-work '>$&</span>");


// seleziono il contenitore che contiene lo span lettera
let animati_uno = Array.from(document.getElementsByClassName("animati-uno"));
let animati_due = Array.from(document.getElementsByClassName("animati-due"));
let animati_tre = Array.from(document.getElementsByClassName("animati-tre"));
let animati_quattro = Array.from(document.getElementsByClassName("animati-quattro"));


// seleziono i target per l'observer e li metto in un array
let blocco = Array.from(document.getElementsByClassName("blocco-testo"));
let trigger = Array.from(document.querySelectorAll("#trigger")); // questo è il target



// Funzioni innescate dall'intersecting

function creaScritte(ArrayDiLettere) {

    ArrayDiLettere.forEach((lettera, i) => {
        
            function appari() {
                lettera.classList.replace( "iniziale","finale" ) //questo sostituisce la classe iniziale con la finale determinando l'animazione   
            }

            setTimeout(appari, i * 30 ); //questo serve a differire l'apparizione delle singole lettere, variando il moltiplicatore si varia il delay
            });
       
}

function creaScritteDue(ArrayDiLettere) {

    ArrayDiLettere.forEach((lettera, i) => {
        
            function appari() {
                lettera.classList.replace( "descrizione-logo-iniziale","descrizione-logo-finale" ) //questo sostituisce la classe iniziale con la finale determinando l'animazione   
            }

            setTimeout(appari, i * 30 ); //questo serve a differire l'apparizione delle singole lettere, variando il moltiplicatore si varia il delay
            });
       
}

function cancellaScritte(ArrayDiLettere) {

    ArrayDiLettere.forEach((lettera, i) => {
        
            function cancella() {
                lettera.classList.replace( "finale","iniziale" ) //questo sostituisce la classe iniziale con la finale determinando l'animazione   
            }

            setTimeout(cancella, i * 30 ); //questo serve a differire l'apparizione delle singole lettere, variando il moltiplicatore si varia il delay
            });
       
}

function circondaLettere(classe){

    let testoCircondato = Array.from(document.getElementsByClassName(classe));//selezioni il testo
    let fatto = testoCircondato[0].innerHTML = testoCircondato[0].textContent.replace(/\S/g, "<span class='animati-due iniziale '>$&</span>");
}//fine funzione



function circondaLettereDue(elemento){

    let i = elemento.innerHTML = elemento.textContent.replace(/\S/g, "<span class='descrizione-logo-iniziale'>$&</span>");
    return i;
}//fine funzione








// Questa è la funzione che va passata dentro l'observer
                
function callbackForObserverIntro(entries, observerIntro) {

    entries.forEach(function (entry) {

            if ( entry.isIntersecting && entry.target.classList.contains("introduzione-uno") ) {

                creaScritte(animati_uno) // blocco di codice eseguito quando l'observer vede l'elemento.
                console.log("1")
                // observerIntro.unobserve( trigger[0] ) // smetti di osservare questo blocco

            }  else if ( entry.isIntersecting && entry.target.classList.contains("introduzione-due") ) {

                creaScritte(animati_due) // blocco di codice eseguito quando l'observer vede l'elemento.
                console.log("2")
                // observerIntro.unobserve( trigger[1] ) // smetti di osservare questo blocco

            }  else if ( entry.isIntersecting && entry.target.classList.contains("introduzione-tre") ) {

                creaScritte(animati_tre) // blocco di codice eseguito quando l'observer vede l'elemento.
                console.log("3")
                // observerIntro.unobserve( trigger[2] ) // smetti di osservare questo blocco

            }  else if ( entry.isIntersecting && entry.target.classList.contains("introduzione-quattro") ){

                creaScritte(animati_quattro) // blocco di codice eseguito quando l'observer vede l'elemento.
                console.log("4")
                // observerIntro.unobserve( trigger[2] ) // smetti di osservare questo blocco

            } else if ( entry.isIntersecting && entry.target.classList.contains("trigger-logo") ) {

                entry.target.nextElementSibling.classList.add("animazione-logo-img") // animazione logo


                 circondaLettereDue(entry.target.parentNode.lastElementChild.firstElementChild); //Genero gli span che sostituiscono il testo
                 let insieme  = Array.from(entry.target.parentNode.lastElementChild.firstElementChild.getElementsByClassName("descrizione-logo-iniziale") ) ;

                 creaScritteDue(insieme);

            }   else if ( entry.isIntersecting && entry.target.classList.contains("trigger-logo-due") ) {

                entry.target.nextElementSibling.classList.add("animazione-logo-img")
                // observerIntro.unobserve( trigger[2] ) // smetti di osservare questo blocco

            }  else if ( entry.isIntersecting && entry.target.classList.contains("dock-trigger-logo") ){
                seiQui(p_logos)
            }  else if ( entry.isIntersecting && entry.target.classList.contains("dock-trigger-website") ){
                seiQui(p_website)
            }  else if ( entry.isIntersecting && entry.target.classList.contains("dock-trigger-skill") ){
                seiQui(p_skill)

                let wrapper = document.getElementById("js-wrap");
                // wrapper.style.backgroundColor = "red"
               
            }  else if ( entry.isIntersecting && entry.target.classList.contains("dock-trigger-review") ){
                seiQui(p_review)
            }  else if ( entry.isIntersecting && entry.target.classList.contains("dock-trigger-contact") ){
                seiQui(p_contact)
            } else if ( entry.isIntersecting && entry.target.classList.contains("dock-trigger-home") ){
                seiQui(p_home)

            } 
            
    }); //fine forEach()

} //fine callbackForObserver



// creo le opzioni per l'observerintro

let opzioniObserverIntro = {
    
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
    
}



// creo l'observerintro
const observerIntro = new IntersectionObserver(callbackForObserverIntro, opzioniObserverIntro);

let sc = document.getElementById("sc");
let sc_c = document.getElementById("sc-c");

// Aggancio l'observer ai target

trigger.forEach(function(item) {
    observerIntro.observe(item);
}) ;
    


// INIZIO Codice per l'indicatore di posizione nella dock.
// let indicatore = Array.from(document.querySelectorAll(".indicatore"));


// Testi da far apparire allo scroll nella dock laterale.
let p_home  = Array.from("home")
let p_logos  = Array.from("brand identity")
let p_website  = Array.from("websites")
let p_skill  = Array.from("What I am doing")
let p_contact  = Array.from("contact")
let p_review  = Array.from("reviews")


// seleziono la dock
let dockLeft = document.getElementById("dock");




// funzione per aggiornare l'indicatore della dock

function seiQui(posizione) {

    
        dockLeft.innerHTML = `<div class="box-position"><h1 class="indicatore"></h1></div>`
        let indicatore = Array.from(document.querySelectorAll(".indicatore"));

    
        posizione.forEach((item, i) => {

            function mostra() {indicatore[0].insertAdjacentHTML("beforeend", `<span class="finale">${item}</span>`)}

            setTimeout(mostra, i * 80)

        }); 
    


} //fine aggiornaLaPosizione




// FINE Codice per l'indicatore di posizione nella dock



// per l'effetto marquee nella sezione skill-----------------------------------------------

// seleziono gli elementi che scrollano 



// per l'effetto marquee nella sezione skill------------------------------------------------




