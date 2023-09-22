

function countdownvalue(){

	let mins = parseFloat(document.getElementById('mins').value);
	var secs=mins*60;
	console.log(secs, typeof secs);


	countdown =()=> {
		setTimeout('decrement()',60);
	}

	console.log(mins, typeof mins);
	decrement=()=> {
		if(document.getElementById){
			document.getElementById("minutes").value = minutes;
			document.getElementById("seconds").value = seconds;
			if(seconds<59) {
				seconds=secs;
			}
			else {
				minutes.value=getminutes();
				seconds.value=getseconds();
			}
			
			if(mins<0) {

				minutes.value=0;
				seconds.value=0;
				function sendEmail(to, subject, body){ 
					Email.send(
					
						"ravikumar08979@gmail.com", //from
						to, //to
						subject, //subject
						body,  //body
						"smtp.gmail.com", //smtp host
						"ravikumar08979@gmail.com", //username account
						"hwlw iinw pfqg wtla",    //password account
						message=>{
							alert("Time Left");
						}
					);
				}
				
				sendEmail("ravi3428315@gmail.com", "Hi", "timer stop");
			}
			else {
				secs--;
				setTimeout('decrement()',1000);
			}
		}
	}
	getminutes =() =>{
	mins=Math.floor(secs/60);
	return  mins;
	}

	getseconds= () =>{
	return secs-Math.round(mins*60);
	}
}







