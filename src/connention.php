<?php
	$db = new PDO("mysql:dbname=ordermanagement;host=localhost", "root", "");
	$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>