$(document).ready(function(){
	'use strict';
	 $("#first").click(function(){
		$("#para").fadeIn(-100); 
		 reset1();
		$("#head").fadeIn(-100); 
		$("#firstset").fadeOut(-100); 
		$("#secondset").fadeOut(-100);
		$("#drawcontainer").fadeOut(-100);
		//document.getElementById("id1").style.display="none";
		//w.clearRect(0, 0, canvas.width, canvas.height);
	 });
     $("#second").click(function(){
		$("#firstset").fadeIn(-100);
		 reset1();
		$("#secondset").fadeIn(-100); 
		$("#para").fadeOut(-100); 
		$("#head").fadeOut(-100);
		$("#drawcontainer").fadeOut(-100);
		 //saves();
	
	 });
	 $("#third").click(function(){
		 //reset1();
		$("#drawcontainer").fadeIn(-100);
		$("#firstset").fadeOut(-100); 
		$("#secondset").fadeOut(-100);
		$("#para").fadeOut(-100); 
		$("#head").fadeOut(-100);
		
	 });
	var prex;
	var prey;
	var x;
	var y;
	//var mousemovement;
     var c=$("#container").offset().left;
     var d=$("#container").offset().top;
	 var canvas;
	 canvas = document.getElementById("id1");
     var w = canvas.getContext("2d");
     canvas.width=514;
	 canvas.height=520;
	var clickcount=0;
	 $("#pencil").click(function(){
		 clickcount=1;
	
		 $("#id1").mousemove(function(e){
				 prex=x-250;
				 prey=y;
			    //alert(x);
			     x= e.pageX-c;	
                 y=e.pageY-d;	
			     $("#eraser").css("margin-left", 259);
			     $("#eraser").css("margin-top", 549);
			  if(clickcount===1)
				 {
				 $("#pencil").css("margin-left", x-250);
	             $("#pencil").css("margin-top", y-50);
					 if(draw===true)
				     {
					  reset();
				      w.lineTo(x-250, y);
			          w.stroke();
			          
				     }
				 }
		     });
		 
		     
     });
	
	$("#eraser").click(function(){
		clickcount=2;
		draw=false;
		$("#id1").mousemove(function(){	
			if(clickcount===2)
			{
		    $("#eraser").css("margin-left", x-260);
			$("#eraser").css("margin-top", y-20);
			reset();
			}
			$("#pencil").css("margin-left",189);
			$("#pencil").css("margin-top",549);
		    
		}); 
	});	        
	
     var i=0;
     var incre=0;
     var numarr=["img/one.jpg","img/two.jpg","img/three.jpg","img/four.jpg","img/five.jpg","img/six.jpg","img/seven.jpg","img/eight.jpg"];
	 var paraarr=["para_0","para_1","para_2","para_3","para_4","para_5","para_6","para_7"];
     var imgarr=[];
	 var img = new Image();

        $("button").click(function() { 
		  $("button").attr('disabled','disabled');
	      $("#popup").fadeIn(-100);
	      var name=$(this).attr("id");
	      var number=name.split("_")[1];
	      imgarr[incre]=number;
	      incre++;
          img.src =numarr[imgarr[i]];
          document.getElementById('imagecontainer').appendChild(img);
	      img.style.width='100px';
	      img.style.height='83px';
	      $("#"+paraarr[imgarr[i]]).fadeIn(-100);
		  i++;
          });
          var j=0;
          $("#close").click(function() {
		  $("button").removeAttr('disabled','disabled');
          $("#popup").fadeOut(-100);
	      $("#"+paraarr[imgarr[j]]).fadeOut(-100);
		  j++;
         });
	
	function reset()
	{
		if(clickcount===1)
			{
			
			w.strokeStyle = 'black';	
			w.lineWidth=5;	
		    w.lineCap = 'round';
				
			}
		else if(clickcount===2)
		   {
			w.strokeStyle = 'white';	
			w.lineWidth=15;
			w.lineCap = 'round';
			w.beginPath();
            w.moveTo(prex,prey);
            w.lineTo(x-250, y);
            w.stroke();	
		   }
	}
	//var q1;
	var q;
	//var p1;
	var p;
	var draw;
	$("#id1").mousedown(function(e){
		 draw=true;
		 q=e.pageX;
		 p=e.pageY;
		 w.beginPath();
         w.moveTo(q-460,p-10);
		 //alert(q+"-----------------"+p);
	});
	
	$("#id1").mouseup(function(){
	             draw=false;
	            });
	
	function reset1()
	{
		clickcount=0;
		     $("#eraser").css("margin-left", 259);
	         $("#eraser").css("margin-top", 549);
		     $("#pencil").css("margin-left",189);
		     $("#pencil").css("margin-top",549);
			
		 
	}
	//function download() {
    //var urls = canvas.toDataURL();
    //this.href = urls; 
//}
//document.getElementById('download').addEventListener('click', download, false);

});
