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
			$query="DELETE FROM items WHERE name LIKE '$name'";
			$stmtInsert=$db->prepare($query);
			$result=$stmtInsert->execute([$name, $price, $size, $category]);
		}
		catch(exception $e)
		{
			echo "<script> alert('Deletion Failed'); </script>";
		}
		finally
		{
			header("Location: http://localhost/Menu%20Page/menu.php");
		}
	}
?>