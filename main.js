
function Tab(num){
	var i;
	var temp;
//		console.log("test");
/*
	for(i=1;i<4;i++){
		if(i==num)
			temp="block";	
		else
			temp="none";
		document.getElementById("content"+i).style.display=temp;
		console.log("temp=",temp);
	}
	*/
    for(i=1;i<=4;i++)
    {
        if(i==num)
           document.getElementById("content"+i).style.display="block";
         else
           document.getElementById("content"+i).style.display="none";
    }
}

