let section1= document.querySelector(".section1");
let aminimg= document.querySelector(".aminimg");
let navbar= document.querySelector(".navbar");
let get= document.querySelector(".get");



navbar.style.background='transparent';
get.classList.add('noget');
section1.style.transform=`scale(7)`;
 aminimg.style.top=`46%`;
 aminimg.style.left=` 47%`;
 aminimg.style.width=`6%`;
onscroll = function(){
  console.log(this.scrollY)
  if(this.scrollY <= 482){
    navbar.style.background='transparent';
    get.classList.add('noget')
  }else{
    navbar.style.backgroundColor='black';
    get.classList.remove('noget')

  }
  console.log(this.scrollY)
  if(this.scrollY < 5){
    section1.style.transform=`scale(7)`;
    aminimg.style.top=`46%`;
    aminimg.style.left=` 47%`;
    aminimg.style.width=`6%`;
      
    
    

  }else{
    section1.style.transform=`scale(1.1)`;
      aminimg.style.top=`43%`;
      aminimg.style.left=` 43%`;
      aminimg.style.width=`14%`;
      section1.style.top=`8vh`;

  }
}



const elts = {
  text1: document.getElementById("text1"),
  text2: document.getElementById("text2")
};

const texts = [
  "activation",
  "digital media",
  "content",
  
  
];

const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
  morph -= cooldown;
  cooldown = 0;

  let fraction = morph / morphTime;

  if (fraction > 1) {
      cooldown = cooldownTime;
      fraction = 1;
  }

  setMorph(fraction);
}

function setMorph(fraction) {
  elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  fraction = 1 - fraction;
  elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  elts.text1.textContent = texts[textIndex % texts.length];
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
  morph = 0;

  elts.text2.style.filter = "";
  elts.text2.style.opacity = "100%";

  elts.text1.style.filter = "";
  elts.text1.style.opacity = "0%";
}

function animate() {
  requestAnimationFrame(animate);

  let newTime = new Date();
  let shouldIncrementIndex = cooldown > 0;
  let dt = (newTime - time) / 1000;
  time = newTime;

  cooldown -= dt;

  if (cooldown <= 0) {
      if (shouldIncrementIndex) {
          textIndex++;
      }

      doMorph();
  } else {
      doCooldown();
  }
}

animate();
let image = document.querySelector('.image-countainer');
let y = 0;
function img(){
  image.style.transform=`perspective(1000px) rotateY(-${y+=45}deg)`
}
setInterval(() => {
  img()
  
},2000);
window.onload =load();
 function load(){
     scroll({
      top:0,
      behavior:"smooth"

     })
}
document.getElementById('whoo').addEventListener('click', function() {
  window.scroll({
    top:860,
    behavior: 'smooth'
  });
});
document.getElementById('what').addEventListener('click', function() {
  window.scroll({
    top:2100,
    behavior: 'smooth'
  });
});
document.getElementById('contact').addEventListener('click', function() {
  window.scroll({
    top:4000,
    behavior: 'smooth'
  });
});




    
    
  
    
  
   
    

  
  


  