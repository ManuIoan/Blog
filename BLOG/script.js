const card = document.querySelector('.card');
const ala = document.querySelector('.ala');

ala.addEventListener('mousemove', (e)=>
{

    let xAxis = (window.innerWidth /2 - e.pageX)/45;
    let yAxis = (window.innerHeight /2 - e.pageY)/ 45;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;


}


);
const  march = document.querySelector('.march');
const name = document.querySelector('.name');
const desc = document.querySelector('.desc');

card.addEventListener('mouseenter', (e) =>
{

    march.style.transform = "translateZ(150px)";
   name.style.transform = "translateZ(150px)";
   desc.style.transform = "translateZ(150px)";
card.style.transition = "none";
//Popout




});
ala.addEventListener('mouseleave',(e)=>{
card.style.transition = "all 0.5s ease";    
card.style.transform = `rotateY(0deg) rotateX(0deg)`;
march.style.transform = "translateZ(0px)";
   name.style.transform = "translateZ(0px)";
   desc.style.transform = "translateZ(0px)";
});