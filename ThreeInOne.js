const Mathematics={
  num1: 110,
  num2: 155,
  
  add: function()
  {
    return this.num1 + this.num2;
  },
  
  sub: function()
  {
      return this.num1 - this.num2;
  },
  mul: function()
  {
      return this.num1 * this.num2;
  },
  div: function()
  {
      return this.num1 / this.num2;
  },
  mod: function()
  {
      return this.num1 % this.num2;
  },
}
  console.log(Mathematics.add());
  console.log(Mathematics.sub());
  console.log(Mathematics.mul());
  console.log(Mathematics.div());
  console.log(Mathematics.mod());

