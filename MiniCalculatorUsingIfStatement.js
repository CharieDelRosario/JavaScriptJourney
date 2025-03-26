function miniCalculator(a,operator, b)
{
  if(operator == "+" )
  {
  console.log("Summation: ", a + b);
  }
  if(operator == "-")
  {
  console.log("difference:", a - b);
  }
  if(operator == "*")
  {
  console.log("Product:", a * b);
  }
  if(operator == "/")
  {
  console.log("Division:", a / b);
  }
  if(operator == "%")
  {
  console.log("Remaider:", a / b);
  }
}
miniCalculator(15,"+", 5);
