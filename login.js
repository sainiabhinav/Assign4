function validate(){
		var field1= document.getElementById("T1");
		var field2= document.getElementById("T2");
		var field3= document.getElementById("T3");
	 if(field1.value.length==0 && field2.value.length==0 && field3.value.length==0  )
	 {
	document.getElementById("S1").innerHTML="*Plz provide ID";
	document.getElementById("T1").style.backgroundColor="#ffb3b3";
	document.getElementById("S2").innerHTML="*Plz provide Name/ Roll No.";
	document.getElementById("T2").style.backgroundColor="#ffb3b3";
	document.getElementById("T3").style.backgroundColor="#ffb3b3";
	return false;
}
else if(field1.value.length==0 && field2.value.length>0 && field3.value.length==0  )
	 {
	document.getElementById("S1").innerHTML="*Plz provide ID";
	document.getElementById("T1").style.backgroundColor="#ffb3b3";
	document.getElementById("S2").innerHTML="*Plz provide Name/ Roll No.";
	document.getElementById("T2").style.backgroundColor="";
	document.getElementById("T3").style.backgroundColor="#ffb3b3";
	return false;
}
else if(field1.value.length==0 && field2.value.length==0 && field3.value.length>0  )
	 {
	document.getElementById("S1").innerHTML="*Plz provide ID";
	document.getElementById("T1").style.backgroundColor="#ffb3b3";
	document.getElementById("S2").innerHTML="*Plz provide Name/ Roll No.";
	document.getElementById("T3").style.backgroundColor="";
	document.getElementById("T2").style.backgroundColor="#ffb3b3";
	return false;
}

else if(field1.value.length>0 && field2.value.length==0 && field3.value.length==0  )
	 {
	document.getElementById("S1").innerHTML="";
	document.getElementById("T1").style.backgroundColor="#ffb3b3";
	document.getElementById("S2").innerHTML="*Plz provide Name/ Roll No.";
	document.getElementById("T2").style.backgroundColor="#ffb3b3";
	document.getElementById("T3").style.backgroundColor="#ffb3b3";
	return false;
}
 else if(field1.value.length==0 && field2.value.length>0 && field3.value.length>0  )
	 {
	document.getElementById("S1").innerHTML="*Plz provide ID";
	document.getElementById("T1").style.backgroundColor="#ffb3b3";
	document.getElementById("S2").innerHTML="";
	document.getElementById("T2").style.backgroundColor="";
	document.getElementById("T3").style.backgroundColor="";
	return false;
}
 else if(field1.value.length>0 && field2.value.length==0 && field3.value.length>0  )
	 {
	document.getElementById("S1").innerHTML="";
	document.getElementById("T1").style.backgroundColor="";
	document.getElementById("S2").innerHTML="*Plz provide Name/ Roll No.";
	document.getElementById("T2").style.backgroundColor="#ffb3b3";
	document.getElementById("T3").style.backgroundColor="";
	return false;
}
	else if(field1.value.length>0 && field2.value.length>0 && field3.value.length==0  )
	 {
	document.getElementById("S1").innerHTML="";
	document.getElementById("T1").style.backgroundColor="";
	document.getElementById("S2").innerHTML="*Plz provide Name/ Roll No.";
	document.getElementById("T2").style.backgroundColor="#ffb3b3";
	document.getElementById("T3").style.backgroundColor="#ffb3b3";
	return false;
}
else if(field1.value.length>0 && field2.value.length>0 && field3.value.length>0  )
	 {
	document.getElementById("S1").innerHTML="";
	document.getElementById("T1").style.backgroundColor="";
	document.getElementById("S2").innerHTML="";
	document.getElementById("T2").style.backgroundColor="";
	document.getElementById("T3").style.backgroundColor="";
	return true;
}
}
function validate1(){
		var field1= document.getElementById("T4");
		var field2= document.getElementById("T5");
	if(field1.value.length==0 && field2.value.length==0 )
	 {
	document.getElementById("T4").style.backgroundColor="#ffb3b3";
	document.getElementById("S3").innerHTML="*Plz provide Name/ Roll No.";
	document.getElementById("T5").style.backgroundColor="#ffb3b3";
	return false;
}
else if(field1.value.length>0 && field2.value.length==0 )
	 {
	document.getElementById("T4").style.backgroundColor="";
	document.getElementById("S3").innerHTML="*Plz provide Name/ Roll No.";
	document.getElementById("T5").style.backgroundColor="#ffb3b3";
	return false;
}
else if(field1.value.length==0 && field2.value.length>0 )
	 {
	document.getElementById("T4").style.backgroundColor="#ffb3b3";
	document.getElementById("S3").innerHTML="*Plz provide Name/ Roll No.";
	document.getElementById("T5").style.backgroundColor="";
	return false;
}
else if(field1.value.length>0 && field2.value.length>0 )
	 {
	document.getElementById("T4").style.backgroundColor="";
	document.getElementById("S3").innerHTML="";
	document.getElementById("T5").style.backgroundColor="";
	return true;
}
}
function validate2(){
	var field1= document.getElementById("T6");
if(field1.value.length==0){
	document.getElementById("T6").style.backgroundColor="#ffb3b3";
	document.getElementById("S4").innerHTML="*Plz provide ID";
	return false;
}
else{
	return true;
}
}

