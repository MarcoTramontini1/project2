//pick all of the images and layer them based on the z-index

const slideArea = document.querySelector("div.slides");
const images = document.querySelectorAll("img");

// we want to track two things

let currentSlide = 0;
let z = 1;

// when I click the slide area, change the slide based on z-indez

slideArea.addEventListener("click", function (){
  currentSlide = currentSlide + 1
  
 

  if (currentSlide > images.length - 1){
    currentSlide = 0
  }

  z = z + 1

  //remove the animation from the style for every image
  
  images.forEach(image => {
    image.style.animation = ""
  })
  
  //pick the right image
  images[currentSlide].style.zIndex = z
  images[currentSlide].style.animation = "fade 0.5s"
  

})

slideArea.addEventListener("mouseover", function() {
  
  images.forEach(image => {
   
    const x = 100 * Math.random() - 50
    const y = 100 * Math.random() -50

    //  image.style.transform = `translate(${x}px,${y}px)}`
    image.style.transform = `translate(${x}px, ${y}px)`
  })
})

slideArea.addEventListener("mouseout", function(){
  images.forEach(image =>{
    image.style.transform = ""
  })
})





