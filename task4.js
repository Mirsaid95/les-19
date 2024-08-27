// 4. arrey ichida objectlar bor userdan input orqali qiymat olib arrey ichidagi object 
// dan shu qiymatga teng bo’lgan obj topish 
 

let inputValue = prompt('Enter any info of the user');
let arr = [
    {
        name: 'Abdulaziz',
        id: 23733
    },
    {
        name: 'Muhammadjon',
        id: 23734
    }
];

const findTheCorrespondingValue = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let values = Object.values(arr[i]);
        let findTheValue = values.find((item) => item == inputValue) 
        if (findTheValue) {
            return arr[i];
        }
    }
    return 'Error';
}
export { arr, findTheCorrespondingValue }; 