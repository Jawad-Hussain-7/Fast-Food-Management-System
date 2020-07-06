<?php
	require_once("../connention.php");
	function initCart($rows)
	{
		foreach($rows as $r)
		{
			echo "<span id='item' style='display: none;'>" . $r['item'] . "</span>";
			echo "<span id='quantity' style='display: none;'>" . $r['quantity'] . "</span>";
			echo "<span id='size' style='display: none;'>" . $r['size'] . "</span>";
			echo "<span id='price' style='display: none;'>" . $r['price'] . "</span>";
			echo "<script> initRow(); </script>";
		}
		echo "<script> calculateTotalPrice(); </script>";
	}
?>

<html>
	<head>
		<link rel="stylesheet" type="text/css" href="cart.css" />
		<link rel="stylesheet" type="text/css" href="../template.css" />
	</head>
	<body>
		<script src="../template.js" type="text/javascript"></script>
		<script src="cart.js" type="text/javascript"></script>
		<script>initHeader();</script>
		<span id='type' style='display: none;'>
			<?php echo $_COOKIE["usertype"] ?>
		</span>
		<script> initCompleteHeader(); </script>
		<section>
			<table align="center">
				<thead>
					<tr>
						<th>Item</th>
						<th>Quantity</th>
						<th>Size</th>
						<th>Price</th>
						<th>Remove</th>
					</tr>
				</thead>
				<tbody>
				</tbody>
				<tfoot>
					<tr>
						<th>Total</th>
						<td align="center"></td>
						<td align="center"></td>
						<td align="center" id="total">Rs. 0</td>
					</tr>
				</tfoot>
			</table>
			<form action="checkout.php" method="post">
				<input type="hidden" name="xyz" value="xyz" />
				<button type="submit">Checkout</button>
			</form>
		</section>
		<?php
			$rows = $db->query("SELECT * FROM cart");
			initCart($rows);
		?>
		<script> initFooter(); </script>
	</body>
</html>