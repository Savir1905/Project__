document.getElementById("login-container").addEventListener("submit",function(event) {
	// body...
	event.preventDefault();
	const username=document.getElementById("Username").value;
	const password=document.getElementById("password").value;
	if(username.trim()===""||password.trim()==="")
	{
		document.getElementById("message").innerHTML="Invalid login";
		document.getElementById("message").style.color="red";
	}
	else if(username.trim()==="Savir"&&password.trim()==="Sisir")
	{
		window.location.assign('RishithaWork.html');
	}
	else{
		document.getElementById("message").innerHTML="Password Incorrect";
		document.getElementById("message").style.color="red";
	}

}); 