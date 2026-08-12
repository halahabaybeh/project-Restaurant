const headertag = document.querySelector(".header-bg");
const navLinks = document.querySelectorAll(".nav-link");
const logo = document.querySelector(".logo a");
const scrollSearch = document.querySelectorAll(".scrollSearch");


window.addEventListener("scroll", () =>{

    if(window.scrollY > 30){
        headertag.classList.add("bg-header-bgScroll", "text-white");
        logo.classList.add("text-white");
        navLinks.forEach((link)=>{
            link.classList.add("text-white","hover:text-hover");
        }) 
        scrollSearch.forEach((search)=>{
            search.classList.add("text-white");
        })
      headertag.classList.remove("border-b");
        
    } else {
        headertag.classList.remove("bg-header-bgScroll");
        logo.classList.remove("text-white");
        navLinks.forEach((link)=>{
            link.classList.remove("text-white");
        })
        scrollSearch.forEach((search)=>{
            search.classList.remove("text-white");
        })
        headertag.classList.add("border-b");
    }
});

