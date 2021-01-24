
//Validation form name, email and message

$(function() {
  $("form[name='myForm']").validate({
    rules: {
      name: {
          required: true,
      },
      emailaddress: {
        required: true,
        email: true
      },
      message: {
        required: true,
        minlength: 10
      }
    },

//Validation messages

    messages: {
      name: "Please enter your name.",
      email: "Please enter a valid email address.",
      message: {
        required: "Please provide a description.",
        minlength: "Your message must be at least 10 characters long."
      },
      
    },

//EmailJS snippet

    submitHandler: function sendMail (contactForm) {
    emailjs.send("gmail", "my-resume", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.message.value
    })

//Success + failure actions when clicking "Send"

    .then(
        function(response) {
            console.log("SUCCESS", response);
             $("form").trigger("reset");
             alert("Your message is been sent!\nThank you for contacting me, I will get back to you as soon as possible.");
        },
        function(error) {
            console.log("FAILED", error);
            alert("Sorry, an error is been detected and the message is not been sent.\nCheck your connection and try again.");
        });
        return false;
        }
    });
});