/* GATE OPEN */
window.onload=()=>{
  const gate=document.getElementById("gate");
  setTimeout(()=>gate.classList.add("open"),800);
  setTimeout(()=>gate.remove(),3500);

  createFlowers();
  typeGuest();
  startCountdown();
  autoSlide();
};

/* typing guest */
function typeGuest(){
  const name=new URLSearchParams(location.search).get("to")||"Tamu Undangan";
  let el=document.getElementById("guestName");
  let i=0;
  let typing=setInterval(()=>{
    el.textContent+=name[i];
    i++;
    if(i>=name.length)clearInterval(typing);
  },70);
}

/* countdown */
function startCountdown(){
  let target=new Date("Aug 10 2026 10:00:00").getTime();
  setInterval(()=>{
    let now=new Date().getTime();
    let d=target-now;
    let day=Math.floor(d/(1000*60*60*24));
    document.getElementById("countdown").innerText=day+" hari lagi";
  },1000);
}

/* flower */
function createFlowers(){
  for(let i=0;i<30;i++){
    let f=document.createElement('div');
    f.style.cssText="position:fixed;width:6px;height:6px;background:white;border-radius:50%;left:"+Math.random()*100+"vw;top:-10px;animation:fall "+(6+Math.random()*6)+"s linear infinite;";
    document.body.appendChild(f);
  }
}

/* gallery slide */
function autoSlide(){
  let g=document.querySelector(".gallery");
  setInterval(()=>g.scrollBy({left:220,behavior:"smooth"}),2500);
}

/* RSVP */
function rsvp(v){
  localStorage.setItem("rsvp",v);
  document.getElementById("rsvpText").innerText="Status: "+v;
}

/* guest book */
let data=JSON.parse(localStorage.getItem("guest"))||[];

function kirim(){
  let nama=document.getElementById("nama").value;
  let u=document.getElementById("ucapan").value;
  data.push({nama,ucapan:u});
  localStorage.setItem("guest",JSON.stringify(data));
  show();
}
function show(){
  let list=document.getElementById("list");
  list.innerHTML=data.map(d=>"<p>"+d.nama+" : "+d.ucapan+"</p>").join("");
}
show();

/* generator */
function generate(){
  let n=document.getElementById("gen").value;
  document.getElementById("link").innerText=
  location.origin+location.pathname+"?to="+encodeURIComponent(n);
}
