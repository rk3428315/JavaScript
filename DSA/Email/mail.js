// // var contactForm = document.getElementById('contactForm').value;

// // var name = document.getElementById('name').value;

// // var email = document.getElementById('email').value;

// // var message = document.getElementById('message').value;

// // var submitBtn = document.getElementById('submitBtn').value;



function sendEmail() {
	Email.send({		
		Host : "smtp.elasticemail.com",
		Username : "test3428315@gmail.com",
		Password : "57407F8374CBB51C33298F48DE8324211182",
		To : "test3428315@gmail.com",
		From : "document.getElementById('from').value",
		Subject : "dfkjd",
		Body : "dfkjd"
	});
}
console.log(sendEmail());







// function sendEmail(to, subject, body){ 
// 	Email.send({
// 		from :"ravikumar08979@gmail.com", //from
// 		to:'', //to
// 		subject:'', //subject
// 		body:'',  //body
// 		host : "smtp.gmail.com", //smtp host
// 		username : "ravikumar08979@gmail.com", //username account
// 		password : "hwlw iinw pfqg wtla",    //password account

// 	}).then(
// 	message=>{
// 		alert("sent");
// 	}
// );
// }


// sendEmail("ravi3428315@gmail.com", "Hi", "timer stop");


// Email.send({
// 	Host : "smtp.elasticgmail.com",
// 	Username : "test3428315@gmail.com",
// 	Password : "809CF67C8DFA32D093604121A36C586DF82B",
// 	To : "test3428315@gmail.com",
// 	From : "document.getElementById('from').value",
// 	Subject : "dfkjd", 
// 	Body : "dfkjd"
// }).then(
// 	message => console.log("send")
// 	);;



			
