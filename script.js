window.onload=()=>{
  openGate();
  showGuest();
  startCountdown();
  createFlowers();
  autoSlide();
  show();
  updateDashboard();
};

/* gate */
function openGate(){
  const gate=document.getElementById("gate");
  setTimeout(()=>gate.classList.add("open"),800);
  setTimeout(()=>gate.remove(),3000);
}

/* guest */
function showGuest(){
  let name=new URLSearchParams(location.search).get("to")||"Tamu Undangan";
  document.getElementById("guestName").innerText=name;
}

/* countdown */
function startCountdown(){
  let target=new Date("Aug 10 2026").getTime();
  setInterval(()=>{
    let d=target-new Date().getTime();
    let day=Math.floor(d/(1000*60*60*24));
    document.getElementById("countdown").innerText=day+" hari lagi";
  },1000);
}

/* flowers */
function createFlowers(){
  for(let i=0;i<25;i++){
    let f=document.createElement("div");
    f.className="flower";
    f.style.left=Math.random()*100+"vw";
    f.style.animationDuration=(6+Math.random()*5)+"s";
    document.body.appendChild(f);
  }
}

/* gallery */
function autoSlide(){
  let g=document.querySelector(".gallery");
  setInterval(()=>g.scrollBy({left:200,behavior:"smooth"}),2500);
}

/* RSVP */
let rsvpData=JSON.parse(localStorage.getItem("rsvp"))||[];
function rsvp(v){
  rsvpData.push(v);
  localStorage.setItem("rsvp",JSON.stringify(rsvpData));
  document.getElementById("rsvpText").innerText="Terima kasih!";
  updateDashboard();
}

/* guestbook */
let data=JSON.parse(localStorage.getItem("guest"))||[];
function kirim(){
  let nama=document.getElementById("nama").value;
  let u=document.getElementById("ucapan").value;
  data.push({nama,ucapan:u});
  localStorage.setItem("guest",JSON.stringify(data));
  show();
  updateDashboard();
}
function show(){
  let list=document.getElementById("list");
  list.innerHTML=data.map(d=>"<p>"+d.nama+" : "+d.ucapan+"</p>").join("");
}

/* dashboard */
function updateDashboard(){
  document.getElementById("totalGuest").innerText=data.length;
  document.getElementById("hadir").innerText=rsvpData.filter(x=>x=="Hadir").length;
  document.getElementById("tidak").innerText=rsvpData.filter(x=>x=="Tidak").length;
}

/* generator */
function generate(){
  let n=document.getElementById("gen").value;
  document.getElementById("link").innerText=
  location.origin+location.pathname+"?to="+encodeURIComponent(n);
}
