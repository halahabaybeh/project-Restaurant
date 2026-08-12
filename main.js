const headertag = document.querySelector(".header-bg");
const navLinks = document.querySelectorAll(".nav-link");
const logo = document.querySelector(".logo a");
const scrollSearch = document.querySelectorAll(".scrollSearch");
const bookForm = document.querySelector(".bookForm");
console.log(bookForm);

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

const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 20, // المسافة بين الكروت

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  
  },

  // التحكم بظهور عدد السلايدات حسب الشاشة
  breakpoints: {
    0: {
      slidesPerView: 1.5, 
      spaceBetween: 10, // سلايد وجزء من الثاني للموبايل
    },
    640: {
      slidesPerView: 2.2,
      spaceBetween: 15, // سلايدين وجزء
    },
    1024: {
      slidesPerView: 3.5, // 3 سلايدات ونص للشاشات الكبيرة
    },
  },
});


