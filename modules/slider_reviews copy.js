
let box = document.getElementById("box");
let oldPosition = 0;
let newPosition = 0;
let reviews = document.getElementById('reviews');





reviews.addEventListener("mousedown", findPosition);
reviews.addEventListener("mouseup", resetPosition);
reviews.addEventListener("mouseleave", resetPosition);


function resetPosition(e){
    oldPosition = 0;
    newPosition = 0;
    
    console.log(oldPosition)

    reviews.removeEventListener("mousemove", moveSlider)
}






function moveSlider(e){


    newPosition = e.offsetX;
    // console.log(newPosition);

   if( newPosition < oldPosition ){
    box.scrollLeft += (oldPosition - newPosition);
    oldPosition = e.offsetX;
    
   } else if (newPosition > oldPosition) {
    box.scrollLeft -= (newPosition - oldPosition);
    oldPosition = e.offsetX;
    
   } else {
        box.scrollLeft += 0;
    
       }
    
    };


  






// questo setta la position old!!!!!!

function findPosition(e){
    oldPosition = e.offsetX;
    console.log(oldPosition);

    reviews.addEventListener("mousemove", moveSlider)

}