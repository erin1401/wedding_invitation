const enterBtn = document.getElementById("enterBtn");
const opening = document.getElementById("opening");
const main = document.getElementById("main");
const music = document.getElementById("music");

/* buka pintu */
enterBtn.onclick = () => {
  opening.classList.add("open");

  setTimeout(()=>{
    opening.style.display="none";
    main.classList.remove("hidden");
    music.play();
  },1800);
};


/* bunga jatuh */
const flowers = document.getElementById("flowers");

setInterval(()=>{
  const f = document.createElement("div");
  f.className="flower";
  f.style.left=Math.random()*100+"vw";
  f.style.animationDuration=(5+Math.random()*5)+"s";
  flowers.appendChild(f);

  setTimeout(()=>f.remove(),10000);
},400);


/* nama tamu */
const urlParams = new URLSearchParams(window.location.search);
document.getElementById("guestName").innerText =
  "Kepada: "+ (urlParams.get("to") || "Tamu Undangan");


/* RSVP */
const form = document.getElementById("rsvpForm");
const guestbook = document.getElementById("guestbook");

form.onsubmit = (e)=>{
  e.preventDefault();

  const li = document.createElement("li");
  li.innerText =
    name.value + " ("+status.value+") : "+ msg.value;

  guestbook.appendChild(li);
  form.reset();
};
