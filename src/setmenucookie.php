<?php
	if(isset($_GET['item']))
	{
		$item=$_GET['item'];
		if($item)
		{
			echo "<span id='s' style='display: none;'>http://localhost/Menu%20Page/menu.php?item=".$item."</span>";
			setcookie("item", $item, 0, "/");
			echo "<script> window.location.assign=document.getElementById('s').innerHTML; </script>";
			//unset($_COOKIE['item']);
			//$res = setcookie("item", '', time() - 3600);
		}
	}
?>