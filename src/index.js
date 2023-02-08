const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let myArray = [];
    let substring = '';
    console.log(expr.length)

    let counter = 0;
    for(let i = 0; i < expr.length; i++){
        substring += expr[i];
        counter++;
        if(counter === 10){
            myArray.push(substring);
            substring = '';
            counter = 0;
        }

    }

    console.log(myArray);
    let dashDotted = myArray.map((el) => {
        let elArr = el.split('');
        let newElem = '';
        for(let i = 0; i < 5; i++){
            let first = elArr.shift();
            let second = elArr.shift();
            if(`${first}${second}` === '10'){
                newElem += '.'
            }else if(`${first}${second}` === '11'){
                newElem += '-'
            }else if(`${first}${second}` === '**'){
                newElem += ' ';
                break;
            }
        }
        return newElem;
    })


    let result =  dashDotted.map((el) => el === ' ' ? el : MORSE_TABLE[`${el}`]);
    return result.join('')

}

module.exports = {
    decode
}