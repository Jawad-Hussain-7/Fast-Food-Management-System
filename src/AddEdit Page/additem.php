<?php
	require_once("../connention.php");
	if(isset($_POST['price']))
	{
		$name=$_POST['name'];
		$price=$_POST['price'];
		$size=$_POST['size'];
		$category=$_COOKIE['item'];
		try
		{
			$query="INSERT INTO items (`name`, `price`, `size`, `category`) VALUES (?,?,?,?)";
			$stmtInsert=$db->prepare($query);
			$result=$stmtInsert->execute([$name, $price, $size, $category]);
		}
		catch(exception $e)
		{
			echo "<script> alert('This item already exists'); </script>";
		}
		finally
		{
			header("Location: http://localhost/Menu%20Page/menu.php");
		}
	}
?>