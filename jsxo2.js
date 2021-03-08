var i=0;
var m=0;
var dd;
var pos=0;
var pos1=0;
var p=[0,0];
var ply="x";
var tent=0;
var vll=[];
var o1=[];
var o2=0;
var y=[];
var x2=0;
var x1=[];
var rdm=[];
var vle=[];
var vl=[];
document.onload=function(){
	setTimeout(function(){
		document.getElementById('fst').style.display="none";
	},2000);
}
window.onload=function(){
	setTimeout(function(){
		document.getElementById('fst').style.display="none";
	},2000);
}
/*function audio1(type,nom,src,id) {
	if(type=='class')
		var doc=document.getElementsByClassName(nom)[0];
	if(type=='tag')
		var doc=document.getElementsByTagName(nom)[0];
	if(type=='id')
		var doc=document.getElementById(nom);
	var src1=src+".mp3";
	var audio=document.createElement("audio");
	audio.setAttribute("src",src1);
	audio.setAttribute("id",id);
	audio.setAttribute("controls","");
	audio.setAttribute("type","audio/mp3");
	audio.setAttribute("autoplay","");
	doc.append(audio);
	audio.style.display="none";
	audio.style.width="80%";
}*/
function play(){
	x2=0;
	o2=0;
	for(var ee=0;ee<9;ee++)
		x1[ee]=0;
	x1.length=0;
	for(var ee=0;ee<9;ee++)
		o1[ee]=0;
	o1.length=0;
	for(var l=1;l<10;l++)
		vl[l-1]= document.getElementById('d'+l);
	for(var k=0;k<9;k++)
		vll[k]=k+1;
	//audio1('tag','body','win3','l2');
	var capt=document.getElementById('cc');
	var div=document.getElementsByClassName('d');
	for (var k =0;k<9;k++) {
			ply="x";
			div[k].style.pointerEvents="auto";
			div[k].style.backgroundColor="aqua";
			div[k].setAttribute("value",(k+1));
			div[k].innerHTML="";
			capt.innerHTML="RADOUAN MSAAD";
			capt.style.color="red";
			capt.style.backgroundColor="white";
		}
	}
