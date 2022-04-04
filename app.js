


         //============================= Array =========================


         /*
         //Q no 1
         var arr = [];

         //Q no 2
         var a = new Array();



         //Q no 3
         var arr = ["Sanjay Kumar"];
         document.write(arr);



         //Q no 4
         var arr = [1 , 2];
         document.write(arr);



         //Q no 5
         var arr = [true , false];
         document.write(arr);

         //Q no 6
         var arr = [19 , "Sanjay Kumar" , null];
         console.log(arr);
         */

/*
         //Q no 7

         var arr = ["SSC ", "HSC ", "BCS ", "BS ", "BCOM ", "MS ", "M. Phil ", "PhD "];
         for(var a = 0; a <= arr.length; a++){ 
          document.write(a + " ) " + arr[a] + "<br>");
          

         }*/

/*
         // Q No 8

         var stdName = ["Umair", "Sanjay", "Ahsan"];
var stdScore = [320, 230, 480];
var per1 = (stdScore[0] / 500) * 100;
var per2 = (stdScore[1] / 500) * 100;
var per3 = (stdScore[2] / 500) * 100;

document.write("<h2>" + "Score of Umair is " + stdScore[0. ] + " Percentage: " + per1 + "%" + "<br/>" 
+ "Score of Sanjay is " + stdScore[1. ] + " Percentage: " + per2 + "%"
+ "<br/>" + "Score of Ahsan is " + stdScore[2. ] + " Percentage: " + per3 + "%" +"</h2>" )
*/



/*
//Q No 9
// A
             var arr = ["Black" , "Yellow" , "Red"];
              arr.unshift(prompt("Enter the color"))
              arr.unshift(prompt("Enter the color"))

             document.write("<strong>" + arr + "<strong>")
            //B
         var arr = ["Black" , "Yellow" , "Red"];
         arr.push(prompt("Enter the Color Name"))
         document.write("<strong>" + arr + "</strong>");

        //C
         var arr = ["Black" , "Yellow" , "Red"];
         arr.unshift(prompt("Enter the Color"))
         arr.unshift(prompt("Enter the Color"))

        document.write("<h2>" + arr + "<h2>")

        //D
         var arr = ["Black" , "Yellow" , "Red"];
         arr.shift(arr[0]);
         document.write(arr);

        //E
         var arr = ["Black" , "Yellow" , "Red"];
         arr.pop(arr[2])
         document.write(arr)
        
        //F
         var color = ["Black", "Yellow", "Red"];
         var indexNum = prompt("Enter Index Number");
         var colorName = prompt("Enter the Color name");
             color.splice(indexNum, 0, colorName);
             document.write(color);
       

        //G
          var arr = ["Black" , "Yellow" , "Red" ,"Blue" , "Pink" , "Brown"];
         arr.splice(prompt("how to start",  prompt("how much you want to delete")))
         console.log(arr);

         var color = ["Black" , "Yellow" , "Red" ,"Blue" , "Pink" , "Brown"];
         var arr = prompt("Enter index location for deleting Color :eg(0-4)");
         var dletClor = prompt("How many color do you want to delete?" );
         color.splice(arr, dletClor);
         document.write("<strong>" + "After deleting" + "</strong>" + "<br>");
         document.write(color);
         */

/*
         //Q no 10
         var stdScore = [320 , 230 , 480 , 120];
         stdScore.sort();
         document.write(stdScore);
        
         const points = [40 , 100 , 1 , 5 , 25 , 10];
        points.sort(function(a, b){return a - b});
        */
/*
// Q NO 11
 var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
 var arrCopy = cities.slice(2,4);
 document.write("<strong>" + arrCopy + "</strong>");
*/

/*
//Q No 12
       var a = ["This", "is", "my", "cat"];
       ajoin = a.join(" ");
       document.write("<strong>" + "Array: " + "<br>" + a + "<br>" + "<br>" + "String " + "<br>" +ajoin + "</strong>")
*/
/*
        // Q NO 13
 var devices = ["Keyboard", "Mouse", "Printer", "Monitor"]
 document.write("<Strong>"  + "Devices" + "<br>" + devices + "</h1>"  + "<h2>" + "Out: " + "<br>" 
 + devices.shift() + "<br>" + "Out: " + "<br>" + devices.shift() + "<br>"+ "Out: " + "<br>" 
 + devices.shift() + "<br>"+ "Out: " + "<br>" + devices.shift() + "<br>" + "</strong>");
*/
/*
 //Q NO 14
 var devices = ["Keyboard", "Mouse", "Printer", "Monitor"]
 document.write("<strong>"  + "Devices" + "<br>" + devices + "</h1>"  + "<h2>" + "Out: " + "<br>" 
 + devices.pop() + "<br>" + "Out: " + "<br>" + devices.pop() + "<br>"+ "Out: " + "<br>" + devices.pop() 
 + "<br>"+ "Out: " + "<br>" + devices.pop() + "<br>" + "</strong>")
 */




 //======================= Array and Loops ===========================

