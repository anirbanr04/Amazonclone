let pics = document.querySelector(".pics"); 
let images= pics.querySelectorAll("img");

let subhome = document.querySelector(".subhome"); 
let image= subhome.querySelectorAll("img");

let home = document.querySelector("#home"); 
let rarrow = home.querySelector(".fa-arrow-right"); 


let arrowright = document.querySelector(".fa-arrow-right");
let arrowleft = document.querySelector(".fa-arrow-left");


// for set interval-------------

const autoslide = () => {
    if(count<=4){
     images.forEach((img,indx)=>{
         img.style.transform=`translateX(-${110*count}%)`
         
})};
    
     count++;
 }


let interval= setInterval(()=>{
   autoslide();
    console.log("sliding right.....")

},2000);




// For manual slide-------------------

let count = 0;
const slidesright1 = () => {
    if(count<=4){
    images.forEach((img,indx)=>{
        img.style.transform=`translateX(-${110*count}%)`

    })}
    count++;

}


arrowright.addEventListener("click", () => {
    slidesright1();
   clearInterval(interval);
   
});




arrowleft.addEventListener("click", () => {
   
    slidesright2();
    clearInterval(interval);

});

 const slidesright2 = () => {
    if(count>=0){
    images.forEach((img,indx)=>{
        img.style.transform=`translateX(${-110*count}%)`

    })}
    count--;
}
     

// Arrow right-Manual------------------
    
rarrow.addEventListener("click", () => {
    rslides();
     
    console.log("clicking....")
  
  });

const rslides=()=>{
    if(count<=image.length-1){
        console.log("sliding....")
    image.forEach((img,id)=>{
        img.style.transform=`translate(-${100*(count)}%)`
        img.style.transition="0.9s"

    })

}
count++;
};

// Arrow left-Manual------------------

