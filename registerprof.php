<?php
require 'extraprof.inc.php';
require 'connectprof.inc.php';
if(!loggedin()){
if(isset($_POST['firstname'])&&isset($_POST['lastname'])&&isset($_POST['pass'])&&isset($_POST['repass'])&&isset($_POST['email'])) {
	$firstname=$_POST['firstname'];
$lastname=$_POST['lastname'];
$username=$_POST['username'];
$password=$_POST['pass'];
$repassword=$_POST['repass'];
$email=$_POST['email'];
	 $query="SELECT `username` FROM `abhi` WHERE `username`='$username'";
	 $query_run=mysql_query($query);
	 if(mysql_num_rows($query_run)==1){
	 	echo "The username Exist";
	 }else{
	 	$query="INSERT INTO abhi(`Prof_ID`,`First_Name`,`Last_Name`,`Username`,`Password`,`E-Mail`) VALUES('','".mysql_real_escape_string($firstname)."','".mysql_real_escape_string($lastname)."','".mysql_real_escape_string($username)."','".mysql_real_escape_string($password)."','".mysql_real_escape_string($email)."')";
	 	if($query_run=mysql_query($query)){
	 		header('Location:loginprof.php');
	 	}
	 }
}
}
?>
<html>
<head>
<link rel="stylesheet" type="text/css" href="Assign4.css">
<script src="register.js"></script>
</head>
<body>
<h1>Register Yourself</h1>
<div>
<br><br>
<form action="registerprof.php" method="POST" onsubmit="return validate()">
First-Name: <input type="text" name="firstname" id="T1" placeholder="*" value="<?php if(isset($firstname)) {echo $firstname;} ?>"><span id="S1" ></span><br><br>
Last-Name: <input type="text" name="lastname" id="T2" placeholder="*" value="<?php if(isset($lastname)) {echo $lastname;} ?>"><span id="S2"></span><br><br>
Username: <input type="text" name="username" id="T3" placeholder="*" value="<?php if(isset($username)) {echo $username;} ?>"><span id="S3"></span><br><br>
Password: <input type="password" name="pass" id="T4" placeholder="*" ><span id="S4"></span><br><br>
Re-Enter-Password: <input type="password" name="repass" placeholder="*" id="T5" ><span id="S5"></span><br><br>
Gender:<br>
<input type="radio" name="gender" value="male" id="R1" checked>Male
<input type="radio" name="gender" value="female" id="R2">Female<br><br>
E-Mail:<input type="text" name="email" placeholder="abc@xyz.com" id="T6" value="<?php if(isset($email)) {echo $email;} ?>"><span id="S6"></span><br><br>
<input type="submit" value="Register" id="b1" >
</form>
<p style="font-weight: normal; text-shadow: 0px 0px 0px">(* Are Required)</p>
</div>
</body>
</html>