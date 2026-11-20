// Update these details before publishing. Use international format without + or spaces.
const TTOUCH_PHONE = "254735285117"; // Public business contact
const TTOUCH_EMAIL = "testimonialtouch@gmail.com"; // Confirm before publishing

document.querySelectorAll("[data-whatsapp]").forEach(link => {
  link.href = TTOUCH_PHONE ? `https://wa.me/${TTOUCH_PHONE}?text=${encodeURIComponent("Hello T.touch, I would like to enquire about an event.")}` : "#contact";
  if (!TTOUCH_PHONE) link.addEventListener("click", e => {
    e.preventDefault(); alert("Please add the T.touch WhatsApp number in script.js before publishing.");
  });
});
document.querySelectorAll("[data-phone-link]").forEach(link => {
  link.href = TTOUCH_PHONE ? `tel:+${TTOUCH_PHONE}` : "#contact";
  if (!TTOUCH_PHONE) link.addEventListener("click", e => {
    e.preventDefault(); alert("Please add the T.touch phone number in script.js before publishing.");
  });
});
document.querySelectorAll("[data-phone-display]").forEach(el => el.textContent = TTOUCH_PHONE ? `+${TTOUCH_PHONE}` : "Contact number to be confirmed");
document.querySelectorAll("[data-email-display]").forEach(el => el.textContent = TTOUCH_EMAIL || "Email address to be confirmed");
document.getElementById("year").textContent = new Date().getFullYear();
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.textContent = open ? "×" : "☰";
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); toggle.textContent = "☰";
}));
document.querySelectorAll("[data-email-link]").forEach(a => { a.href = `mailto:${TTOUCH_EMAIL}`; });
const qf = document.getElementById("quote-form");
if (qf) qf.addEventListener("submit", e => {
  e.preventDefault();
  const v = id => document.getElementById(id).value || "-";
  const text = "Hello T.touch, I would like a quote.\n" +
    `Name: ${v("q-name")}\nEvent: ${v("q-type")}\nDate: ${v("q-date")}\nGuests: ${v("q-guests")}\nDetails: ${v("q-msg")}`;
  window.open(`https://wa.me/${TTOUCH_PHONE}?text=${encodeURIComponent(text)}`, "_blank");
});

const lb=document.createElement("div");lb.className="lightbox";lb.innerHTML="<img alt=''>";document.body.appendChild(lb);
document.querySelectorAll(".gallery-grid img").forEach(img=>img.addEventListener("click",()=>{lb.firstChild.src=img.src;lb.firstChild.alt=img.alt;lb.classList.add("open");}));
lb.addEventListener("click",()=>lb.classList.remove("open"));
document.addEventListener("keydown",e=>{if(e.key==="Escape")lb.classList.remove("open");});

(function(){
  const box=document.getElementById("hero-slider"); if(!box) return;
  const slides=[...box.querySelectorAll(".slide")], dots=[...box.querySelectorAll(".dot-btn")];
  let i=0, timer=null;
  const reduce=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function show(n){i=(n+slides.length)%slides.length;slides.forEach((s,k)=>s.classList.toggle("active",k===i));dots.forEach((d,k)=>d.classList.toggle("active",k===i));}
  function start(){if(reduce||timer)return;timer=setInterval(()=>show(i+1),4500);}
  function stop(){clearInterval(timer);timer=null;}
  dots.forEach((d,k)=>d.addEventListener("click",()=>{show(k);stop();start();}));
  box.addEventListener("mouseenter",stop);box.addEventListener("mouseleave",start);
  let x0=null;
  box.addEventListener("touchstart",e=>{x0=e.touches[0].clientX;},{passive:true});
  box.addEventListener("touchend",e=>{if(x0===null)return;const dx=e.changedTouches[0].clientX-x0;if(Math.abs(dx)>40){show(i+(dx<0?1:-1));stop();start();}x0=null;});
  document.addEventListener("visibilitychange",()=>document.hidden?stop():start());
  start();
})();

document.querySelectorAll(".fb-card").forEach(card=>{
  const btn=card.querySelector(".fb-play"); if(!btn) return;
  btn.addEventListener("click",()=>{
    const url=card.dataset.fb, frame=card.querySelector(".fb-frame");
    const f=document.createElement("iframe");
    f.src="https://www.facebook.com/plugins/video.php?href="+encodeURIComponent(url)+"&show_text=false&autoplay=true&width=560";
    f.allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share";
    f.allowFullscreen=true; f.title="T.touch event video";
    frame.innerHTML=""; frame.appendChild(f);
  });
});
