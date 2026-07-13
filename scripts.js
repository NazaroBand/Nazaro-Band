// Smooth animacije pri skrolanju

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach((el)=>{

el.classList.add("hidden");

observer.observe(el);

});


// Gumb "Natrag na vrh"

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


// Lightbox galerija

const images=document.querySelectorAll(".gallery img");

const lightbox=document.createElement("div");

lightbox.id="lightbox";

document.body.appendChild(lightbox);

images.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.classList.add("active");

const image=document.createElement("img");

image.src=img.src;

while(lightbox.firstChild){

lightbox.removeChild(lightbox.firstChild);

}

lightbox.appendChild(image);

});

});

lightbox.addEventListener("click",()=>{

lightbox.classList.remove("active");

});


// WhatsApp plutajući gumb

const whatsapp=document.createElement("a");

whatsapp.href="https://wa.me/385989588748";

whatsapp.target="_blank";

whatsapp.innerHTML='<i class="fa-brands fa-whatsapp"></i>';

whatsapp.id="whatsapp";

document.body.appendChild(whatsapp);
