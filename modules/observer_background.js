

// Targets here
let targets = Array.from(document.querySelectorAll(".trigger-background")); 


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

             changeBackground('0')// Do this when the observer see the target
             
            
        }  else if (entry.isIntersecting == false)  {

            changeBackground('100')// Do this when the observer see the target
            
        }   
    }); // forEach ENDpoint

} // Callback ENDpoint


// Connecting the Observer with multiple targets
targets.forEach(function(item) {
    observer.observe(item);
}) ;


// Function for writing animated text 
function changeBackground(status) {

    let background = document.querySelector(".wrapper-solid");
    background.style.opacity = `${status}`;  
}



