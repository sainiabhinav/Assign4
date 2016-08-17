<?php
require 'extraprof.inc.php';
require 'connectprof.inc.php';
?>
<?php
if(loggedin()){
	$query="SELECT `abhi`.`First_Name`,`prof`.`Id`,`prof`.`Name`,`prof`.`Roll_No` FROM `prof`,`abhi` WHERE `abhi`.`Prof_ID`='".$_SESSION['user_id']."'  AND `prof`.`Prof_ID`=`abhi`.`Prof_ID`";
	$query_run=mysql_query($query);
	if($query_run=mysql_query($query)){
		$First_Name=getfield1('First_Name');
		$Last_Name=getfield2('Last_Name');
		echo '<h1>Welcome '.$First_Name.' '.$Last_Name.' To Your Student\'s List </h1><a href="logout.php" class="link1">Log Out </a>';
?>
<form action="loginprof.php" method="POST" onsubmit="return validate1()"><br><h3>Add New One:</h3>
Name: <input type="text" name="name" id="T4" placeholder="*" >
Roll No.: <input type="text" name="roll" id="T5" placeholder="*"><span id="S3" ></span><br><br>
<input type="submit" value="submit" id="b1">
</form>
<hr>

<?php
	echo '<table align="center"><tr id="tr1"><td id="td3">ID </td><td id="td2">Name</td><td id="td4">Roll NO.</td></tr>';
	while($row=mysql_fetch_array($query_run)){
		echo '<tr><td id="td5">'.$row['Id'].'</td> <td id="td1" >'.$row['Name'].'</td> ' ;
		echo '<td id="td6">'.$row['Roll_No'].'</td><br></tr>';
	}
	echo '</table>';
}
		if(isset($_POST['id1'])&&isset($_POST['name1'])&&isset($_POST['roll1'])) {
	$name1=$_POST['name1'];
$roll1=$_POST['roll1'];
$id=$_POST['id1'];
	 	$query="UPDATE `prof` SET `Name`='".mysql_real_escape_string($name1)."',`Roll_NO`='".mysql_real_escape_string($roll1)."' WHERE `Id`='".mysql_real_escape_string($id)."'";
	 	if($query_run=mysql_query($query)){
	 		header('Location:loginprof.php');
	 	}
	 }
	 if(isset($_POST['id2'])) {
$id1=$_POST['id2'];
	 	$query="DELETE FROM `prof` WHERE `Id`='".mysql_real_escape_string($id1)."'";
	 	if($query_run=mysql_query($query)){
	 		header('Location:loginprof.php');
	 	}
	 }
	if(isset($_POST['name'])&&isset($_POST['roll'])) {
	$name=$_POST['name'];
$roll=$_POST['roll'];
	 	$query="INSERT INTO prof(`ID`,`Name`,`Roll_No`,`Prof_ID`) VALUES('','".mysql_real_escape_string($name)."','".mysql_real_escape_string($roll)."','".$_SESSION['user_id']."')";
	 	if($query_run=mysql_query($query)){
	 		header('Location:loginprof.php');
	 	}
	 }
?>
<link rel="stylesheet" type="text/css" href="loginpage.css">
<script src="login.js"></script>
<hr>
<form action="loginprof.php" method="POST" onsubmit="return validate()"><br><h3>Edit One Using ID:</h3>
ID: <input type="text" name="id1" id="T1" placeholder="*" value="<?php if(isset($id)) {echo $id;} ?>"><span id="S1" ></span><br><br>
Name: <input type="text" name="name1" id="T2" placeholder="*" >
Roll No.: <input type="text" name="roll1" id="T3" placeholder="*" ><span id="S2" ></span><br><br>
<input type="submit" value="submit" id="b1">
</form>
<hr>
<form action="loginprof.php" method="POST" onsubmit="return validate2()"><br><h3>Delete One Using ID:</h3>
ID: <input type="text" name="id2" id="T6" placeholder="*" ><span id="S4" ></span><br><br>
<input type="submit" value="submit" id="b1">
</form>

<?php
}
else{
include 'loginformprof.php';
}
?>


