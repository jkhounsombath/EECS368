main= function()
{
  for(let i = 1; i <= 100; i++)
  {
    if(i % 3 == 0 && i % 5 == 0)
    {
      chalk.println("fizzbuzz")
    }
    else if(i % 3 == 0)
    {
      chalk.println("fizz");
    }
    else if(i % 5 == 0)
    {
      chalk.println("buzz");
    }
    else
    {
      chalk.println("" + i);
    }
  }
};
