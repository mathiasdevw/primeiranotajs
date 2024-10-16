function ehPalindromo(str) {
    const strLimpa = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const strInvertida = strLimpa.split('').reverse().join('');
    return strLimpa === strInvertida;
}

console.log(ehPalindromo("A man, a plan, a canal: Panama"));
console.log(ehPalindromo("hello"));  

// essa daqui eu pedi muita ajuda ao gpt pq eu n soube nem começar ):
