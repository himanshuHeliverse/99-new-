
$(document).ready(function () {




  $('.responsive').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
  });



})

let topics = ["mobile apps ", "website ", "product "];
let slideIndex = 1;
let slideIndexWork = 1;
let slideIndexMember = 1;
const featureImg = document.querySelector(".feature-img");
const featureTitle = document.querySelector(".feature-title");
const featureDesc = document.querySelector(".feature-desc");
const featureContainer = document.querySelector(".feature-container");
const featuresHeading = document.getElementsByClassName("feature-heading");
const companies = document.getElementsByClassName("companies")




// function waitforme(ms) {

//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }
$(".work-img-wrapper").hover(function () {
  $("work-img-wrapper-hover p").css("opacity:1")
})

var video = $("#myvideo")
var time = 2000;

 var  ready = setInterval(() => {
  if (video[0].readyState === 4) {
     loadvideo()
   
  }
  else {
    loader()
    console.log("not load")
  }
},1000);



function loadvideo() {
console.log("s")

  
  $(".top-section").css("background","linear-gradient(180deg, #DC1871 3.56%, #FF0055 100%)")
  $(".title").css("color", "white")
  $("#typed").css("color", "white")
  $(".build").css("color", "white")
  $("header").css("background","var(--color-dark)")
  $(".display-none").css("display", "none")
  $(".modal").css("display", "block")
  $(".title").css("color", "white")
  $("#typed").css("color", "white")
  $(".run-para").css("display", "block")
  $(".btn-book").css("display", "block")
  $("#myvideo").css("display", "block")
  video[0].currentTime=2
  console.log(video[0].currentTime)
clearInterval(ready)

  
 
}

function loader() {

  $(".top-section").css("background-color", "white")
  $(".title").css("color", "var(--color-primary)")
  $("#typed").css("color", "var(--color-primary)")
  $(".build").css("color", "var(--color-primary)")
  $(".btn-book").css("background", "var(--color-dark)")
  $(".btn-book").css("color", "white")
  $(".modal").css("display", "none")
  $(".display-none").css("display", "none")
  $(".main").css("display", "block")
  $("header").css("background", "white")
  $("#business-logo").css("display", "none")
  $("#video-container").css("height", "50vh")
  $(".run-para").css("display", "none")

}


$("#logo").click(function () {
  location.assign("https://www.99xstartup.com/")

})
$("#business-logo").click(function () {
  window.open("mailto:")
})

$(".btn-book").click(function () {
  $("#popup").show()
})
$(".btn-call").click(function () {

  $("#popup").show()
})
$("#cut-btn").click(function () {
  $("#popup").hide()
})
$(".work-img-wrapper").click(function () {
  location.href = "./images/pdf/m.pdf"
})



new Typed('#typed', {
  strings: topics,
  typeSpeed: 80,
  delaySpeed: 80,
  loop: true
});



new Typed('#type', {
  strings: topics,
  typeSpeed: 80,
  delaySpeed: 80,
  loop: true
});
//Typing text function



// var typed = new Typed('#typed',{
// strings:["First sentence","Second sentence"],
// });



// setTimeout(() => {
//   setInterval(() => {
//     if (index === topics[currentIndex].length - 1) {
//       index = 0;
//       currentIndex++;
//     }
//     if (currentIndex === topics.length) {
//       currentIndex = 0;
//     }

//     typingText.textContent = topics[currentIndex].slice(0, ++index);

//   }, 800);
// }, 4000);
// for mobile view
// setTimeout(() => {
//   setInterval(() => {
//     if (index === topics[currentIndex].length - 1) {
//       index = 0;
//       currentIndex++;
//     }
//     if (currentIndex === topics.length) {
//       currentIndex = 0;
//     }

//     typingTextMob.textContent = topics[currentIndex].slice(0, ++index);
//   }, 600);
// }, 4000);

//Moving the footer slideshow
// showSlidesQuestion(slideIndex);
// showSlidesWork(slideIndexWork);
// showSlidesMember(slideIndexMember);
// // Next/previous controls
// function plusSlidesWork(n) {
//   showSlidesWork((slideIndexWork += n));
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlidesQuestion((slideIndex = n));
// }
// function currentSlideQuestion(n) {
//   showSlidesQuestion((slideIndex = n));
// }

// function currentSlidMember(n) {
//   showSlidesMember((slideIndexMember = n));
// }

// function showSlidesMember(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides-member");
//   var dots = document.getElementsByClassName("dot-member");
//   if (n > slides.length) {
//     slideIndexMember = 1;
//   }
//   if (n < 1) {
//     slideIndexMember = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndexMember - 1].style.display = "block";
// }

// function showSlidesQuestion(n) {
// console.log("show slider question");

//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot-nav");
//   console.log(dots);
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   //   slides[slideIndex - 1].style.display = "flex";
//   //   dots[slideIndex - 1].className += " active";
// }
// function showSlidesWork(n) {

