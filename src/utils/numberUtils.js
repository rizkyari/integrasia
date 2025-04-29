export const findEvenNumbers = (numbers) => {
    return numbers.filter((num) => num % 2 === 0);
};
  
export const sumEvenNumbers = (evenNumbers) => {
    return evenNumbers.reduce((acc, curr) => acc + curr, 0);
};