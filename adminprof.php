<?php
require 'connectprof.inc.php';
require 'extraprof.inc.php';
if (loggedin()){
	?>
	<h1>Prof's List</h1>
	<?php
echo '<a href="logoutprof.php" class="link1">Log Out </a><br>';
	$query="SELECT `abhi`.`Prof_ID`, `abhi`.`First_Name`,`abhi`.`Last_Name` FROM `admin`,`abhi` ";
	if($query_run=mysql_query($query)){
		while($row=mysql_fetch_array($query_run)){
			$user_id=$row['Prof_ID'];
				$_SESSION['user_id']=$user_id;
			echo '<a href=loginprof.php?Prof_ID='.$user_id.' class="link2">'.$row['First_Name'].' '.$row['Last_Name'].'</a><br><br>';
			
}}}else{
include 'admin.php';
}
?>
<html>
<head>
<link rel="stylesheet" type="text/css" href="loginpage.css">

</head>
</html>