function change(obj){
	i=0;
	m=0;
	for(var q=0;q<10;q++)
		y[q]="";
	var btn=document.getElementsByClassName('d');
	var point=document.getElementsByClassName('point');
	var capt=document.getElementById('cc');
	var ply=document.getElementById('ply');
	for(var l=1;l<10;l++)
		vl[l-1]= document.getElementById('d'+l);
	for(var k=0;k<9;k++){
		if(k==r-1);
		else
			vll[k]= vl[k].getAttribute("value");}
		if(i%2==0){
			switch(obj){
				case '1':vle[0]=1; break;
				case '2':vle[1]=2; break;
				case '3':vle[2]=3; break;
				case '4':vle[3]=4; break;
				case '5':vle[4]=5; break;
				case '6':vle[5]=6; break;
				case '7':vle[6]=7; break;
				case '8':vle[7]=8; break;
				case '9':vle[8]=9; break;
			}
			vl[obj-1].setAttribute("value","x");
			vl[obj-1].innerHTML="x";
			vl[obj-1].style.backgroundColor="lightgreen";
			vl[obj-1].style.pointerEvents="none";
			vll[obj-1]="x";
			vr();
			for(var z=0;z<9;z++){
				if((vll[z]=='x')||(vll[z]=='o'))
					;
				else{
					y[m]=z+1;
					m++;
				}
			    }
				  if(vll[obj-1]=='x'){
				  x1[x2]=obj;
				  x2++;
				}

			var r=Math.floor(Math.random()*(m));
			switch(y[r]){
				case 1:pos=1; break;
				case 2:pos=2; break;
				case 3:pos=3; break;
				case 4:pos=4; break;
				case 5:pos=5; break;
				case 6:pos=6; break;
				case 7:pos=7; break;
				case 8:pos=8; break;
				case 9:pos=9; break;
			  }
			  
			  if(x2==1){
			if(x1[0]!=5)
			   pos=5;
			
			if(x1[0]==5){
				var q=2*Math.floor(Math.random()*(4));
				switch(q){
				case 0:pos=1; break;
				case 2:pos=3; break;
				case 4:pos=9; break;
				case 6:pos=7; break;
				case 8:pos=9; break;
			  }
	          }
	          }
	           if((x2==2)&&(x1[0]!=5)){
	           	if((((x1[0]==1)||(x1[0]==9))&&((x1[1]==1)||(x1[1]==9)))||(((x1[0]==3)||(x1[0]==7))&&((x1[1]==3)||(x1[1]==7)))){
	           		var w=2*Math.floor(Math.random()*(4))+1;
	           		switch(w){
				case 1:pos=2; break;
				case 3:pos=4; break;
				case 5:pos=6; break;
				case 7:pos=8; break;
			   }
	           }
	           if(((x1[0]==3)||(x1[0]==8))&&((x1[1]==3)||(x1[1]==8))){
	           	var w=Math.floor(Math.random()*(3));
	           	switch(w){
				case 0:pos=6; break;
				case 1:pos=7; break;
				case 2:pos=9; break;
			   }
	           }
	           if(((x1[0]==3)||(x1[0]==4))&&((x1[1]==3)||(x1[1]==4))){
	           	var w=Math.floor(Math.random()*(3));
	           	switch(w){
				case 0:pos=1; break;
				case 1:pos=2; break;
				case 2:pos=7; break;
			   }
	           }
	            if(((x1[0]==1)||(x1[0]==8))&&((x1[1]==1)||(x1[1]==8))){
	           	var w=Math.floor(Math.random()*(3));
	           	switch(w){
				case 0:pos=4; break;
				case 1:pos=6; break;
				case 2:pos=9; break;
			   }
	           }
	           if(((x1[0]==1)||(x1[0]==6))&&((x1[1]==1)||(x1[1]==6))){
	           	var w=Math.floor(Math.random()*(3));
	           	switch(w){
				case 0:pos=2; break;
				case 1:pos=3; break;
				case 2:pos=9; break;
			   }
	           }
	           //2
	           if(((x1[0]==2)||(x1[0]==9))&&((x1[1]==2)||(x1[1]==9))){
	           	var w=Math.floor(Math.random()*(3));
	           	switch(w){
				case 0:pos=1; break;
				case 1:pos=3; break;
				case 2:pos=6; break;
			   }
	           }
	           if(((x1[0]==4)||(x1[0]==9))&&((x1[1]==4)||(x1[1]==9))){
	           	var w=Math.floor(Math.random()*(3));
	           	switch(w){
				case 0:pos=1; break;
				case 1:pos=7; break;
				case 2:pos=8; break;
			   }
	           }
	            if(((x1[0]==7)||(x1[0]==2))&&((x1[1]==7)||(x1[1]==2))){
	           	var w=Math.floor(Math.random()*(3));
	           	switch(w){
				case 0:pos=1; break;
				case 1:pos=3; break;
				case 2:pos=4; break;
			   }
	           }
	           if(((x1[0]==7)||(x1[0]==6))&&((x1[1]==7)||(x1[1]==6))){
	           	var w=Math.floor(Math.random()*(3));
	           	switch(w){
				case 0:pos=3; break;
				case 1:pos=8; break;
				case 2:pos=9; break;
			   }
	           }
	           }
	           if((x2==2)&&(x1[0]==5)){
	           	if((x1[1]==1)||(x1[1]==3)||(x1[1]==7)||(x1[1]==9)){
	           		var w=Math.floor(Math.random()*(2));
	           	   if((x1[1]==9)||(x1[1]==1)){
	           	  	switch(w){
				case 0:pos=3; break;
				case 1:pos=7; break;
			    }
	           	  }
	           	  if((x1[1]==7)||(x1[1]==3)){
	           	  	switch(w){
				case 0:pos=1; break;
				case 1:pos=9; break;
			    }
	            }
	           	}
	            }
				
			    if((vll[0]=="o")&&(vll[3]=="o")&&(vll[6]==7)){
				pos=7;
			    }
			    else if((vll[3]=="o")&&(vll[6]=="o")&&(vll[0]==1)){
				pos=1;
			    }
			    else if((vll[0]=="o")&&(vll[6]=="o")&&(vll[3]==4)){
				pos=4;
			    }
				//2
				else if((vll[0]=="o")&&(vll[1]=="o")&&(vll[2]==3)){
					pos=3;
				}
				else if((vll[0]=="o")&&(vll[2]=="o")&&(vll[1]==2)){
					pos=2;
				}
				else if((vll[1]=="o")&&(vll[2]=="o")&&(vll[0]==1)){
					pos=1;
				}
				//3
				else if((vll[0]=="o")&&(vll[4]=="o")&&(vll[8]==9)){
					pos=9;
				}
				else if((vll[0]=="o")&&(vll[8]=="o")&&(vll[4]==5)){
					pos=5;
				}
				else if((vll[4]=="o")&&(vll[8]=="o")&&(vll[0]==1)){
					pos=1;
				}
				//4
				else if((vll[2]=="o")&&(vll[4]=="o")&&(vll[6]==7)){
					pos=7;
				}
				else if((vll[2]=="o")&&(vll[6]=="o")&&(vll[4]==5)){
					pos=5;
				}
				else if((vll[4]=="o")&&(vll[6]=="o")&&(vll[2]==3)){
					pos=3;
				}
				//5
				else if((vll[1]=="o")&&(vll[4]=="o")&&(vll[7]==8)){
					pos=8;
				}
				else if((vll[1]=="o")&&(vll[7]=="o")&&(vll[4]==5)){
					pos=5;
				}
				else if((vll[4]=="o")&&(vll[7]=="o")&&(vll[1]==2)){
					pos=2;
				}
				//6
				else if((vll[3]=="o")&&(vll[4]=="o")&&(vll[5]==6)){
					pos=6;
				}
				else if((vll[3]=="o")&&(vll[5]=="o")&&(vll[4]==5)){					
					pos=5;
				}
				else if((vll[4]=="o")&&(vll[5]=="o")&&(vll[3]==4)){
					pos=4;
				}
				//7
				else if((vll[2]=="o")&&(vll[5]=="o")&&(vll[8]==9)){
					pos=9;
				}
				else if((vll[2]=="o")&&(vll[8]=="o")&&(vll[5]==6)){
					pos=6;
				}
				else if((vll[5]=="o")&&(vll[8]=="o")&&(vll[2]==3)){
					pos=3;
				}
				//8
				else if((vll[6]=="o")&&(vll[7]=="o")&&(vll[8]==9)){
					pos=9;
				}
				else if((vll[6]=="o")&&(vll[8]=="o")&&(vll[7]==8)){
					pos=8;
				}
				else if((vll[7]=="o")&&(vll[8]=="o")&&(vll[6]==7)){
					pos=7;
				}
				//1
				else if((vll[0]=="x")&&(vll[3]=="x")&&(vll[6]==7)){
					pos=7;
				}
				else if((vll[3]=="x")&&(vll[6]=="x")&&(vll[0]==1)){
					pos=1;
				}
				else if((vll[0]=="x")&&(vll[6]=="x")&&(vll[3]==4)){
					pos=4;
				}
				//2
				else if((vll[0]=="x")&&(vll[1]=="x")&&(vll[2]==3)){
					pos=3;
				}
				else if((vll[0]=="x")&&(vll[2]=="x")&&(vll[1]==2)){
					pos=2;
				}
				else if((vll[1]=="x")&&(vll[2]=="x")&&(vll[0]==1)){
					pos=1;
				}
				//3
				else if((vll[0]=="x")&&(vll[4]=="x")&&(vll[8]==9)){
					pos=9;
				}
				else if((vll[0]=="x")&&(vll[8]=="x")&&(vll[4]==5)){
					pos=5;
				}
				else if((vll[4]=="x")&&(vll[8]=="x")&&(vll[0]==1)){
					pos=1;
				}
				//4
				else if((vll[2]=="x")&&(vll[4]=="x")&&(vll[6]==7)){
					pos=7;
				}
				else if((vll[2]=="x")&&(vll[6]=="x")&&(vll[4]==5)){
					pos=5;
				}
				else if((vll[4]=="x")&&(vll[6]=="x")&&(vll[2]==3)){
					pos=3;
				}
				//5
				else if((vll[1]=="x")&&(vll[4]=="x")&&(vll[7]==8)){
					pos=8;
				}
				else if((vll[1]=="x")&&(vll[7]=="x")&&(vll[4]==5)){
					pos=5;
				}
				else if((vll[4]=="x")&&(vll[7]=="x")&&(vll[1]==2)){
					pos=2;
				}
				//6
				else if((vll[3]=="x")&&(vll[4]=="x")&&(vll[5]==6)){
					pos=6;
				}
				else if((vll[3]=="x")&&(vll[5]=="x")&&(vll[4]==5)){
					pos=5;
				}
				else if((vll[4]=="x")&&(vll[5]=="x")&&(vll[3]==4)){
					pos=4;
				}
				//7
				else if((vll[2]=="x")&&(vll[5]=="x")&&(vll[8]==9)){
					pos=9;
				}
				else if((vll[2]=="x")&&(vll[8]=="x")&&(vll[5]==6)){
					pos=6;
				}
				else if((vll[5]=="x")&&(vll[8]=="x")&&(vll[2]==3)){
					pos=3;
				}
				//8
				else if((vll[6]=="x")&&(vll[7]=="x")&&(vll[8]==9)){
					pos=9;
				}
				else if((vll[6]=="x")&&(vll[8]=="x")&&(vll[7]==8)){
					pos=8;
				}
				else if((vll[7]=="x")&&(vll[8]=="x")&&(vll[6]==7)){
					pos=7;
				}
				
				vl[pos-1].setAttribute("value","o");
				vl[pos-1].innerHTML="o";
				vl[pos-1].style.backgroundColor="orange";
				vl[pos-1].style.pointerEvents="none";
				vll[pos-1]="o";
				if(vll[pos-1]=='o'){
				  o1[o2]=pos;
				  o2++;
				 }
			}
			m=0;
			vr();
			function vr(){
			if(((vll[0]==vll[1])&&(vll[0]==vll[2]))||((vll[0]==vll[3])&&(vll[0]==vll[6]))||((vll[0]==vll[4])&&(vll[0]==vll[8]))||((vll[8]==vll[5])&&(vll[8]==vll[2]))||((vll[8]==vll[7])&&(vll[8]==vll[6]))||((vll[5]==vll[4])&&(vll[5]==vll[3]))||((vll[1]==vll[4])&&(vll[1]==vll[7]))||((vll[2]==vll[4])&&(vll[2]==vll[6]))){
				var t=setTimeout(function(){
					play();
				},3000);
				if((vll[0]==vll[1])&&(vll[0]==vll[2])){
					
					for(var j=0;j<3;j++){
						if(vll[j]=="o"){
							ply="o";
							i=1;
							vl[j].style.backgroundColor="red";
						}
						else if(vll[j]=="x")  {
							ply="x";i=0;
							vl[j].style.backgroundColor="green";
						}
					}

				}
				if((vll[0]==vll[3])&&(vll[0]==vll[6])){
					for(var j=0;j<7;j+=3){
						if(vll[j]=="o"){
							ply="o";i=1;
							vl[j].style.backgroundColor="red";
						}
						else if(vll[j]=="x")  {
							ply="x";i=0;
							vl[j].style.backgroundColor="green";
						}
					}
				}
				if((vll[0]==vll[4])&&(vll[0]==vll[8])){
					for(var j=0;j<9;j+=4){
						if(vll[j]=="o"){
							ply="o";i=1;
							vl[j].style.backgroundColor="red";
						}
						else if(vll[j]=="x") {
							ply="x";i=0;
							vl[j].style.backgroundColor="green";
						}
					}
				}
				if((vll[8]==vll[5])&&(vll[8]==vll[2])){
					for(var j=2;j<9;j+=3){
						if(vll[j]=="o"){
							ply="o";i=1;
							vl[j].style.backgroundColor="red";
						}
						else if(vll[j]=="x") {
							ply="x";i=0;
							vl[j].style.backgroundColor="green";
						}
					}
				}
				if((vll[8]==vll[7])&&(vll[8]==vll[6])){
					for(var j=6;j<9;j++){
						if(vll[j]=="o"){
							ply="o";i=1;
							vl[j].style.backgroundColor="red";
						}
						else if(vll[j]=="x") {
							ply="x";i=0;
							vl[j].style.backgroundColor="green";
						}
					}
				}
				if((vll[5]==vll[4])&&(vll[5]==vll[3])){
					for(var j=3;j<6;j++){
						if(vll[j]=="o"){
							ply="o";i=1;
							vl[j].style.backgroundColor="red";
						}
						else if(vll[j]=="x") {
							ply="x";i=0;
							vl[j].style.backgroundColor="green";
						}
					}
				}
				if((vll[1]==vll[4])&&(vll[1]==vll[7])){
					for(var j=1;j<9;j+=3){
						if(vll[j]=="o"){
							ply="o";i=1;
							vl[j].style.backgroundColor="red";
						}
						else if(vll[j]=="x") {
							ply="x";i=0;
							vl[j].style.backgroundColor="green";
						}
					}
				}
				if((vll[2]==vll[4])&&(vll[2]==vll[6])){
					for(var j=2;j<7;j+=2){
						if(vll[j]=="o"){
							ply="o";i=1;
							vl[j].style.backgroundColor="red";
						}
						else if(vll[j]=="x") {
							ply="x";i=0;
							vl[j].style.backgroundColor="green";
						}
					}
				}
				for(var j=0;j<10;j++){
					btn[j].style.pointerEvents="none";
					capt.innerHTML=ply+" gagne.";
					if(ply=="x"){
						i=0;
					}
					else if(ply=="o"){
						i=1;
			
					}
					
					if(ply=="x"){
						
						if(j==0){
							//audio1('tag','body','win01','l3');
							p[1]++;
						}
						point[1].innerHTML="x: "+p[1];
						capt.style.backgroundColor="green";
					}
					else if(ply=="o"){
						
						if(j==0){
							//audio1('tag','body','false2','l2');
							p[0]++;

						}
						point[0].innerHTML="o: "+p[0];
						capt.style.backgroundColor="red";
						
					}
					var pt=document.getElementById('pt');
						pt.innerHTML="o: "+p[0]+" - x: "+p[1];
						setTimeout(function(){
							pt.innerHTML="";
						},3000);
					capt.style.color="white";

					for(var d=0;d<10;d++){
						vll[d]==d+1;
					}
				}
			}
			else tent++;
			//audio1('tag','body','click1','l4');
			for(var z=0;z<9;z++){
				if((vl[z].getAttribute("value")=='x')||(vl[z].getAttribute("value")=='o'))
					;
				else{ y[m]=z+1;
					m++;
				}
			}
			if(m==0){
				m=0;
				var fst=document.getElementById('fst');
				setTimeout(function(){
		          fst.style.display="block";
	               },2000);
				setTimeout(function(){
		          fst.style.display="none";
	               },3000);
				var t=setTimeout(function(){
					play();
				},3000);
				
				document.getElementById("cc").innerHTML="NULL";
				for(var j=0;j<10;j++){
					vl[j].style.backgroundColor="yellow";
					vll[j]=j+1;
				}

			}
			if(p[0]==9||p[1]==9){
				ply.style.pointerEvents="none";
				ply.style.backgroundColor="white";
			}
		}
	}