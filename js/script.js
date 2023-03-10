//This piece of javascript code was copied from w3schools website and modified by me
$(document).ready(function () {

  let $reviewsSlick = $('.reviews-slick');
  if ($reviewsSlick.length > 0) {
    $reviewsSlick.slick({
      'arrows': false,
      'dots': true,
      'autoplay': true,
      'autoplaySpeed': 3000,
      'adaptiveHeight': true
    });
  }



  //Contact form validation

  let emailForm = document.getElementById("email-form");
  let contactForm = document.getElementById("contact-form");

  if (emailForm) {
    emailForm.addEventListener("submit", function (event) {
      event.preventDefault();



      let email = document.getElementById("email").value;

      if (email.indexOf("@") == -1 || email.length < 6) {
        alert("Please enter a valid email address");
      } else {
        emailForm.submit();
      }
    });
  }


  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();



      let specials = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      let fname = document.getElementById("fname").value;
      let email = document.getElementById("email").value;

      let textarea = document.getElementById("textarea").value;

      let passed = true;

      if (fname == '' || specials.test(fname)) {
        alert("Please enter a valid name");
        passed = false;
      }
      if (email.indexOf("@") == -1 || email.length < 6) {
        alert("Please enter a valid email address");
        passed = false;
      }
      if (textarea == '') {
        alert("Please enter a valid message");
        passed = false;
      }


      if (passed) {
        contactForm.submit();
      }



    });

  }

});