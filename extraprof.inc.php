<?php
ob_start();
session_start();
$current_file=$_SERVER['SCRIPT_NAME'];
function loggedin(){
if(isset($_SESSION['user_id'])&&!empty($_SESSION['user_id'])){
	return true;
}else{
	return false;
}
}
function getfield1($field1){
	$query="SELECT `abhi`.`$field1` FROM `abhi` WHERE `abhi`.`Prof_ID`='".$_SESSION['user_id']."' ";
	if($query_run=mysql_query($query)){
	return $query_result=mysql_result($query_run,0,$field1);
	}
}

function getfield2($field2){
		$query="SELECT `abhi`.`$field2` FROM `abhi` WHERE `abhi`.`Prof_ID`='".$_SESSION['user_id']."' ";
	if($query_run=mysql_query($query)){
	return $query_result=mysql_result($query_run,0,$field2);
	}
}
?>