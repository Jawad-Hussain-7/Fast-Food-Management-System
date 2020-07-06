<?php
	require_once("../setmenucookie.php");
	include("sql.php");
?>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="menu.css" />
        <link rel="stylesheet" type="text/css" href="../template.css" />
	</head>
	<body>
		<script type="text/javascript" src="../template.js"></script>
        <script type="text/javascript" src="menu.js"></script>
		<?php
			function initGeneralMenu($rows)
			{
				$i=0;
				foreach($rows as $r)
				{
					echo "<span id='name' style='display: none;'>".$r['name']."</span>";
					echo "<span id='price' style='display: none;'>".$r['price']."</span>";
					if($i%2==0)
					{
						echo "<script type='text/javascript'>initRow()</script>";
					}
					echo "<script type='text/javascript'>addItem()</script>";
					$i++;
				}
				if(isset($_COOKIE["usertype"]))
				{
					$type=$_COOKIE["usertype"];
					if($type=="admin")
					{
						echo "<script type='text/javascript'>initAddOption()</script>";
					}
				}
			}
		?>
		<script>initHeader();</script>
		<span id='type' style='display: none;'>
			<?php echo $_COOKIE["usertype"] ?>
		</span>
		<script> initCompleteHeader(); initMenuSection();</script>
		<?php
			if(isset($_COOKIE['item']))
			{
				$itm=$_COOKIE['item'];
				$rows = $db->query("SELECT * FROM items WHERE category LIKE '$itm'");
				initGeneralMenu($rows);
			}
		?>
        <script> initFooter(); </script>
	</body>
</html>