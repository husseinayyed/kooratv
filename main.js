

let menu = document.querySelector("#header .container .large .toggle-menu");
window.onclick = e =>{
  if(e.target.classList.contains("toggle-menu") || e.target.classList.contains("span-menu")) {
  if(menu.classList.contains("clicked")) {
  document.querySelector("#header .container .large .toggle-menu").classList.remove("clicked")
  document.querySelector("#header .container .large ul").classList.remove("showed")
  } else {
  document.querySelector("#header .container .large .toggle-menu").classList.add("clicked")
  document.querySelector("#header .container .large ul").classList.add("showed")
  }
  } else {
  document.querySelector("#header .container .large .toggle-menu").classList.remove("clicked")
  document.querySelector("#header .container .large ul").classList.remove("showed")
  }
};
function clickHref(ts){
  location.href=ts.firstChild.href;
}
