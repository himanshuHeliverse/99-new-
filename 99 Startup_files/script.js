
$(document).ready(function () {


    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  

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




$(".work-img-wrapper").hover(function () {
  $("work-img-wrapper-hover p").css("opacity:1")
})

var video = $("#myvideo")


var myVar = setInterval(myTimer, 1000);





function myTimer(){
  if (video[0].readyState === 4) {
    loadvideo()
    
  }
  else {
    loader()
   
  }


}




function loadvideo() {

  $("#loader").css("display", "none")
  $(".top-section").css("display", "block")
  video[0].currentTime = 2
  console.log(video[0].currentTime)


  clearInterval(myVar)
 
  
 
}

function loader() {


  $(".top-section").css("display", "none")
  $("#loader").css("display", "block")
  topFunction()
  clearInterval(myTop)
}


$(".logo").click(function () {

    window.open('https://www.99xstartup.com', '_blank');

})
$(".business-logo").click(function () {
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
$(".work-img").click(function(){
  location.href = "./images/pdf/m.pdf"})
$(".work-img-wrapper").click(function () {
  location.href = "./images/pdf/m.pdf"

})



new Typed('#typed', {
  strings: topics,
  typeSpeed: 80,
  delaySpeed: 80,
  loop: true
});


new Typed('#ty', {
  strings: topics,
  typeSpeed: 80,
  delaySpeed: 80,
  loop: true
});


new Typed('#typ', {
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
