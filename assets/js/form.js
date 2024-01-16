function emailSend(){

	var userName = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var body = document.getElementById('body').value;

	var messageBody = "Name " + userName +
	"<br/> Email: " + email +
	"<br/> Body: " + body;
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "reu12th@gmail.com",
    Password : "4951BDDCFF2D6C9F4CAAFF846DD30773276B",
    To : 'reu12th@gmail.com',
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