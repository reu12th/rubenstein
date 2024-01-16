function emailSend(){

	var userName = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var body = document.getElementById('body').value;

	var messageBody = "<div style='font-family: Poppins, sans-serif; color: #75a1ff;'>" +
	"<p style='font-size: 1.5rem; font-weight: 600;'>Name: " + userName + "</p>" +
	"<p style='font-size: 1.5rem; font-weight: 600;'>Email: " + email + "</p>" +
	"<p style='font-size: 1.5rem; font-weight: 600;'>Body: " + body + "</p>" +
	"</div>";

	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "reu12th@gmail.com",
    Password : "4951BDDCFF2D6C9F4CAAFF846DD30773276B",
    To : 'abdulreuben2580@gmail.com',
    From : "reu12th@gmail.com",
    Subject : "ALERT: EMAIL FROM WEBSITE",
    Body : messageBody
}).then(
  message => {
  	if(message=='OK'){
  		swal("Successful", "Your message has been sent! You will get a reply shortly.", "success");
  	}
  	else{
  		swal("Error", "You clicked the button!", "error");
  	}
  }
);
}