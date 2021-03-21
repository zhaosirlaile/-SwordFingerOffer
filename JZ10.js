function rectCover(number)
{
  if(number < 3) return number;
  return rectCover(number-1) + rectCover(number - 2);
}