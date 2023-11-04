

let counter=0;

const slides= document.querySelectorAll('.slide');


slides.forEach((slide, index)=>{
  //setting images at indexes acc like  [][][][] because of oveflow hidden side ones are not shown
  slide.style.left= `${index * 100}%`
})

document.querySelector('.prev-btn').addEventListener('click', ()=>{
  counter--;
  if(counter<0){
    counter=0;
  }
  slides.forEach((slide, index)=>{
    // by translate X left one comes at 0 place shifted by 100%
      slide.style.transform=  `translateX(-${counter * 100}%)`
  })
  
})

document.querySelector('.next-btn').addEventListener('click', ()=>{
  counter++;
  if(counter>slides.length-1){
    counter=slides.length-1;
  }
  slides.forEach((slide, index)=>{
     // by translate X right one comes at 0 place shifted by 100% 
    slide.style.transform=  `translateX(-${counter * 100}%)`
  })
})