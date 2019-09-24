// var temp=((Math.random()*30)-5).toFixed(2);
// console.log(temp);
// if (temp >=-5 && temp <=10) {
// 	document.write("The weather is cold");

// } 
// else {
//  	  document.write ("The weather is moderate");
// }

// var a = 12;
// if(a == 12) {
//    let a=30;

// }
// console.log(a);



// function highVal(arr){
// 	let max = arr[0];
// 	for (let i=1; i<arr.length;i++) {
// 	if (arr[i]>max) {
// 	max=arr[i];
	
// 	}

// 	}
// 	document.write(max);
// } 

// highVal([1,5,22,9,6]);
 

// function prod(arr) {
// var arr= [1,3,7,10,2]
//  var a=0;
//  var b=1;
 
//  var i;
//  for (i=0; i<arr.length; i+=1)
//  {
//  	a+= arr[i];
//  	b*= arr[i];
//  }

//  document.write("<br>Product is: " + b);
// }
//  prod();

function temp2(){
var temp=((Math.random()*45)-5).toFixed(2);
console.log(temp);
if (temp >=-5 && temp <=10) {
		document.getElementById('result').innerHTML ="The weather is cold";
		// myImage.src="cold.jpeg";
		document.getElementById('img').innerHTML ="<img src='cold.jpeg'>";
} 
else if(temp >10 && temp <=22) {
 	 	 document.getElementById("result").innerHTML="The weather is moderate";
 	 	 // myImage.src="autumn.jpeg";
 	  	document.getElementById("img").innerHTML="<img src='autumn.jpeg'>";
}
else if (temp >22 && temp <=30) {
		document.getElementById("result").innerHTML="The weather is hot";
		// myImage.src="spring.jpeg";
		document.getElementById("img").innerHTML="<img src='spring.jpeg'>";
}
else {
		document.getElementById("result").innerHTML="The weather is really hot";
		// myImage.src="hot.jpeg";
		document.getElementById("img").innerHTML="<img src='hot.jpeg'>";
}s

}








