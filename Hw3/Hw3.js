//Hw3.js

function run()
{
  var upper= document.getElementById("upperBound").value;
  document.getElementById("output").innerHTML= sieve(upper);
  document.getElementById("t20").innerHTML= sieve(20);
  document.getElementById("t100").innerHTML= sieve(100);
}

function sieve(upperBound)
{
  var arr= [];
  for(var i= 0; i<= upperBound; i++)
  {
    arr[i]= i;
  }
  for(var i= 0; i<= upperBound; i++)
  {
    return("[" +arr.filter(checkValue)+ "]");
  }
}

function checkValue(number)
{
    return (!(Number.isInteger(Math.sqrt(number))) && number !=1 && (number%2!=0 || number==2) && (number%3!=0 || number==3) && number%4 && (number%5 || number==5) && number%6 && (number%7 || number==7) && number % 8 && number % 9);
}
