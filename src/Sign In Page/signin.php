<?php
	require_once("../connention.php");
	function validateUser($email, $db)
	{
		$rows=$db->query("SELECT * FROM user ");
		foreach($rows as $r)
		{
			if($r['email']==$email)
			{
				return false;
			}
			return true;
		}
	}
?>

<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="../login_signin.css"/>
        <link rel="stylesheet" type="text/css" href="../template.css"/>
    </head>
    <body>
		<script type="text/javascript" src="../template.js"></script>
        <script type="text/javascript" src="signin.js"></script>
		<?php
			if(isset($_POST['email']))
			{
				if(validateUser($_POST['email'], $db))
				{
					$query="INSERT INTO `user`(`first_name`, `last_name`, `email`, `number`, `address`, `password`, `type`) VALUES (?,?,?,?,?,?,?)";
					$stmtInsert=$db->prepare($query);
					$result=$stmtInsert->execute([$_POST["fname"], $_POST["lname"], $_POST["email"], $_POST["num"], $_POST["address"], $_POST["password"], "customer"]);
					if($result)
					{
						header("Location: http://localhost/Home%20Page/index.php"); 
					}
				}
				else
				{
					echo "<script>alert('User with this email address already exists')</script>";
				}
			}
		?>
		<script>initHeader();</script>
		<span id='type' style='display: none;'>
			<?php echo $_COOKIE["usertype"] ?>
		</span>
		<script> initCompleteHeader(); </script>
        <script>
            initLoginForm();
            initFooter();
        </script>
    </body>
</html>