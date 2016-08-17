<?php
if(isset($_POST['username'])&&isset($_POST['password'])){
	$username=$_POST['username'];
	$password=$_POST['password'];
$query="SELECT `ID`,`username`, `password` FROM `admin` WHERE `username`='$username' AND `password`='$password'";
if ($query_run=mysql_query($query)) {
	$query_num_rows=mysql_num_rows($query_run);
	if($query_num_rows==0){
		echo '<span>Invalid Username or Password</span>';
	}
	else if($query_num_rows==1){
	$user_id = mysql_result($query_run,0,'ID');
	$_SESSION['user_id']=$user_id;
	header('Location:adminprof.php');	
	}
	}
}
?>
<html>
<head>
<script src="assign4.js"> </script>
<link rel="stylesheet" type="text/css" href="adminpage.css">
</head>
<body>
<h1>Welcome Admin </h1><br>
<div>
<h1>Login</h1><br>
<form action="<?php echo $current_file; ?>" method="post" onsubmit="return validate()">
Username:<input type="text" name="username" id="T1" placeholder="*" value="<?php if(isset($username)) {echo $username;} ?>"><span id="S1"></span><br><br>
Password:<input type="password" name="password" id="T2" placeholder="*"><span id="S2"></span><br><br>
<input type="submit" value="Submit" id="b1"></input>
</form>
<p>Not Admin? <a href="loginprof.php" > Click here!</a></p><br>
</div>
</body>
</html>