// Question# 1
//  Declare 3 variables in one statement

variables = "name,age,city"; 

name = "zainab_naz";
age = 18;
city = "karachi";

// document.write((name) + (age) + (city) )
//-------------------------------------------

//Question# 2
// Declare 5 legal & 5 illegal variable names.


//(Legal Variable)
 
 game= "pubg";
 firstName = "zainab_naz";
 fatherName = "$muhammad_waseem";
 myAge = 18;
 bithDate = 2003;


//(illegal Variable)

// 1apple;       {number can't be written in the first of variable name.}
// &myName;      {symbol can't be written in the starting of variable name}
// father name;  {space isn't allowed in variable name}
// user-name;    {hyphen  isn't allowed in variable name}
// let;          {reserved keyword isn't allowed in variable name}

//-----------------------------------------------

//3. Display this in your browser

 //a) A heading stating “Rules for naming JS variables”


 let heading = document.createElement("h1");

  document.getElementById("headingContainer").innerHTML = "<h1>Rules for naming  JS variable</h1>";

 //b) Variable names can only contain __, __,
  //__ and __.


  $variable_Name = "Variable name can only contain , numbers, $ and _ . For example :$my_1stVariable.";

  document.write($variable_Name) + "<br/>";

 "<br/>"
//c) Variables must begin with a __, __ or
 //___. For example $name, _name or name


variableFirst_Letter = "Variable must begin with a letter, $ or _. For example : $name,_name or name ";

document.write ("<br/>" +  (variableFirst_Letter) );


//d) Variable names are case ___


variableCases = "Variable names are case sensitive"
 document.write("<br/>" + (variableCases));

// //e) Variable names should not be JS ___



 var_key = "Variable names should not be JS keywords"
 document.write("<br/>" + (var_key));

//-------------------------------------------