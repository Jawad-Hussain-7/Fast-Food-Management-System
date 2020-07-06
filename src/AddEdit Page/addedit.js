function initButtons()
{
	var pagetype=document.getElementById('pagetype').innerHTML;
	if(pagetype.trim()=="add")
	{
		initAddButton();
	}
	else if(pagetype.trim()=="edit")
	{
		initEditDeleteButtons();
	}
}

function setTempName()
{
	var tempname=document.getElementById('tempname');
	var realname=document.getElementById('realname').getAttribute('value');
	tempname.setAttribute("value", realname);
}

function initAddButton()
{
	var form=document.querySelector('form');
	var button=form.appendChild(document.createElement('button'));
	button.setAttribute("type", "submit");
	button.innerHTML="Add New Item";
	form.setAttribute("action", "http://localhost/AddEdit%20Page/additem.php");
}

function initEditDeleteButtons()
{
	var form=document.querySelector('form');
	var buttons=["Edit Item", "Delete Item"];
	for(let i=0 ; i<buttons.length ; i++)
	{
		var button=form.appendChild(document.createElement('button'));
		button.setAttribute("type", "submit");
		button.innerHTML=buttons[i];
		button.addEventListener('click', setOperation);
	}
}

function setOperation(eve){
	var operation=eve.target.innerHTML;
	if(operation.trim()=="Edit Item".trim())
	{
		document.querySelector('form').setAttribute("action", "http://localhost/AddEdit%20Page/edititem.php");
	}
	else if(operation.trim()=="Delete Item".trim())
	{
		document.querySelector('form').setAttribute("action", "http://localhost/AddEdit%20Page/deleteitem.php");
	}
}

function setFields()
{
	document.getElementById('realname').setAttribute("value", document.getElementById('rname').innerHTML);
	document.getElementById('realprice').setAttribute("value", document.getElementById('rprice').innerHTML);
}

function removeElements()
{
	document.getElementById('rname').remove();
	document.getElementById('rprice').remove();
}