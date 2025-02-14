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
const scriptURL = ''
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
       msg.innerHTML = "Thank you for your feedback!"

        setTimeout(function(){
          msg.innerHTML=""
        },5000)
        form.reset()
})
    .catch(error => console.error('Error!', error.message))
})
// about us read more
function myFunction1() {
  document.getElementById('myBtn').addEventListener('click', function() {
    const moreText = document.getElementById('more');

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        this.textContent = "Read Less"; 
        document.getElementById('abi').scrollIntoView({ behavior: 'smooth' });
    } else {
        moreText.style.display = "none"; 
        this.textContent = "Read More"; 
    }
});


document.getElementById('more').style.display = "none"; 
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
