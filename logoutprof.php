<?php
require 'extraprof.inc.php';
session_destroy();
if(isset($_SERVER['HTTP_REFERER'])){
	$refer=$_SERVER['HTTP_REFERER'];
}
header('Location:'.$refer);
?>