//Q No 1
 
/* 
var arr = [
   [],
   [],
   []
 ];
 document.write(arr);
 */


 /*
//Q No 2 
 var arr = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1]
];
for(i = 0; i < arr.length; i++){
document.write(arr[i] + "<br>");
}
*/


/*
// Q:No 3

  for (var i = 1; i <= 10; i++){
    document.write(i + "<br>");
}
 */
 
 
 /*Q:No 4
 
 var tableNumber = +prompt('enter table number');
 var tableLength = +prompt('enter table Length');
 document.write(" Multiplication table of " + tableNumber + "<br>" + " Length " + tableLength + "<br>" + "<br>")

 if (tableNumber) {
   tableNumber = tableNumber;
 } else {
   tableNumber = 5;
 }

 if (tableLength) {
   tableLength = tableLength;
 } else {
   tableLength = 10;
 }

 for (var i = 1; i <= tableLength; i++) {
   document.write( 
     tableNumber + " " + "x" + " " + i + " = " + tableNumber * i + "<br>"
   );
 }*/

 /*
//Q No 5

var friuts = ["apple", "banana", "mango", "orange", "strawberry"];

for (var b = 0; b < 5; b++){
    document.write(friuts[b] + "<br>");
}
for (var i = 0; i < 5; i++){
    document.write("<br>"+ "Element at Index " + i + " is " + friuts[i] + "<br>");
}
*/


/*
//Q No 6

var i = "Counting";
document.write(i + " : " + "<br><br>"); 
       for(var a = 1; a < 16; a++){
         document.write(a + " , ");
 
 }
 var i = "Reverse Counting";
 
 document.write(i + " : " + "<br><br>"); 
 for(var a = 15; a >= 1; a--){
     document.write(a + " , ");
     
    }
    var i = "Even";
    document.write(i + " : " + "<br><br>"); 
    for(var a = 0; a <= 20; a += 2){
        document.write(a + " , ");
        
    }
    
    
    var i = "Odd";
    document.write(i + " : " + "<br><br>"); 
    for(var a = 1; a <= 20; a += 2){
        document.write(a + " , ");
        
    }
    
    
    var i = "Series";
   document.write(i + " : " + "<br><br>"); 
   for(var a = 2; a <=20; a += 2){
       document.write(a + "k" + " , ");
       
    }
    */
/*
//Q No 7
    var pastryArr = ["cake", "apple pie", "cookie", "chips", "patties"];
    var userPastry = prompt("Welcome to ABC Bakery. What do you want to order Sir / Ma'am? ");
    for (var i = 0; i < pastryArr.length; i++) {
        console.log(pastryArr[i]);
        if (userPastry === pastryArr[i]) {
          alert( pastryArr[i] + " is available at index" + i + "in our Bakery");
        }else {
          alert("We are sorry. Pastry is not available in our Bakery");
          break;
        }
      }
*/
/*
// Q No 8
var arr = [24,53,78,91,12];
var largest = arr[0];
document.write("Array Items : 24, 53, 78, 91, 12 " + "<br>")

for(var i=0; i<arr.length; i++){
    if( largest < arr[i]){
        largest = arr[i];   
    }
}

document.write("The Largest Number is " + largest + "<br>");
*/



/* 
// Q no 9
var arr = [24,53,78,91,12];
		var smallest = arr[0];
        document.write("Array Items : 24, 53, 78, 91, 12 " + "<br>")


		for(var i=1; i<arr.length; i++){
			if(arr[i] < smallest){
				smallest = arr[i];   
			}
		}

		document.write("The Smallest Number is " + smallest + "<br>");
		
*/

/*
//Q No 10

for(var a = 0; a <= 100; a += 5){
           document.write(a + " , ");
   };
*/