<?php
	require_once("../connention.php");
	if(isset($_POST['xyz']))
	{
		$sql = "TRUNCATE TABLE cart";
		$stmt = $db->prepare($sql);
		$stmt->execute();
		if($stmt)
		{
			header("Location: http://localhost/Home%20Page/index.php");
		}
	}
?>