function jumpFloor(number)
{
  if(number < 3) return number;
  return jumpFloor(number-1) + jumpFloor(number - 2);
}

console.log(jumpFloor(3));