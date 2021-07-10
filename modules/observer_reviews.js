

// Targets here
let targets = Array.from(document.querySelectorAll(".review-container")); 


// Options for the Observer
let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
}


// Observer here
const observer = new IntersectionObserver(callback, options);


// This is the callback for the observer               
function callback(entries, observer) {

    entries.forEach(function (entry) {

        if ( entry.isIntersecting ) {

            displayElement(entry.target) // Do this when the observer see the target 
            let stars = Array.from(entry.target.getElementsByClassName("star-x"));
            
            stars.forEach((item) => {
                item.classList.replace("star-hidden", "star-visible");
            });
            
        
        }  else  {

           
        }   
    }); // forEach ENDpoint

} // Callback ENDpoint


// Connecting the Observer with multiple targets
targets.forEach(function(item) {
    observer.observe(item);
}) ;


// Function "turn on" the element  
function displayElement(element) {
    element.style.opacity = "100";
    
  
    
}



