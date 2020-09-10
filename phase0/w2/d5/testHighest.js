function getTotal(arrNumber) {
    let count = 0
    let largest = 0
    for (var i = 0; i < arrNumber.length; i++) { // to find largest number
        if (largest < arrNumber[i]) {
            largest = arrNumber[i]
        }
    }

    for (var j = 0; j < arrNumber.length; j++) { // to find the occurence of highest number
        if (arrNumber[j] === largest) {
            count += 1
        }
    }
    return `angka paling besar adalah ${largest} dan jumlah kemunculan sebanyak ${count} kali`
}


console.log(getTotal([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(getTotal([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(getTotal([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(getTotal([]));