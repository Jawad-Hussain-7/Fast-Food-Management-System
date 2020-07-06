function initMenuSection(){
	var body=document.querySelector('body');
	var section=body.appendChild(document.createElement('section'));
}

function initRow()
{
	var body=document.querySelector('body');
	var section=document.querySelector('section');
	var div=section.appendChild(document.createElement('div'));
	div.setAttribute("class", "row");
}

function addItem(){
	var section=document.querySelector('section');
	var row=section.lastChild;
	var name=document.getElementById('name').innerHTML;
	var price=document.getElementById('price').innerHTML;
	var container=row.appendChild(document.createElement('div'));
	container.setAttribute("class", "menuitem");
	container.id=name;
	var form=container.appendChild(document.createElement('form'));
	form.setAttribute("method", "post");
	var h1=form.appendChild(document.createElement('h1'));
	h1.innerHTML=name;
	addOptions(form);
	var h2=form.appendChild(document.createElement('h2'));
	h2.innerHTML="Rs. " + price;
	addHiddenFields(form, name, price);
	initButton(form);
	document.getElementById("name").remove();
	document.getElementById("price").remove();
}

function addHiddenFields(form, name, price){
	var data=[["name", name, "n"], ["price", price, "p"]];
	for(let i=0 ; i<data.length ; i++)
	{
		var hidden=form.appendChild(document.createElement('input'));
		hidden.setAttribute("type", "hidden");
		hidden.setAttribute("name", data[i][0]);
		hidden.setAttribute("value", data[i][1]);
		hidden.id=data[i][2];
	}
}

function addOptions(form){
	var type=document.getElementById('type').innerHTML;
	if(type.trim()!="admin".trim())
	{
		var select=form.appendChild(document.createElement('select'));
		select.setAttribute("name", "size");
		select.addEventListener('click', setPrice);
		var sizes=["small", "medium", "large"];
		for(let i=0 ; i<sizes.length ; i++)
		{
			var option=select.appendChild(document.createElement('option'));
			option.setAttribute("value", sizes[i]);
			option.innerHTML=sizes[i];
		}
	}
}

function initButton(form){
	var type=document.getElementById('type').innerHTML;
	if(type.trim()=="customer".trim() || type.trim()=="admin".trim())
	{
		var button=form.appendChild(document.createElement('button'));
		button.setAttribute("type", "submit");
		if(type.trim()=="customer".trim())
		{
			button.innerHTML="Add to Cart";
			button.addEventListener('click', setFinalPrice);
			form.setAttribute("action", "http://localhost/Menu%20Page/sql.php");
		}
		else
		{
			button.innerHTML="Edit";
			var hidden=form.appendChild(document.createElement('input'));
			hidden.setAttribute("type", "hidden");
			hidden.setAttribute("name", "pagetype");
			hidden.setAttribute("value", "edit");
			form.setAttribute("action", "http://localhost/AddEdit%20Page/addedit.php");
		}
	}
}

function setPrice(eve){
	var selector = eve.target;
    var size = selector[selector.selectedIndex].value;
	var form=selector.parentElement;
	var strp=form.querySelector('#p').getAttribute("value");
	strp=parseInt(strp, 10);
	var price=strp;
	if(size.trim()=="medium".trim())
	{
		price=strp+(strp/100*25);
		
	}
	if(size.trim()=="large".trim())
	{
		price=strp+(strp/100*50);
	}
	price=parseInt(price, 10);
	form.querySelector('h2').innerHTML="Rs. " + price;
	console.log(size + "    " + strp + "    " + price);
}

function setFinalPrice(eve)
{
	var selector = eve.target;
	var form=selector.parentElement;
	var price=form.querySelector('h2').innerHTML;
	price=price.split(" ");
	form.querySelector('#p').setAttribute("value", price[1]);
}

function initAddOption()
{
	var section=document.querySelector('section');
	var row=section.lastChild;
	var items=row.querySelectorAll(".menuitem");
	console.log();
	if(items.length>1)
	{
		initRow();
		row=section.lastChild;
	}
	var container=row.appendChild(document.createElement('div'));
	container.setAttribute("class", "menuitem");
	var form=container.appendChild(document.createElement('form'));
	form.setAttribute("method", "post");
	form.setAttribute("action", "http://localhost/AddEdit%20Page/addedit.php");
	form.style.textAlign="center";

	var hidden=form.appendChild(document.createElement('input'));
	hidden.setAttribute("type", "hidden");
	hidden.setAttribute("name", "pagetype");
	hidden.setAttribute("value", "add");

	var button=form.appendChild(document.createElement('button'));
	button.setAttribute("type", "submit");
	button.id="add";
	button.innerHTML="+";
	button.style.fontSize="100px";
	button.style.borderRadius="100px";
}