//   console.log(n);
//   var i;
//   var slides = document.getElementsByClassName("mySlides-work");
//   var dots = document.getElementsByClassName("dot-work");
//   if (n > slides.length) {
//     slideIndexWork = 1;
//   }
//   if (n < 1) {
//     slideIndexWork = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndexWork - 1].style.display = "block";
// }

function changeFeature(n) {
  console.log(n);
  switch (n) {
    case 1:
      featuresHeading[0].classList.remove("black");
      featuresHeading[1].classList.add("black");
      featuresHeading[2].classList.add("black");
      featuresHeading[3].classList.add("black");
      featuresHeading[4].classList.add("black");
      featureImg.src = "/images/features-image/img-1.png";
      featureTitle.textContent = "A Professional Team at your fingertips";
      featureDesc.textContent =
        "Quickly sign up for the services you need. We take care of the quality & the delivery of the work. Sitback relax and get the best talents and services with ease.";
      document.querySelector(".companies-container").style.display = "flex";
      document.querySelector(
        ".companies-container"
      ).children[1].children[0].src = "/images/company-images/fiverr.png";
      document.querySelector(
        ".companies-container"
      ).children[1].children[1].src = "/images/company-images/upwork.png";
      document.querySelector(
        ".companies-container"
      ).children[2].children[2].src = "/images/company-images/toptal.png";
      break;
    case 2:
      featuresHeading[1].classList.remove("black");
      featuresHeading[0].classList.add("black");
      featuresHeading[2].classList.add("black");
      featuresHeading[4].classList.add("black");
      featuresHeading[3].classList.add("black");
      featureImg.src = "/images/features-image/img-2.png";
      featureTitle.textContent = "Everything from Digital to Design to Tech";
      featureDesc.textContent =
        "Say goodbye to the limitations. Whether you’re an early Stage Startup or an Enterprise, we cater to services across categories. Plug & Play subscriptions on the fly.";
      document.querySelector(".companies-container").style.display = "flex";
      document.querySelector(
        ".companies-container"
      ).children[1].children[0].src = "/images/company-images/fiverr.png";
      document.querySelector(
        ".companies-container"
      ).children[1].children[1].src = "/images/company-images/upwork.png";
      document.querySelector(
        ".companies-container"
      ).children[2].children[2].src = "/images/company-images/toptal.png";

      break;
    case 3:
      featuresHeading[2].classList.remove("black");
      featuresHeading[0].classList.add("black");
      featuresHeading[1].classList.add("black");
      featuresHeading[4].classList.add("black");
      featuresHeading[3].classList.add("black");
      featureImg.src = "./images/features-image/project.png";
      featureTitle.textContent = "Collaboration, Team & Project Management";
      featureDesc.textContent =
        "Say goodbye to the limitations. Whether you’re an early Stage Startup or an Enterprise, we cater to services across categories. Plug & Play subscriptions on the fly.";
      document.querySelector(
        ".companies-container"
      ).children[1].children[0].src = "/images/company-images/asana.svg";
      document.querySelector(
        ".companies-container"
      ).children[1].children[1].src = "/images/company-images/trello.svg";
      document.querySelector(
        ".companies-container"
      ).children[2].children[2].src = "/images/company-images/jira.svg";
      document.querySelector(".companies-container").style.display = "flex";
      break;
    case 4:
      featuresHeading[3].classList.remove("black");
      featuresHeading[1].classList.add("black");
      featuresHeading[2].classList.add("black");
      featuresHeading[4].classList.add("black");
      featuresHeading[0].classList.add("black");
      featureImg.src = "/images/features-image/img-4.png";
      featureTitle.textContent = "Collaboration, Team & Project Management";
      featureDesc.textContent =
        "We’d love to solve your problems, in fact, we insist. Our support team is personable, friendly, and always available to help. You can always expect a real human to answer all your questions.";
      document.querySelector(".companies-container").style.display = "none";
      break;
    case 5:
      featuresHeading[3].classList.add("black");
      featuresHeading[1].classList.add("black");
      featuresHeading[2].classList.add("black");
      featuresHeading[4].classList.remove("black");
      featuresHeading[0].classList.add("black");
      featureImg.src = "/images/features-image/risk free.png";
      featureTitle.textContent = "Free-Trials & No-questions asked refunds";
      featureDesc.textContent =
        "You’ll fall in love with us. But, If you don’t and you’re not  100% satisfied after a trial, we’ll refund your money back, No questions asked whatsoever. Tryus out now risk-free.";
      document.querySelector(".companies-container").style.display = "none";
      break;



    default:
      featuresHeading[1].classList.remove("black");
      featuresHeading[1].classList.add("black");
      featuresHeading[2].classList.add("black");
      featuresHeading[3].classList.add("black");
      featureImg.src = "/images/features-image/img-1.png";
      document.querySelector(".companies-container").style.display = "flex";



  }
}
