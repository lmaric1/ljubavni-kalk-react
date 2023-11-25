import "./style.css";
import React from 'react';
import ImageAPI from './ImageAPI'; 
import { useState } from "react";
import ReactDOM from 'react-dom';
import App from 'react';


function ljubav(ime1, ime2){
	
	if ((ime1.trim().toLowerCase()=="luka" && ime2.trim().toLowerCase()=="marija") 
		|| (ime2.trim().toLowerCase()=="luka" && ime1.trim().toLowerCase()=="marija")){
			return 99;
		}

		if ((ime1.trim().toLowerCase()=="marko" && ime2.trim().toLowerCase()=="ana") 
		|| (ime2.trim().toLowerCase()=="ana" && ime1.trim().toLowerCase()=="marko")){
			return 98;
		}


	
	
	var sveSkupa = ime1.trim().toLowerCase().concat(ime2.trim().toLowerCase());
	var nizBrojeva=[];
	var ukupno;
	for(var i=0;i<sveSkupa.length;i++){
		ukupno=1;
		for(var j=0;j<sveSkupa.length;j++){
			if (i==j){
				continue;
			}
			if(sveSkupa.charAt(i)==sveSkupa.charAt(j)){
				ukupno++;
			}
		}
		nizBrojeva.push(ukupno);
	}
	var izracun=[];
	var b;
	do{
		for(var i=0;i<nizBrojeva.length;i++){
			if(i<(nizBrojeva.length-1)/2){
				b=nizBrojeva[i] + nizBrojeva[nizBrojeva.length-1-i];
				if(b>=10){
					izracun.push(parseInt(b/10));
					izracun.push(b%10);
				}else{
					izracun.push(b);
				}
				
			}else{
				if(nizBrojeva.length%2>0){
					izracun.push(nizBrojeva[i]);
				}
				break;
			}
		}
		nizBrojeva=izracun;
		izracun=[];
	}while(nizBrojeva.length>2);
	
	
	var ukupno=0;
	for(var i=0;i<nizBrojeva.length;i++){
		switch(i){
			case 0:
				ukupno+=nizBrojeva[i]*10;
				break;
			case 1:
				ukupno+=nizBrojeva[i];
				break;
		}	
	}
	
	return ukupno;
}

/* Simple VanillaJS to toggle class */
document.getElementById('toggleProfile').addEventListener('click', function () {
    [].map.call(document.querySelectorAll('.profile'), function(el) {
      el.classList.toggle('profile--open');
    });
  });
  
  var izracuni=[];
    


  function renderImages(event) {
	event.preventDefault();
	izracunaj();
	ReactDOM.render(<ImageAPI />, document.getElementById('root'));
  }
  
 

    document.getElementById("izracunaj").addEventListener("click", izracunaj);

	function izracunaj(){
      
		document.getElementById("poruka").innerHTML="";
		
		var ona = document.getElementById("ona");
		
		if(ona.value.trim().length==0){
			document.getElementById("poruka").innerHTML="Obavezno ime cure";
			return false;
		}
		
		
		var on = document.getElementById("on");
		
		if(on.value.trim().length==0){
			document.getElementById("poruka").innerHTML="Obavezno ime dečka";
			return false;
		}
		
		var rezultati = document.getElementById("rezultati");
		var li = document.createElement("li");
		var postotak = ljubav(ona.value,on.value);
		li.appendChild(document.createTextNode(ona.value + " ♥ " + on.value + " = " + postotak + " %"));
		rezultati.appendChild(li);
		
		izracuni.push({on: on.value, ona: ona.value, postotak: postotak});
		
		document.getElementById("ona").value="";
		document.getElementById("on").value="";
		
		
	
		return false;
	}
  
	
	  
	  document.getElementById('izracunaj').addEventListener('click', function (event) {
		event.preventDefault();
		ReactDOM.render(<ImageAPI />, document.getElementById('root'));
	  });

	export default App;

