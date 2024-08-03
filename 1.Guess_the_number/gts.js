const prompt = require('prompt-sync')();

let a = parseInt(prompt("Enter a number (from 1-100): "), 10);

let x = Math.floor(Math.random() * 100) + 1;

if(a==x)
{
    console.log("You got the number!");
}

else
{
    for(let i=0;i<51;i++)
    {
        if(x>a)
        {
            console.log("Guess higher");
            
        }
        else 
        {
            console.log("Guess lower");
            
        }
        a = parseInt(prompt("Enter a number: "), 10);

        if(a===x){
            console.log("You got the number!");
            break
        }
    }

}