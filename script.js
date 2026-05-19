// script.js

// Navbar shadow on scroll

window.addEventListener("scroll", () => {

  const navbar = document.getElementById("navbar");

  if(window.scrollY > 40){
    navbar.classList.add("scrolled");
  }else{
    navbar.classList.remove("scrolled");
  }

});

// Mobile menu

function openMobileMenu(){
  document.getElementById("mobileMenu").classList.add("open");
}

function closeMobileMenu(){
  document.getElementById("mobileMenu").classList.remove("open");
}

// Appointment Form

function submitForm(){

  const name = document.getElementById("fname").value.trim();
  const phone = document.getElementById("fphone").value.trim();
  const service = document.getElementById("fservice").value;

  if(!name || !phone || !service){

    alert("Please fill all required fields");
    return;
  }

  document.getElementById("successMsg").style.display = "block";

}

// Scroll animation

const observer = new IntersectionObserver((entries)=>{

  entries.forEach(entry=>{

    if(entry.isIntersecting){

      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";

    }

  });

},{threshold:0.2});

document.querySelectorAll(
  ".service-card, .doctor-card, .why-tile, .tcard"
).forEach(el=>{

  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "all 0.6s ease";

  observer.observe(el);

});