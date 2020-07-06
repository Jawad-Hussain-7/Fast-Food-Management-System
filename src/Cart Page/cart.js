function initRow()
{
	var item=[document.getElementById('item').innerHTML, document.getElementById('quantity').innerHTML, document.getElementById('size').innerHTML, document.getElementById('price').innerHTML];
	var tbody=document.querySelector('tbody');
	var tr=tbody.appendChild(document.createElement('tr'));
	for(let i=0 ; i< item.length ; i++)
	{
		var td=tr.appendChild(document.createElement('td'));
		td.innerHTML=item[i];
		
	}
	setClasses(tr);
	initRemoveButton(tr);
	removeElements();
}

function setClasses(tr)
{
	var thead=document.querySelector('thead');
	var htr=thead.querySelector('tr');
	var ths=htr.querySelectorAll('th');
	var tds=tr.querySelectorAll('td');
	for(let i=0 ; i<tds.length ; i++)
	{
		tds[i].setAttribute("class", ths[i].innerHTML);
	}
}

function initRemoveButton(tr)
{
	var td=tr.appendChild(document.createElement('td'));
	td.setAttribute("align", "center");

	var form=td.appendChild(document.createElement('form'));
	form.setAttribute("method", "post");
	form.setAttribute("action", "http://localhost/Cart%20Page/removeitem.php");

	addHiddenFields(tr, form);

	var button=form.appendChild(document.createElement('button'));
	button.setAttribute("type", "submit");
	button.innerHTML="X";
	button.style.margin="0px";
	button.style.width="auto";
	button.style.fontSize="22px";
}

function addHiddenFields(tr, form)
{
	var attr=[["itemname", ".Item"], ["size", ".Size"]];
	for(let i=0 ; i<attr.length ; i++)
	{
		var hidden=form.appendChild(document.createElement('input'));
		hidden.setAttribute("type", "hidden");
		hidden.setAttribute("name", attr[i][0]);
		var value=tr.querySelector(attr[i][1]).innerHTML;
		hidden.setAttribute("value", value);
	}
}

function removeElements(){
	document.getElementById('item').remove();
	document.getElementById('quantity').remove();
	document.getElementById('size').remove();
	document.getElementById('price').remove();
}

function calculateTotalPrice()
{
	tbody=document.querySelector('tbody');
	var trs=tbody.querySelectorAll('tr');
	var total=0;
	for(let i=0 ; i<trs.length ; i++)
	{
		var price=trs[i].querySelector('.price');
		var quantity=trs[i].querySelector('.quantity');
		total=total+(parseInt(price.innerHTML, 10)*parseInt(quantity.innerHTML, 10));
	}
	document.getElementById('total').innerHTML="Rs. " + total.toString();
}