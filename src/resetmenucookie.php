<?php
	unset($_COOKIE['item']);
	$res = setcookie("item", '', time() - 3600);
?>