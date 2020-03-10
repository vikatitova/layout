window.addEventListener('scroll', () => {
  if (pageYOffset >= (document.body.scrollHeight / 3)) {
    arrowtotopspan.classList.add('startappear');

    setTimeout(() => {
      arrowtotopspan.classList.add('appearall');
    });
  } else {
    arrowtotopspan.classList.remove('appearall');

    setTimeout(() => {
      arrowtotopspan.classList.add('startappear');
    });
  }
});



const elem = document.getElementById('arrowtotopspan');
elem.addEventListener( "click",(e) => {
  e.preventDefault();
  scrollToAnchor();
});

const scrollToAnchor = () => {
  const elem = document.getElementsByTagName('html,body');
  window.scrollTo({
    top: elem.offsetTop-20, 
    behavior: "smooth"
  });
}


  document.querySelector(".burgerspan").addEventListener("click", ()=>{
    document.querySelector("header").classList.add("show");
    document.querySelector("main").classList.add("darker-main");
    document.querySelector("#dark").classList.add("darker-span");
    document.querySelector(".burgerspan").style.cssText = `z-index: 99`;
  });
  document.querySelector("#dark").addEventListener("click",()=>{
    if(document.querySelector("#dark").classList.contains("darker-span")){
    document.querySelector("header").classList.remove("show");
  document.querySelector("main").classList.remove("darker-main");
  document.querySelector("#dark").classList.remove("darker-span");
  document.querySelector(".burgerspan").style.cssText = `z-index: 1000000`;
}
  });

