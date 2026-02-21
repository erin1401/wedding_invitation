window.onload=()=>{
  openGate();
  showGuest();
  startCountdown();
  createFlowers();
  show();
};

/* pintu */
function openGate(){
  const gate=document.getElementById("gate");
  setTimeout(()=>gate.classList.add("open"),800);
  setTimeout(()=>gate.remove(),3000);
}

/* nama tamu */
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

/* bunga jatuh */
function createFlowers(){
  for(let i=0;i<25;i++){
    let f=document.createElement("div");
    f.className="flower";
    f.style.left=Math.random()*100+"vw";
    f.style.animationDuration=(6+Math.random()*6)+"s";
    document.body.appendChild(f);
  }
}

/* RSVP */
function rsvp(v){
  localStorage.setItem("rsvp",v);
  document.getElementById("rsvpText").innerText="Terima kasih sudah konfirmasi ❤️";
}

/* buku tamu */
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
