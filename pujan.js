function saywelcome()
{
alert("welcome to java script world");
}
function squareroot()
{
	num=parseInt(prompt("enter the number"))
	square=num*num;
	alert(square);
}
function add()
{
	num1=parseInt(document.getElementById('num1').value);
	num2=parseInt(document.getElementById('num2').value);
	sum=num1+num2;
	//document.getElementById('add').innerHTML=sum;
	alert(sum);
}
function multiply()
{
	num1=parseInt(document.getElementById('num1').value);
	num2=parseInt(document.getElementById('num2').value);
	multiply=num1*num2;
	alert(multiply);
}
function divide()
{
	num1=parseInt(document.getElementById('num1').value);
	num2=parseInt(document.getElementById('num2').value);
	divide=num1/num2;
	alert(divide);
}