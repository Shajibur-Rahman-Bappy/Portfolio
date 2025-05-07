$(document).ready(function () {
    $("#formValidation").validate({
      rules: {
        fname: {
          required: true,
          minlength: 2
        },
        email: {
          required: true,
          email: true
        },
        message: {
          required: true,
          minlength: 10
        }
      },
      messages: {
        fname: {
          required: "Please enter your name",
          minlength: "Your name must consist of at least 2 characters"
        },
        email: {
          required: "Please enter your email address",
          email: "Please enter a valid email address"
        },
        message: {
          required: "Please enter your message",
          minlength: "Your message must be at least 10 characters long"
        }
      },
      submitHandler: function (form) {
        alert("Form submitted successfully!");
        form.submit();
      }
    });
  });

$(document).ready(function () {
    $('.to-top').toTop({
      position: false, 
      offset: 100,     
      speed: 500,      
      right: 20,      
      bottom: 30       
    });
  });