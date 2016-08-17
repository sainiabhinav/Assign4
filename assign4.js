function validate(){
		var field1= document.getElementById("T1");
		var field2= document.getElementById("T2");
		 if(field1.value.length==0 && field2.value.length==0)
	 {
		document.getElementById("S1").innerHTML="*Plz provide Username";
	document.getElementById("T1").style.backgroundColor="#ffb3b3";
	document.getElementById("S2").innerHTML="*Plz provide Password";
	document.getElementById("T2").style.backgroundColor="#ffb3b3";
	return false;
}
else if(field1.value.length==0 && field2.value.length>0)
	 {
	 	document.getElementById("S2").innerHTML="";
	document.getElementById("T2").style.backgroundColor="";
		document.getElementById("S1").innerHTML="*Plz provide Username";
	document.getElementById("T1").style.backgroundColor="#ffb3b3";
	return false;
}
else if(field1.value.length>0 && field2.value.length==0)
	 {
	 	document.getElementById("S1").innerHTML="";
	document.getElementById("T1").style.backgroundColor="";
	document.getElementById("S2").innerHTML="*Plz provide Password";
	document.getElementById("T2").style.backgroundColor="#ffb3b3";
	return false;
}
else{
return true;}
}