<?php
if(isset($_POST['username'])&&isset($_POST['password'])){
	$username=$_POST['username'];
	$password=$_POST['password'];
$query="SELECT `Prof_ID`,`username`, `password` FROM `abhi` WHERE `username`='$username' AND `password`='$password'";
if ($query_run=mysql_query($query)) {
	$query_num_rows=mysql_num_rows($query_run);
	if($query_num_rows==0){
		echo '<span>Invalid Username or Password</span>';
	}
	else if($query_num_rows==1){
	$user_id = mysql_result($query_run,0,'Prof_ID');
	$_SESSION['user_id']=$user_id;
	header('Location:loginprof.php');	
	}
	}
}
?>
<html>
<head>
<script src="assign4.js"> </script>
<link rel="stylesheet" type="text/css" href="login.css">
</head>
<body>
<h1>Welcome </h1><br>
<div>
<h1>Login</h1><br>
<form action="<?php echo $current_file; ?>" method="POST" onsubmit="return validate()">
Username:<input type="text" name="username" id="T1" placeholder="*" value="<?php if(isset($username)) {echo $username;} ?>"><span id="S1"></span><br><br>
Password:<input type="password" name="password" id="T2" placeholder="*"><span id="S2"></span><br><br>
<input type="submit" value="Submit" id="b1"></input>
</form>
<p>Not registered? <a href="registerprof.php" > Register here!</a><br><br>
Admin?<a href="adminprof.php">Click here!</a> </p><br>
</div>
</body>
</html>