<?php
	require_once("../connention.php");
	if(isset($_POST['price']))
	{
		$name=$_POST['tempname'];
		$price=$_POST['price'];
		$size=$_POST['size'];
		$category=$_COOKIE['item'];
		try
		{
			$query="UPDATE items SET price = '$price' WHERE name LIKE '$name'";
			$stmtUpdate=$db->prepare($query);
			$result=$stmtUpdate->execute();
		}
		catch(exception $e)
		{
			echo $e->getMessage();
			echo "<script> alert('Update Failed'); </script>";
		}
		finally
		{
			header("Location: http://localhost/Menu%20Page/menu.php");
		}
	}
?>