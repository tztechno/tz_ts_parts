
    const getShuffledNumbers = () => {
        const numbers = Array.from({ length: 25 }, (_, i) => i + 1);
        for (let i = numbers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
        }
        return numbers;
    };
    
    console.log(getShuffledNumbers())
    
/* 
[
   1,  7, 19, 11,  6,  9, 15,  2,
  25,  8, 13, 24, 12, 17, 23,  3,
  22, 21, 10, 16, 18,  5, 14, 20,
   4
]
*/
