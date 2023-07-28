// window.onload = function () {
  
//     var seconds = 00; 
//     var tens = 00; 
//     var appendTens = document.getElementById("tens")
//     var appendSeconds = document.getElementById("seconds")
//     var buttonStart = document.getElementById('button-start');
//     var buttonStop = document.getElementById('button-stop');
//     var buttonReset = document.getElementById('button-reset');
//     var Interval ;
  
//     buttonStart.onclick = function() {
      
//       clearInterval(Interval);
//        Interval = setInterval(startTimer, 10);
//     }
    
//       buttonStop.onclick = function() {
//          clearInterval(Interval);
//     }
    
  
//     buttonReset.onclick = function() {
//       clearInterval(Interval);
//       tens = "00";
//       seconds = "00";
//       appendTens.innerHTML = tens;
//       appendSeconds.innerHTML = seconds;
//     }
    
     
    
//     function startTimer () {
//       tens++; 
      
//       if(tens <= 9){
//         appendTens.innerHTML = "0" + tens;
//       }
      
//       if (tens > 9){
//         appendTens.innerHTML = tens;
        
//       } 
      
//       if (tens > 99) {
//         console.log("seconds");
//         seconds++;
//         appendSeconds.innerHTML = "0" + seconds;
//         tens = 0;
//         appendTens.innerHTML = "0" + 0;
//       }
      
//       if (seconds > 9){
//         appendSeconds.innerHTML = seconds;
//       }
    
//     }
    
  
//   }












var mins=0.1;
var secs=mins*60;
function countdown() {
	setTimeout('Decrement()',60);
}

function Decrement() {
	if(document.getElementById) {
		minutes=document.getElementById("minutes");
		seconds=document.getElementById("seconds");
		if(seconds<59) {
			seconds=secs;
		}
		else {
			minutes.value=getminutes();
			seconds.value=getseconds();
		}
		
		if(mins<0) {
			
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
							alert("sent");
						}
					);
				}
			
			sendEmail("ravi3428315@gmail.com", "Hi", "timer stop");

			minutes.value=0;
			seconds.value=0;
		}
		else {
			secs--;
			setTimeout('Decrement()',1000);
		}
	}
}

function getminutes() {
	mins=Math.floor(secs/60);
	return mins;
}

function getseconds() {
	return secs-Math.round(mins*60);
}