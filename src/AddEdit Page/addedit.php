<html>
	<head>
		<link rel="stylesheet" type="text/css" href="addedit.css" />
        <link rel="stylesheet" type="text/css" href="../template.css" />
	</head>
	<body>
		<script type="text/javascript" src="../template.js"></script>
        <script type="text/javascript" src="addedit.js"></script>
		<script>initHeader();</script>
		<span id='type' style='display: none;'>
			<?php echo $_COOKIE["usertype"] ?>
		</span>
		<span id='pagetype' style='display: none;'>
			<?php echo $_POST["pagetype"] ?>
		</span>
		<script> initCompleteHeader();</script>
		<section>
			<form method="post">
				<table align="center">
					<tr>
						<td>
							Name<input type="text" name="name" id="realname" />
						</td>
					</tr>
					<tr>
						<td>
							Price<input type="text" name="price" id="realprice" />
						</td>
					</tr>
					<tr>
						<td>
							<input type="hidden" name="size" value="small" id="realsize" />
						</td>
					</tr>
					<tr>
						<td>
							<input type="hidden" name="tempname" id="tempname" value="" />
						</td>
					</tr>
				</table>
			</form>
		</section>
		<?php
			if(isset($_POST['pagetype']))
			{
				$pagetype=$_POST['pagetype'];
				if($pagetype=="edit")
				{
					$name=$_POST['name'];
					$price=$_POST['price'];
					echo "<span id='rname' style='display: none;'>" . $name . "</span>";
					echo "<span id='rprice' style='display: none;'>" . $price . "</span>";
					echo "<script> setFields(); removeElements();</script>";
				}
			}
		?>
		<script> setTempName(); initButtons(); initFooter(); </script>
	</body>
</html>