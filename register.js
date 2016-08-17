function validate(){
		var field1= document.getElementById("T1");
		var field2= document.getElementById("T2");
		var field3= document.getElementById("T3");
		var field4= document.getElementById("T4");
		var field5= document.getElementById("T5");
		var field6= document.getElementById("T6");
		var capital=/[A-Z]/;
		var sign='@';
		var space=' ';
		var last='.com';
		 if(field1.value.length==0 && field2.value.length==0 && field3.value.length==0 && field4.value.length==0 )
	 {
	document.getElementById("S1").innerHTML="*Plz provide First-Name";
	document.getElementById("T1").style.backgroundColor="#ffb3b3";
	document.getElementById("S2").innerHTML="*Plz provide Last-Name";
	document.getElementById("T2").style.backgroundColor="#ffb3b3";
	document.getElementById("S3").innerHTML="*Plz provide Username";
	document.getElementById("T3").style.backgroundColor="#ffb3b3";
	document.getElementById("S4").innerHTML="*Plz provide Password";
	document.getElementById("T4").style.backgroundColor="#ffb3b3";
	return false;
}
else if(field1.value.length>0 && field2.value.length==0 && field3.value.length==0 && field4.value.length==0 )
	 {
		document.getElementById("S1").innerHTML="";
	document.getElementById("T1").style.backgroundColor="";
	document.getElementById("S2").innerHTML="*Plz provide Last-Name";
	document.getElementById("T2").style.backgroundColor="#ffb3b3";
	document.getElementById("S3").innerHTML="*Plz provide Username";
	document.getElementById("T3").style.backgroundColor="#ffb3b3";
	document.getElementById("S4").innerHTML="*Plz provide Password";
	document.getElementById("T4").style.backgroundColor="#ffb3b3";
	return false;
}
else if(field1.value.length>0 && field2.value.length>0 && field3.value.length==0 && field4.value.length==0 )
	 {
		document.getElementById("S1").innerHTML="";
	document.getElementById("T1").style.backgroundColor="";
	document.getElementById("S2").innerHTML="";
	document.getElementById("T2").style.backgroundColor="";
	document.getElementById("S3").innerHTML="*Plz provide Username";
	document.getElementById("T3").style.backgroundColor="#ffb3b3";
	document.getElementById("S4").innerHTML="*Plz provide Password";
	document.getElementById("T4").style.backgroundColor="#ffb3b3";
	return false;
}
else if(field1.value.length>0 && field2.value.length>0 && field3.value.length>0 && field4.value.length==0 )
	 {
		document.getElementById("S1").innerHTML="";
	document.getElementById("T1").style.backgroundColor="";
	document.getElementById("S2").innerHTML="";
	document.getElementById("T2").style.backgroundColor="";
	document.getElementById("S3").innerHTML="";
	document.getElementById("T3").style.backgroundColor="";
	document.getElementById("S4").innerHTML="*Plz provide Password";
	document.getElementById("T4").style.backgroundColor="#ffb3b3";
	return false;
}
else if(field1.value.length>0 && field2.value.length==0 && field3.value.length>0 && field4.value.length==0 )
	 {
		document.getElementById("S1").innerHTML="";
	document.getElementById("T1").style.backgroundColor="";
	document.getElementById("S2").innerHTML="*Plz provide Last-Name";
	document.getElementById("T2").style.backgroundColor="#ffb3b3";
	document.getElementById("S3").innerHTML="";
	document.getElementById("T3").style.backgroundColor="";
	document.getElementById("S4").innerHTML="*Plz provide Password";
	document.getElementById("T4").style.backgroundColor="#ffb3b3";
	return false;
}
else if(field1.value.length>0 && field2.value.length==0 && field3.value.length==0 && field4.value.length>0 )
	 {
		document.getElementById("S1").innerHTML="";
	document.getElementById("T1").style.backgroundColor="";
	document.getElementById("S2").innerHTML="*Plz provide Last-Name";
	document.getElementById("T2").style.backgroundColor="#ffb3b3";
	document.getElementById("S3").innerHTML="*Plz provide Username";
	document.getElementById("T3").style.backgroundColor="#ffb3b3";
	document.getElementById("S4").innerHTML="";
	document.getElementById("T4").style.backgroundColor="";
	return false;
}
else if(field1.value.length>0 && field2.value.length>0 && field3.value.length==0 && field4.value.length>0 )
	 {
		document.getElementById("S1").innerHTML="";
	document.getElementById("T1").style.backgroundColor="";
	document.getElementById("S2").innerHTML="";
	document.getElementById("T2").style.backgroundColor="";
	document.getElementById("S3").innerHTML="*Plz provide Username";
	document.getElementById("T3").style.backgroundColor="#ffb3b3";
	document.getElementById("S4").innerHTML="";
	document.getElementById("T4").style.backgroundColor="";
	return false;
}
else if(field1.value.length>0 && field2.value.length==0 && field3.value.length>0 && field4.value.length>0 )
	 {
		document.getElementById("S1").innerHTML="";
	document.getElementById("T1").style.backgroundColor="";
	document.getElementById("S2").innerHTML="*Plz provide Last-Name";
	document.getElementById("T2").style.backgroundColor="#ffb3b3";
	document.getElementById("S3").innerHTML="";
	document.getElementById("T3").style.backgroundColor="";
	document.getElementById("S4").innerHTML="";
	document.getElementById("T4").style.backgroundColor="";
	return false;
}
else if(field1.value.length==0 && field2.value.length>0 && field3.value.length==0 && field4.value.length==0 )
	 {
		document.getElementById("S1").innerHTML="*Plz provide First-Name";
	document.getElementById("T1").style.backgroundColor="#ffb3b3";
	document.getElementById("S2").innerHTML="";
	document.getElementById("T2").style.backgroundColor="";
	document.getElementById("S3").innerHTML="*Plz provide Username";
	document.getElementById("T3").style.backgroundColor="#ffb3b3";
	document.getElementById("S4").innerHTML="*Plz provide Password";
	document.getElementById("T4").style.backgroundColor="#ffb3b3";
	return false;
}
else if(field1.value.length==0 && field2.value.length>0 && field3.value.length>0 && field4.value.length==0 )
	 {
		document.getElementById("S1").innerHTML="*Plz provide First-Name";
	document.getElementById("T1").style.backgroundColor="#ffb3b3";
	document.getElementById("S2").innerHTML="";
	document.getElementById("T2").style.backgroundColor="";
	document.getElementById("S3").innerHTML="";
	document.getElementById("T3").style.backgroundColor="";
	document.getElementById("S4").innerHTML="*Plz provide Password";
	document.getElementById("T4").style.backgroundColor="#ffb3b3";
	return false;
}
else if(field1.value.length==0 && field2.value.length>0 && field3.value.length==0 && field4.value.length>0 )
	 {
		document.getElementById("S1").innerHTML="*Plz provide First-Name";
	document.getElementById("T1").style.backgroundColor="#ffb3b3";
	document.getElementById("S2").innerHTML="";
	document.getElementById("T2").style.backgroundColor="";
	document.getElementById("S3").innerHTML="*Plz provide Username";
	document.getElementById("T3").style.backgroundColor="#ffb3b3";
	document.getElementById("S4").innerHTML="";
	document.getElementById("T4").style.backgroundColor="";
	return false;
}
else if(field1.value.length==0 && field2.value.length>0 && field3.value.length>0 && field4.value.length>0 )
	 {
		document.getElementById("S1").innerHTML="*Plz provide First-Name";
	document.getElementById("T1").style.backgroundColor="#ffb3b3";
	document.getElementById("S2").innerHTML="";
	document.getElementById("T2").style.backgroundColor="";
	document.getElementById("S3").innerHTML="";
	document.getElementById("T3").style.backgroundColor="";
	document.getElementById("S4").innerHTML="";
	document.getElementById("T4").style.backgroundColor="";
	return false;
} 
else if(field1.value.length==0 && field2.value.length==0 && field3.value.length>0 && field4.value.length>0 )
	 {
		document.getElementById("S1").innerHTML="*Plz provide First-Name";
	document.getElementById("T1").style.backgroundColor="#ffb3b3";
	document.getElementById("S2").innerHTML="*Plz provide Last-Name";
	document.getElementById("T2").style.backgroundColor="#ffb3b3";
	document.getElementById("S3").innerHTML="";
	document.getElementById("T3").style.backgroundColor="";
	document.getElementById("S4").innerHTML="";
	document.getElementById("T4").style.backgroundColor="";
	return false;
}
else if(field1.value.length>0 && field2.value.length>0 && field3.value.length>0 && field4.value.length>0 )
	 {
		document.getElementById("S1").innerHTML="";
	document.getElementById("T1").style.backgroundColor="";
	document.getElementById("S2").innerHTML="";
	document.getElementById("T2").style.backgroundColor="";
	document.getElementById("S3").innerHTML="";
	document.getElementById("T3").style.backgroundColor="";
	document.getElementById("S4").innerHTML="";
	document.getElementById("T4").style.backgroundColor="";
	if(field4.value!=field5.value){
		document.getElementById("S5").innerHTML="Should be same as Password";
		return false;
	}
	if(field6.value.match(capital))
	 {
		 document.getElementById("S6").innerHTML="*E-mail can't contain capital letters";
		 document.getElementById("S5").innerHTML="";
		 return false;
	 }
	  if(field6.value.length<2 || (field6.value.indexOf("@")==(field6.value.length-3)))
	{
		document.getElementById("S6").innerHTML="*Invalid E-mail";
		document.getElementById("S5").innerHTML="";
		return false;
	}
	 if(!field6.value.match(sign)){
	 	document.getElementById("S6").innerHTML="*E-mail should have @";
		 document.getElementById("S5").innerHTML="";
		 return false;
	 }
	 if(field6.value.match(space)){
	 	document.getElementById("S6").innerHTML="*E-mail shouldn't have spaces";
		 document.getElementById("S5").innerHTML="";
		 return false;
	 }
	 if(!field6.value.match(last)){
	 	document.getElementById("S6").innerHTML="*E-mail should have proper domain";
	 	document.getElementById("S5").innerHTML="";
	 	return false;
	 }
	{
		return true;
	}

	}
}