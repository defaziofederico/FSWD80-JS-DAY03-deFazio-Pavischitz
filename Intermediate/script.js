var martin = 76;
var thomas = 85;
var klaus = 65;
var maria = 93;
var david = 81;

var avgClass = (martin + thomas + klaus + maria + david) / 5;
document.write(avgClass + "<br>");

var arr = [martin,thomas,klaus,maria,david];
for (let i=0; i<arr.length;i++) {


if (arr[i]<60){
	document.write("avg class point: " + avgClass+ " your grade is < 60 F <br> ");
}
else if (arr[i]>=60 && arr[i]<70){
	document.write("avg class point: " + avgClass+ " your grade is < 70 D <br> ");
}
else if (arr[i]>=70 && arr[i]<80){
	document.write("avg class point: " + avgClass+ " your grade is < 80 C <br> ");
}
else if (arr[i]>=80 && arr[i]<90){
	document.write("avg class point: " + avgClass+ " your grade is < 90 B <br>");
}
else{
	document.write("avg class point: " + avgClass+ " your grade is < 100 A <br>");
}
}

for (i = 1; i <= 100; i++) {
	if (i% 3 == 0 && i %5 == 0){
		document.write("FizzBuzz <br>");
	}
	else if (i %5 == 0){
		document.write("Buzz <br>");
	}
	else if (i %3  == 0){
		document.write("Fizz <br>");
	}
	else {
  		var text = "";
  		text +=  i+ "<br>";
  		document.write(text);
}
}