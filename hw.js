// 1.   Write an function that contains an if/else statement for the following requirements:
// - If student gets 80 or higher: console log  You did a good job
// - If students get 70 or above: console log Keep trying
// - If students get 60 or above: console log ehhhh
// - If students get 55 or above: console log Not to good
// // - Any grade lower than 55 is Bad Grade But You'll Get Em Next Time

function score(grade)
{
    if(grade>=80){
            console.log("You did a good Job")
    }else if(grade>=70){
            console.log("Keep Trying")
     } else if(grade>=60){
            console.log("ehhhh")
      } else if(grade>=55){
            console.log("Not to good")
      }else{
        console.log("Bad Grade But You'll Get Em Next Time")}
      }
score(99);

// 2.   Write a function that prints out multiples of 10 up to a given input (argument)

function mul(num)
{
    for(i=1;i<=num;i++)
    {
        if(i%10===0)
        
            console.log(i)
        
    }
}
mul(20)


// 3.   Write a function that takes bill amount and item price and says how many quarters they'd get in return

function main(bill,paid)
{
    let i=0
    let quarters=0
    let change=paid-bill;
    while(i<change)
    {
        quarters+=4
        i++
    }
    console.log(quarters +"quarters")

}
main(23,24)


//4.    Write a function that prints out how many bills you would recieve in change after paying a certain amount.  
// Return in as large denominations as possible. Parameters should be amount paind and amount cost

function main(cost,paid)
{
    let i=0
    let quarters=0
    let change=paid-cost;
    while(i<change)
    {

        quarters+=4
        i++
    }
    console.log(quarters +"quarters")

}
main(23,24)



// 5.   Write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions. 
// For numbers divisible by 3, print "Fizz" instead of the number,
//  and for numbers divisible by 5 (and not 3), 
// print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", 
// for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).


for ( let i= 1; i< 101; i ++ ) {
  
    var mulThree = i % 3;
    var mulFive = i % 5;
    
    if ( (mulThree == 0) && (mulFive == 0) ) 
        console.log( "FizzBuzz");
    
    else if (mulThree == 0)
      console.log( "Fizz");
    
    else if (mulFive == 0)
      console.log( "Buzz");
    
    else
      console.log( i );
  } 
  

  console.log("hi")
