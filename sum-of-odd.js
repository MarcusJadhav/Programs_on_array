const numbers = [1,2,3,4,5,6,7,8,9]

let sum = 0
for (const num of numbers)
{
    if(num % 2 ==1)
    {
        sum += num
    }
}

console.log(`Sum of odd numbers in array is ${sum}`)