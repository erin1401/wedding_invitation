window.onload=()=>{
  const gate=document.getElementById("gate");

  setTimeout(()=>gate.classList.add("open"),800);
  setTimeout(()=>gate.remove(),3000);

  showGuest();
  countdown();
};

/* guest name */
function showGuest(){
  let name=new URLSearchParams(location.search).get("to")||"Tamu Undangan";
  document.getElementById("guestName").innerText=name;
}

/* countdown */
function countdown(){
  let target=new Date("Aug 10 2026").getTime();
  setInterval(()=>{
    let d=target-new Date().getTime();
    let day=Math.floor(d/(1000*60*60*24));
    document.getElementById("countdown").innerText=day+" hari lagi";
  },1000);
}

/* generator */
function generate(){
  let n=document.getElementById("gen").value;
  document.getElementById("link").innerText=
  location.origin+location.pathname+"?to="+encodeURIComponent(n);
}
