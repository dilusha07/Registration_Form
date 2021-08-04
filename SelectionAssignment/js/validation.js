function formValidation()
{

var fname = document.registration.lname;
var lname = document.registration.fname;
var pnum = document.registration.pnum;
var add = document.registration.address;
var email = document.registration.email;


{

if(allLetter(fname))
{
if(allLetter(lname))
{
if(allnumeric(pnum))
{	
if(alphanumeric(add))
{
if(ValidateEmail(email))
{
{
}
} 
}
} 
}
}
}
return false;
} 

//validating user name
function allLetter(fname)
{ 
var letters = /^[A-Za-z]+$/;
if(fname.value.match(letters))
{
return true;
}
else
{
alert('First Name must have alphabet characters only');
fname.focus();
return false;
}
}
function allLetter(lname)
{ 
var letters = /^[A-Za-z]+$/;
if(lname.value.match(letters))
{
return true;
}
else
{
alert('Last Name must have alphabet characters only');
lname.focus();
return false;
}
}

//validating user address
function alphanumeric(add)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(add.value.match(letters))
{
return true;
}
else
{
alert('User address must have alphanumeric characters only');
add.focus();
return false;
}
}

function allnumeric(pnum)
{ 
var numbers = /^[0-9]+$/;
if(pnum.value.match(numbers))
{
return true;
}
else
{
alert('Contact number must have numeric characters only');
pnum.focus();
return false;
}
}
function ValidateEmail(email)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
email.focus();
return false;
}

else
{
alert('User Added Successfully');
window.location.reload()
return true;
}
}
