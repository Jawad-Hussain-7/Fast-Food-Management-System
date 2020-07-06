function initHeader(){
	var body=document.querySelector('body');
	var header=body.appendChild(document.createElement('header'));
	var div=header.appendChild(document.createElement('div'));
	div.style.display="flex";
	div.id="headContainer";
	initLogo();
}

function initCompleteHeader(){
	initInfoLinks();
	initNav();
}

function initLogo(){
	var body=document.querySelector('body');
	var container=document.getElementById('headContainer');
	var div=container.appendChild(document.createElement('div'));
	div.id="logo";
	div.addEventListener('click', goToHome);
}

function goToHome()
{
	window.location.href = "http://localhost/Home%20Page/index.php";
}

function initInfoLinks(){
	var type=document.querySelector('#type').innerHTML;
	var body=document.querySelector('body');
	var container=document.getElementById('headContainer');
	var div=container.appendChild(document.createElement('div'));
	div.style.justifyContent="space-between";
	div.style.padding="4% 0%";
	div.style.marginLeft="65%";
	var info=null;
	if(type.trim()=="customer".trim())
	{
		info=[["Logout", "Cart"], ["../logout.php", "../Cart Page/cart.php"]];
	}
	else if(type.trim()=="admin".trim() || type.trim()=="employee".trim())
	{
		info=[["Logout"], ["../logout.php"]];
	}
	else
	{
		info=[["Login", "Sign In"], ["../Login%20Page/login.php", "../Sign%20In%20Page/signin.php"]];
	}
	for(var i=0 ; i<info[0].length ; i++)
	{
		var a=div.appendChild(document.createElement('a'));
		a.innerHTML=info[0][i];
		a.setAttribute("href", info[1][i]);
		a.style.margin="0px 15px";
	}
}

function initNav(){
	var type=document.querySelector('#type').innerHTML;
	if(type.trim()!="employee".trim())
	{
		var body=document.querySelector('body');
		var items=["Appetizers", "Pizza", "Burger", "Sandwiches", "Pasta", "Drinks", "Deserts", "Deals"];
		var header=document.querySelector('header');
		var nav=header.appendChild(document.createElement('nav'));
		nav.style.display="flex";
		nav.appendChild
		for(var i=0 ; i<items.length ; i++)
		{
				var a=nav.appendChild(document.createElement('a'));
				a.innerHTML=items[i];
				a.className="items";
				a.setAttribute("href","http://localhost/Menu%20Page/menu.php?item=" + items[i]);
		}
	}
}

function initFooter(){
	var body=document.querySelector('body');
	var footer=body.appendChild(document.createElement('footer'));
	var table=footer.appendChild(document.createElement('table'));
	table.setAttribute("align", "center");
	table.style.borderSpacing="80px 10px";
	var thead=table.appendChild(document.createElement('thead'));
	var tr=thead.appendChild(document.createElement('tr'));
	tr.style.fontFamily="'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
	var headings=["Policies", "About Us", "Customer Services"];
	for(var i=0 ; i<headings.length ; i++)
	{
		var th=tr.appendChild(document.createElement('th'));
		th.style.fontSize="24px";
		th.style.color="white";
		th.innerHTML=headings[i];
	}
	var tbody=table.appendChild(document.createElement('tbody'));
	var info=[[["Privacy Policy", "privacypolicy.php", "privacypolicy"], ["Our Story", "ourstory.php", "ourstory"], ["Contact Us", "contactus.php", "contactus"]], [ ["Terms of Use", "termofuse.php", "termofuse"], [""], [""]]];
	for(i=0 ; i<info.length ; i++)
	{
		tr=tbody.appendChild(document.createElement('tr'));
		for(var j=0 ; j<info[i].length ; j++)
		{
			var td=tr.appendChild(document.createElement('td'));
			if(info[i][j][0]!="")
			{
				a=td.appendChild(document.createElement('a'));
				td.setAttribute("align", "center");
				a.innerHTML=info[i][j][0];
				a.setAttribute("href", "../" + info[i][j][2] + "/" + info[i][j][1]);
			}
			else
			{
				td.innerHTML="";
			}
		}
	}
}