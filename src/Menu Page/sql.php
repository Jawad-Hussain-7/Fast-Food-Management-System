<?php
	require_once("../connention.php");
	if(isset($_POST['price']))
	{
		if($_COOKIE["usertype"]=="customer")
		{
			$name=$_POST['name'];
			$price=$_POST['price'];
			$size=$_POST['size'];
			$rows = $db->query("SELECT * FROM cart WHERE item LIKE '$name' AND size LIKE '$size'");
			try
			{
				$query="INSERT INTO cart (`item`, `quantity`, `size`, `price`) VALUES (?,?,?,?)";
				$stmtInsert=$db->prepare($query);
				$quantity=1;
				$result=$stmtInsert->execute([$name, $quantity, $size, $price]);
			}
			catch(exception $e)
			{
				$quantity=null;
				foreach($rows as $r)
				{
					$quantity=$r['quantity'];
				}
				$quantity=$quantity+1;
				echo $quantity;
				$query="UPDATE cart SET quantity = '$quantity' WHERE item LIKE '$name' AND size LIKE '$size'";
				$stmtUpdate=$db->prepare($query);
				$result=$stmtUpdate->execute();
			}
			finally
			{
				header("Location: http://localhost/Menu%20Page/menu.php");
			}
		}
	}
?>