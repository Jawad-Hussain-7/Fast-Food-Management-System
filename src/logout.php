<?php
	unset($_COOKIE["usertype"]);
	unset($_COOKIE["email"]);
	$res = setcookie("usertype", '', time() - 3600);
	$res = setcookie("email", '', time() - 3600);
	header("Location: http://localhost/Home%20Page/index.php"); 
?>