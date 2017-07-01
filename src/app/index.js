function checkInp()
{
  var x=document.forms["myForm2"]["MyInn"].value;
  if (isNaN(x))
  {
    alert("Must input numbers");
    return false;
  }
}
