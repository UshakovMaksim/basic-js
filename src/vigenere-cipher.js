function validateInput(msg, key) {
  if (typeof msg !== 'string' || typeof key !== 'string'
    || msg === '' || key === '') {
    throw new Error;
  }
}

function getCodeAt(key, index = 0) {
  return key.charCodeAt(index % key.length) - 65;
}

class VigenereCipheringMachine {

  constructor(simple) {
    this.reverseCode = simple === false;
  }

  encrypt(msg, key) {
    validateInput(msg, key);
    const inKey = key.toUpperCase();
    let inText = msg.toUpperCase().split('');
    inText = this.reverseCode ? inText.reverse() : inText;
    let keyIndex = 0;
    return inText.reduce((acc, el) => {
      if (el === el.toLowerCase()) {
        acc += el;
      } else {
        acc += String.fromCharCode((getCodeAt(el) + getCodeAt(inKey, keyIndex)) % 26 + 65);
        keyIndex++;
      }
      return acc;
    }, '');
  }
  decrypt(msg, key) {
    validateInput(msg, key);
    const inKey = key.toUpperCase();
    let inText = msg.toUpperCase().split('');
    inText = this.reverseCode ? inText.reverse() : inText;
    let keyIndex = 0;
    return inText.reduce((acc, el) => {
      if (el === el.toLowerCase()) {
        acc += el;
      } else {
        let data = (getCodeAt(el) - getCodeAt(inKey, keyIndex)) % 26;
        data = data < 0 ? data + 26 : data;
        acc += String.fromCharCode(data + 65);
        keyIndex++;
      }
      return acc;
    }, '');
  }
}

module.exports = VigenereCipheringMachine;
