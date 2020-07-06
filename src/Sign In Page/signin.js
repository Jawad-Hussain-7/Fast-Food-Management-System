function initLoginForm(){
	var body=document.querySelector('body');
	var section=body.appendChild(document.createElement('section'));
	var form=section.appendChild(document.createElement('form'));
	form.setAttribute("onsubmit", "return validateForm()");
	form.setAttribute("method", "post");
	var table=form.appendChild(document.createElement('table'));
	table.setAttribute("align", "center");
	var placeholders=["First Name", "Last Name", "Email", "Address", "Telephone Number", "Password", "Confirm Password"];
	var names=["fname", "lname", "email", "address", "num", "password", "cpassword"];
	for(let i=0 ; i<names.length ; i++)
	{
		var tr=table.appendChild(document.createElement('tr'));
		if(i==0 || i==names.length-2)
		{
			for(let j=0 ; j<2 ; j++)
			{
				addField(tr, names[i], placeholders[i], 1);
				if(j+1<2)
					i++;
			}
		}
		else
		{
			addField(tr, names[i], placeholders[i], 2);
		}
	}
	var div=form.appendChild(document.createElement('div'));
	div.style.display="flex";
	div.style.justifyContent="center";
	var button=div.appendChild(document.createElement('button'));
	button.setAttribute("type", "submit");
	button.innerHTML="Create Account";
}

function addField(tr, name, placeholder, colspan){
	var td=tr.appendChild(document.createElement('td'));
	td.setAttribute("colspan", colspan);
	var input=td.appendChild(document.createElement('input'));
	if(colspan==2)
	{
		td.setAttribute("width", "100%");
	}
	if(name.search("pass")!=-1)
		input.setAttribute("type", "password");
	else
		input.setAttribute("type", "text");
	input.setAttribute("name", name);
	input.setAttribute("value", "");
	input.id=name;
	input.setAttribute("placeholder", placeholder);
}

function getNextPage(){
	/*console.log("dsgdsgfdsf");
	var xhttp= new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {

		}
	};
	xhttp.open("GET", "http://localhost/Home%20Page/index.html", true);
	xhttp.send();*/
}

function validateForm()
{
	var placeholders=["First Name", "Last Name", "Email", "Address", "Telephone Number", "Password", "Confirm Password"];
	var names=["fname", "lname", "email", "address", "num", "password", "cpassword"];
	var attributes={};
	for(let i=0 ; i<names.length ; i++)
	{
		var attr=document.getElementById(names[i]);
		attributes[placeholders[i]]=attr.value;
	}
	if(isEmpty(attributes))
		return false;
	if(!validateName("First Name", attributes["First Name"]))
		return false;
	if(!validateEmail("Email", attributes["Email"]))
		return false;
	if(!validateNumber("Telephone Number", attributes["Telephone Number"]))
		return false;
	if(!validatePassword("Password", attributes["Password"], attributes["Confirm Password"]))
		return false;
	return true;
}

function isEmpty(attributes){
	for(key in attributes)
	{
		console.log(attributes[key]);
		if(attributes[key]=="")
		{
			alert(key + " field cannot be empty" );
			return true;
		}
	}
	return false;
}

function validateName(name, value){
	var re=/^[A-Za-z]+$/;
	if(!re.test(value))
	{
		alert(name + " cannot contain special characters or numerals")
		return false;
	}
	re=/[A-Z]/;
	if(!re.test(value))
	{
		alert("First letter of " + name + " must be capital");
		return false;
	}
	return true;
}

function validateEmail(name, value){
	var re=/[\w-]+@([\w-]+\.)+[\w-]+/;
	if(!re.test(value))
	{
		alert("Invalid " + name + " address");
		return false;
	}
	return true;
}

function validateNumber(name, value){
	var re=/^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;
	if(!re.test(value))
	{
		alert("Invalid " + name);
		return false;
	}
	return true;
}

function validatePassword(name, value1, value2){
	var re=/^(?=.*\d).{8,20}$/;
	if(!re.test(value1))
	{
		alert(name + " requirements:\n1. Must be 8 to 20 characters long\n2. Must contain atleast one numeral");
		return false;
	}
	if(value1!=value2)
	{
		alert("Password confirmation failed");
		return false;
	}
	return true;
}