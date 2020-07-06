<?php
	require_once("../connention.php");
	if(isset($_POST['itemname']))
	{
		$item=$_POST['itemname'];
		$size=$_POST['size'];
		$sql = "DELETE FROM cart WHERE item LIKE '$item' AND size LIKE '$size'";
		$stmt = $db->prepare($sql);
		$stmt->execute();
		if($stmt)
		{
			header("Location: http://localhost/cart%20Page/cart.php");
		}
	}
?>