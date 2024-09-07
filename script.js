document.addEventListener('DOMContentLoaded', () => {
    // Swiper initialization code
    const swiper = new Swiper('.card-wrapper', {
      loop: true,
      spaceBetween: 5,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        }
      }
    });
  });
  

  var tablinks =document.getElementsByClassName("tab-links");
  var tabcontents =document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
      tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
      tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
  
 
  event.stopPropagation();
}




  
  
  var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}
const scriptURL = '<SCRIPT URL>'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})

function myFunction1() {
  var moreText = document.getElementById("more");
  var lessText = document.getElementById("less");
  var btn = document.getElementById("myBtn");
  
  if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      lessText.style.display = "inline";
      btn.innerHTML = "Read less";
  } else {
      moreText.style.display = "none";
      lessText.style.display = "none";
      btn.innerHTML = "Read more";
  }
}

function myFunction2() {
          var moreImages = document.getElementById("more2");
          var btn = document.getElementById("btn");
          
          if (moreImages.style.display === "none" || moreImages.style.display === "") {
              moreImages.style.display = "block";
              btn.innerHTML = "See Less";
          } else {
              moreImages.style.display = "none";
              btn.innerHTML = "See More";
          }
      }