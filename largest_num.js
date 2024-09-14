const numbers = [10,200,30,40,50,60,70,90,500]

let largest = numbers[0]

for (const num of numbers)
{
    if(num > largest)
    {
        largest = num
    }
}

console.log(`The largest number in array is ${largest}`)