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
    '*': ' ',
};

function decode(expr) {
    const arr = [];
    let strNew ="";
    for (let i = 0; i <= expr.length - 10; i = i + 10) {
        let str = expr.slice(i, i + 10);
        arr.push(str.slice(str.indexOf(1)).replace(/10/g, '.').replace(/11/g, '-'));
        }
    arr.forEach(element => {
        for (let key in MORSE_TABLE) {
            if (element === key) {
                strNew += MORSE_TABLE[key];
            }
        }
    });
    
    return strNew;
}

module.exports = {
    decode
}
