
const headertag = document.querySelector(".header-bg");
const navLinks = document.querySelectorAll(".nav-link");
const logo = document.querySelector(".logo a");
const scrollSearch = document.querySelectorAll(".scrollSearch");
const bookForm = document.querySelector(".bookForm");
const arrayOfBookForm = [] ; 
const validate = new JustValidate('.bookForm');

validate.addField('#fullName', [
    {
        rule: 'required',
        errorMessage: 'Full Name is required'
    }
]).addField('#date', [
    {
        rule: 'required',
        errorMessage: 'Date is required'
    }
]).addField('#time', [
    {
        rule: 'required',
        errorMessage: 'Time is required'
    }
]).addField('#guests', [
    {
        rule: 'required',
        errorMessage: 'Number of guests is required'
    }
]);


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
  spaceBetween: 20, 

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  
  },

  breakpoints: {
    0: {
      slidesPerView: 1.5, 
      spaceBetween: 10, 
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 15, 
    },
    1024: {
      slidesPerView: 3, 
    },
  },
});

validate.onSuccess((e)=>{
    e.preventDefault();
    const bookFormData = {
      fullName : bookForm.fullName.value,
      date : bookForm.date.value,
      time : bookForm.time.value,
      guests : bookForm.guests.value
    }

    arrayOfBookForm.push(bookFormData);
    bookForm.reset();
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
    });
   console.log(arrayOfBookForm);
  });

const themeToggle = document.querySelector("#theme-toggle");
const html = document.documentElement;

function applyTheme(theme) {
if (theme === "dark")
    html.classList.add("dark");
else {
    html.classList.remove("dark");
}
};

themeToggle.addEventListener("click", ()=>{

    const newTheme = html.classList.contains("dark") ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
})

const savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme); 


