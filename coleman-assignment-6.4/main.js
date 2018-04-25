
document.getElementById("form1").onsubmit=function() {
       variable = parseInt(document.querySelector('input[name = "variable"]:checked').value);
	   sub = parseInt(document.querySelector('input[name = "sub"]:checked').value);
	   con = parseInt(document.querySelector('input[name = "con"]:checked').value);
	   ifstate = parseInt(document.querySelector('input[name = "ifstate"]:checked').value);
	   
	   
	   result = variable + sub + con + ifstate;
	   
	document.getElementById("grade").innerHTML = result;
	   


return false; 
} 



if (result == 0) {result2 = "You didnt even try!"};
if (result == 25) {result2 = "Study harder. Try again."};
if (result == 50) {result2 = "I think you could do better. Try again."};
if (result == 75) {result2 = "So close. Try again."};
if (result == 100) {result2 = "Excellent! You're pretty good at this!"};
document.getElementById("grade2").innerHTML = result2; 

