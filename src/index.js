const num = [
    ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'],
    [null, null, 'twen', 'thir', 'for', 'fif', 'six', 'seven', 'eigh', 'nine']
]

module.exports = function toReadable(number) {
    let i = 0;
    let string = '';
    if (number > 99) {
        string += `${num[0][number.toString()[i]]} hundred`;
        i++;
    }

    if (number === 0) return 'zero';

    if (number % 100 === 14) {
        string += ' fourteen';
    } else {
        if (number % 100 < 20 && number % 100 > 12) {
            string += ` ${num[1][number.toString()[i + 1]]}teen`
        } else {
            if (number % 100 >= 10 && number % 100 <= 12) {
                string += ` ${num[0][number.toString().substr(i, 2)]}`
            } else {
                if (number.toString().length > 1) {
                    if (number % 100 >= 20){
                        string += ` ${num[1][number.toString()[i]]}ty`;
                    }
                i++;
                }
                if (number % 10 !== 0)
                    string += ` ${num[0][number.toString()[i]]}`;
            }
        }
    }


    return string.trim()
}

/*console.log(toReadable(13))*/
