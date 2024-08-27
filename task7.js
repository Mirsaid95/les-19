
// 7. String holda raqamlar beriladi va uni teskari arrayga aylantiruvchi funksiya tuzing.
// Misol uchun: "34567" => [7, 6, 5, 4, 3]

const reverseIntoArr = (str) => {
    let toArr = str.split('').reverse();
    let toNum = [];
    for (let i = 0; i < toArr.length; i++) {
        toNum.push(Number(toArr[i]));
    }
    return toNum;
}
export{ reverseIntoArr };

