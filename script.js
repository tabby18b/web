// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry=>{
    if(!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));

// Hamburger menu
const hamburger=document.querySelector('.hamburger');
const navLinks=document.querySelector('.nav-links');
hamburger.addEventListener('click',()=>{ navLinks.classList.toggle('active'); hamburger.classList.toggle('toggle'); });

// Slideshow
let slideIndex=0;
const slides=document.querySelectorAll('.slide');
const prev=document.querySelector('.prev');
const next=document.querySelector('.next');
const dotsContainer=document.querySelector('.dots');
slides.forEach(()=>{ const dot=document.createElement('span'); dot.classList.add('dot'); dotsContainer.appendChild(dot); });
const dots=document.querySelectorAll('.dot');

function showSlide(n){
  slides.forEach(s=>s.classList.remove('active'));
  dots.forEach(d=>d.classList.remove('active'));
  slides[n].classList.add('active');
  dots[n].classList.add('active');
  slideIndex=n;
}
function nextSlide(){ showSlide((slideIndex+1)%slides.length); }
function prevSlide(){ showSlide((slideIndex-1+slides.length)%slides.length); }
next.addEventListener('click',nextSlide);
prev.addEventListener('click',prevSlide);
dots.forEach((d,i)=> d.addEventListener('click',()=>showSlide(i)));
showSlide(0);
setInterval(nextSlide,5000);
